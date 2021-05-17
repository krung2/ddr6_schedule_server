import express from 'express';

class App {

  public application: express.Application;

  constructor() {
    this.application = express();
  }

}

const app: express.Application = new App().application;
const PORT: number = 8080;



app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
})