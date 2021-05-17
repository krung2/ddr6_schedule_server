import express from 'express';
import { scheduleJob } from 'node-schedule';
import { Connection } from 'typeorm';
import ORMLoad from './connect/typeORM';

class App {

  public application: express.Application;

  constructor() {
    this.application = express();
  }

}

const app: express.Application = new App().application;
const PORT: number = 8080;

const serverStart = async (): Promise<void> => {

  const connection: Connection = await ORMLoad();

  const schedule = scheduleJob('0 3,18 * * *', async () => {
    console.log(1);
    console.log(new Date());
  })

  app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
  })
}

serverStart();