import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentCreateInput = {
  agent?: AgentWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  trainingDetails?: string | null;
};
