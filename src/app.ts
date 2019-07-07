import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as http from 'http';
import { GreetingRoutes } from './routes/greeting';

class Server {
  public app: express.Application;

  private server: http.Server;
  private GreetingRoutes!: GreetingRoutes;

  // tslint:disable-next-line:member-ordering
  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.app.use(cors());
    this.app.use(bodyParser.json());

    this.attachMiddlewares();
    this.attachEndpoints();
    this.listen();
  }

  private attachEndpoints() {
    this.GreetingRoutes = new GreetingRoutes();
    this.app.use('/DevOps', this.GreetingRoutes.getRoutes());
  }

  private attachMiddlewares() {
    // this.app.use(VerifyToken);
  }

  private listen(): void {
    this.server.listen(5000, () => {
      console.log(`Running on port: ${5000}`);
    });
  }

}

export = Server.bootstrap().app;
