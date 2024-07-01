import { IpWhereInput } from "./IpWhereInput";
import { IpOrderByInput } from "./IpOrderByInput";

export type IpFindManyArgs = {
  where?: IpWhereInput;
  orderBy?: Array<IpOrderByInput>;
  skip?: number;
  take?: number;
};
