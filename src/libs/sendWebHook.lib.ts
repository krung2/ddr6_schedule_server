import { WEB_HOOK } from '../config/dotenv';
import axios from "axios"

export const sendWebHook = async (message: string) => {

  try {

    await axios.post(WEB_HOOK, {
      content: message,
    })
  } catch (err) {

    console.log('웹훅 오류 발생')
    throw 'webHook Error';
  }
}