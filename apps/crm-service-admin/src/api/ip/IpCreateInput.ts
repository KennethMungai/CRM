import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type IpCreateInput = {
  address?: string | null;
  client?: ClientWhereUniqueInput | null;
};
