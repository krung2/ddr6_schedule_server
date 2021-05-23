import express from 'express';
import { scheduleJob } from 'node-schedule';
import { PORT } from './config/dotenv';
import ORMLoad from './connect/typeORM';
import { sendErrorWebHook, sendWebHook } from './libs/sendWebHook.lib';
import { updateData } from './update/update';

class App {

  public application: express.Application;

  constructor() {
    this.application = express();
  }

}

const app: express.Application = new App().application;

const serverStart = async (): Promise<void> => {

  await ORMLoad();
  await sendWebHook('서버가 켜졌습니다!!');
  await sendErrorWebHook('에러서버 연동 완료');

  const schedule = scheduleJob('0 * * * *', async () => {

    await updateData();
  })

  app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
  })
}

serverStart();