import { Client } from "../client/Client";

export type Ip = {
  address: string | null;
  client?: Client | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
