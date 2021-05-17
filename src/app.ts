import express from 'express';
import { scheduleJob } from 'node-schedule';
import { Connection } from 'typeorm';
import { PORT } from './config/dotenv';
import ORMLoad from './connect/typeORM';
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

  // const schedule = scheduleJob('0 3,18 * * *', async () => {
  //   updateData
  // })

  const users = await updateData();

  console.log(users)

  app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
  })
}

serverStart();