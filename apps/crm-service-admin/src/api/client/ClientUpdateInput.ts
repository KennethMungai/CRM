import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";
import { IpUpdateManyWithoutClientsInput } from "./IpUpdateManyWithoutClientsInput";
import { VmUpdateManyWithoutClientsInput } from "./VmUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  email?: string | null;
  ips?: IpUpdateManyWithoutClientsInput;
  name?: string | null;
  vms?: VmUpdateManyWithoutClientsInput;
};
