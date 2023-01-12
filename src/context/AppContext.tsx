import { createContext } from "react";
import { IAppContext } from "../types/IAppContext";

const AppContext = createContext<IAppContext>({
  page: <></>,
  setPage: () => {},
  employees: [],
  setEmployees: () => {},
});

export default AppContext;
