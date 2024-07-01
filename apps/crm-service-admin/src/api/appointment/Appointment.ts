import { Agent } from "../agent/Agent";
import { Client } from "../client/Client";

export type Appointment = {
  agent?: Agent | null;
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  trainingDetails: string | null;
  updatedAt: Date;
};
