import { Appointment } from "../appointment/Appointment";
import { Ip } from "../ip/Ip";
import { Vm } from "../vm/Vm";

export type Client = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  ips?: Array<Ip>;
  name: string | null;
  updatedAt: Date;
  vms?: Array<Vm>;
};
