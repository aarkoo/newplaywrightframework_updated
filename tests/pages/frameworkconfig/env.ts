import process from "node:process";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      APP_USERNAME: string;
      PASSWORD : string;
    }
  }
}

export class Env {
  public static readonly BASE_URL: string = process.env.BASE_URL ?? "";

  public static readonly APP_USERNAME: string = process.env.APP_USERNAME ?? "";

   public static readonly PASSWORD: string = process.env.PASSWORD ?? "";

}
