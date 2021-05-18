import axios from "axios";
import { API_KEY } from "../config/dotenv";
import { IGeneric } from "../interface/IGeneric";
import { ISeasonal } from "../interface/ISeasonal";
import { getRepository, Repository } from "typeorm";
import User from "../models/user.entity";

const delay = () => {
  return new Promise(result => setTimeout(result, 10000));
}

const response = async (data: User, userRepository: Repository<User>) => {

  const {
    uniqueId,
    uplayId,
    generation,
    name,
    userName,
  } = data;

  try {
    const genericRes = await axios.get(`https://api2.r6stats.com/public-api/stats/${userName}/pc/generic`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })

    const seasonalRes = await axios.get(`https://api2.r6stats.com/public-api/stats/${userName}/pc/seasonal`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    const genericData: IGeneric = genericRes.data;
    const seasonalData: ISeasonal = seasonalRes.data;

    const createUser: User = await userRepository.create();

    createUser.uniqueId = uniqueId;
    createUser.generation = generation;
    createUser.name = name;
    createUser.userName = userName;
    createUser.profileImage = genericData.avatar_url_256;
    createUser.level = genericData.progression.level;
    createUser.rank = seasonalData.seasons.crimson_heist.regions.apac[0].rank_text;
    createUser.rankImage = seasonalData.seasons.crimson_heist.regions.apac[0].rank_image;
    createUser.wl = Math.floor((genericData.stats.general.wins / (genericData.stats.general.wins + genericData.stats.general.losses)) * 100);
    createUser.wins = genericData.stats.general.wins;
    createUser.losses = genericData.stats.general.losses;
    createUser.kd = (genericData.stats.general.kd).toFixed(2);
    createUser.uplayId = genericData.uplay_id;

    await userRepository.save(createUser);

    console.log(`${name}의 계정 ${userName} 갱신 완료 uplayId=${uplayId}`)

  } catch (err) {

    console.log(`${name}의 계정 ${userName} 갱신 중 오류 발생 uplayId=${uplayId}`);
  }

}

export const updateData = async (): Promise<any> => {

  const userRepository = getRepository(User);

  const users: User[] = await userRepository.find({
    order: {
      createdAt: 'ASC',
    },
  });

  for (const data of users) {

    await response(data, userRepository);

    await delay();
  }

  return users;
}