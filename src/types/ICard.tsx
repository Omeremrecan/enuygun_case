import { IEmployeeModel } from "./IEmployee";

export interface ICardProps {
  data: IEmployeeModel;
  vote: () => void;
  goToDetail: () => void;
}
