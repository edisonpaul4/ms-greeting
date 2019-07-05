import * as express from "express";
import { GreetingResponseModel, IGreetingRequestModel } from "../models/greeting.model";
export class GreetingRoutes {
  private routes = express.Router();

  public getRoutes() {
    this.initRoutes();
    return this.routes;
  }

  private initRoutes() {
    this.routes.post('/', (req: express.Request, res: express.Response) => {
      const greetingRequest = req.body as IGreetingRequestModel;
      const greetingResponse = new GreetingResponseModel();
      return res.status(200).send(greetingResponse.getResponse(greetingRequest));
    });

    this.routes.use('/', (req: express.Request, res: express.Response) => {
      return res.status(500).send();
    });
  }
}
