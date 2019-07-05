export interface IGreetingRequestModel {
  message: string;
  to: string;
  from: string;
  timeToLifeSec: number;
}
export class GreetingResponseModel {
  public message: string;
  public getResponse(greeting: IGreetingRequestModel) {
    this.message = this.isValid(greeting) ? `Hello ${greeting.to} your message will be send` : 'ERROR';
    return this;
  }

  private isValid(greeting: IGreetingRequestModel): boolean {
    return greeting.message !== undefined
      && greeting.to !== undefined &&
      greeting.from !== undefined &&
      greeting.timeToLifeSec !== undefined;
  }
}
