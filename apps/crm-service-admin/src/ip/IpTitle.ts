import { Ip as TIp } from "../api/ip/Ip";

export const IP_TITLE_FIELD = "address";

export const IpTitle = (record: TIp): string => {
  return record.address?.toString() || String(record.id);
};
