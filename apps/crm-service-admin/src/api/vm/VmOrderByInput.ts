import { SortOrder } from "../../util/SortOrder";

export type VmOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  specifications?: SortOrder;
  updatedAt?: SortOrder;
};
