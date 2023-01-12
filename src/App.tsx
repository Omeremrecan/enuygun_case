import { useEffect, useState } from "react";
import AppContext from "./context/AppContext";
import { generateEmployees } from "./mock_data/EmployeeMockData";
import EmployeeList from "./pages/employee_list/EmployeeList.page";
import { IEmployeeModel } from "./types/IEmployee";

const App = () => {
  const [page, setPage] = useState(<EmployeeList />);
  const [employees, setEmployees] = useState<Array<IEmployeeModel>>();

  useEffect(() => {
    setEmployees(generateEmployees());
  }, []);


  return (
    <AppContext.Provider value={{ page, setPage, employees:employees ?? [], setEmployees }}>
      <AppContext.Consumer>{(context) => context.page}</AppContext.Consumer>
    </AppContext.Provider>
  );
};

export default App;
