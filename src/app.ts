import express from 'express';
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

  await ORMLoad();

  app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
  })
}

serverStart();