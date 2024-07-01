import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type VmUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  name?: string | null;
  specifications?: string | null;
};
