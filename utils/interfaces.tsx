import { Url } from "url";

export interface IHome {
  address: string;
  contract: Url | string;
  reports: Array<{
    name: string;
    link: Url | string;
  }>;
}
