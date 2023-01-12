export interface IEmployeeModel {
  id: number;
  name: string;
  surname: string;
  title: string;
  email: string;
  phoneNumber: string;
  pictureUrl: string;
  voteCount: number;
  description?: string
}

export interface IEmployeeDetailProps {
  data: IEmployeeModel;
}

export interface IEmployeeListProps {
  
}
