import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type IpWhereInput = {
  address?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
};
