import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type VmCreateInput = {
  client?: ClientWhereUniqueInput | null;
  name?: string | null;
  specifications?: string | null;
};
