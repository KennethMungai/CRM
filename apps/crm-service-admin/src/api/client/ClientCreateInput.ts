import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";
import { IpCreateNestedManyWithoutClientsInput } from "./IpCreateNestedManyWithoutClientsInput";
import { VmCreateNestedManyWithoutClientsInput } from "./VmCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  email?: string | null;
  ips?: IpCreateNestedManyWithoutClientsInput;
  name?: string | null;
  vms?: VmCreateNestedManyWithoutClientsInput;
};
