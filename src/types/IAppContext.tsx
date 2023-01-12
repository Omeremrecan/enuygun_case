import { IEmployeeModel } from "./IEmployee";

export interface IAppContext {
  page: any;
  setPage: React.Dispatch<React.SetStateAction<JSX.Element>>;
  employees: Array<IEmployeeModel>;
  setEmployees: React.Dispatch<React.SetStateAction<IEmployeeModel[] | undefined>>
}
