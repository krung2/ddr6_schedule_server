import { getRepository } from "typeorm";
import User from "../models/user.entity";

export const updateData = () => {

  const userRepository = getRepository(User);

  return userRepository.find();
}