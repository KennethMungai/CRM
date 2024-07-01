import { Vm as TVm } from "../api/vm/Vm";

export const VM_TITLE_FIELD = "name";

export const VmTitle = (record: TVm): string => {
  return record.name?.toString() || String(record.id);
};
