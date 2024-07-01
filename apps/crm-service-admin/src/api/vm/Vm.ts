import { Client } from "../client/Client";

export type Vm = {
  client?: Client | null;
  createdAt: Date;
  id: string;
  name: string | null;
  specifications: string | null;
  updatedAt: Date;
};
