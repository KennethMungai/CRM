import { VmWhereInput } from "./VmWhereInput";
import { VmOrderByInput } from "./VmOrderByInput";

export type VmFindManyArgs = {
  where?: VmWhereInput;
  orderBy?: Array<VmOrderByInput>;
  skip?: number;
  take?: number;
};
