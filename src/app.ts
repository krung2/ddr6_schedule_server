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

  const schedule = scheduleJob('56 2,18 * * *', async () => {

    await updateData();
  })

  app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
  })
}

serverStart();