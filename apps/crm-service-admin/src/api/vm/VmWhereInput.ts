import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VmWhereInput = {
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  specifications?: StringNullableFilter;
};
