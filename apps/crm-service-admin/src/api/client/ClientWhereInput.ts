import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IpListRelationFilter } from "../ip/IpListRelationFilter";
import { VmListRelationFilter } from "../vm/VmListRelationFilter";

export type ClientWhereInput = {
  appointments?: AppointmentListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  ips?: IpListRelationFilter;
  name?: StringNullableFilter;
  vms?: VmListRelationFilter;
};
