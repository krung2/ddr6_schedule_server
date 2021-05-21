import axios from "axios";
import { API_KEY } from "../config/dotenv";
import { IGeneric } from "../interface/IGeneric";
import { ISeasonal } from "../interface/ISeasonal";
import { getRepository, Repository } from "typeorm";
import User from "../models/user.entity";
import { sendWebHook } from "src/libs/sendWebHook.lib";

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

    const successMessage = `${name}의 계정 ${userName} 갱신 완료 uplayId=${uplayId}`;
    await sendWebHook(successMessage)
    console.log(successMessage);

  } catch (err) {

    if (err === 'webHook Error') {

      console.log('웹훅 에러');
      return;
    }

    const errorMessage = `${name}의 계정 ${userName} 갱신 중 오류 발생 uplayId=${uplayId}`;

    try {

      await sendWebHook(errorMessage);
    } catch (err) {

      console.log('웹훅 에러');
    }
    console.log(errorMessage);
  }

}

export const updateData = async (): Promise<void> => {

  const startDate = new Date();
  startDate.setHours(startDate.getHours() + 9);
  const start = startDate.toLocaleDateString() + ' ' + startDate.toLocaleTimeString() + '시 스케줄 시작';

  await sendWebHook(start);
  console.log(start);

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

  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 9);
  const end = endTime.toLocaleDateString() + ' ' + endTime.toLocaleTimeString() + '에 작업을 완료하였습니다';

  await sendWebHook(end);
  console.log(sendWebHook);
}