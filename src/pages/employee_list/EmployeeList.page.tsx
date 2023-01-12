import React from "react";
import AppContext from "../../context/AppContext";
import { Card } from "../../dependencies/selected-profile";
import { SimpleEvent } from "../../events/EventCollection";
import { IEmployeeListProps, IEmployeeModel } from "../../types/IEmployee";
import EmployeeDetail from "../employee_detail/EmployeeDetail.page";

const EmployeeList = ({}: IEmployeeListProps) => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className="employee-list">
          <div className="employee-list__header">Employee List</div>
          <hr />
          <div className="employee-list__data">
            {(context.employees ?? [])
              .sort((x, y) => (x.voteCount < y.voteCount ? 1 : -1))
              .map((employee) => (
                <Card
                  key={employee.id}
                  data={employee}
                  vote={() => {
                    SimpleEvent.fire({
                      name: "Vote",
                      detail: { employee, newVoteCount: employee.voteCount + 1 },
                    });
                    context.setEmployees(
                      [
                        ...(context.employees ?? []).filter(
                          (x) => x.id != employee.id
                        ),
                        { ...employee, voteCount: employee.voteCount + 1 },
                      ].sort((x, y) => (x.id < y.id ? 1 : -1))
                    );
                  }}
                  goToDetail={() => {
                    context.setPage(<EmployeeDetail data={employee} />);
                  }}
                />
              ))}
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default EmployeeList;
