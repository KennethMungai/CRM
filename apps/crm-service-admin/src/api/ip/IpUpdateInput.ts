import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type IpUpdateInput = {
  address?: string | null;
  client?: ClientWhereUniqueInput | null;
};
