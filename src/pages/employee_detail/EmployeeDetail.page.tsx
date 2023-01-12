import React, { useEffect } from "react";
import AppContext from "../../context/AppContext";
import { Button, Card } from "../../dependencies/selected-profile";
import { SimpleEvent } from "../../events/EventCollection";
import { IEmployeeDetailProps } from "../../types/IEmployee";
import EmployeeList from "../employee_list/EmployeeList.page";

const EmployeeDetail = ({ data }: IEmployeeDetailProps) => {
  const {
    name,
    surname,
    title,
    email,
    phoneNumber,
    pictureUrl,
    voteCount,
    description,
  } = data;

  useEffect(() => {
    SimpleEvent.fire({ name: "Employee detail viewed", detail: data });
  }, []);

  return (
    <div className="employee-detail">
      <div className="employee-detail__header">Employee Detail</div>
      <hr />
      <div className="employee-detail__content">
        <img
          className="employee-detail__content__picture"
          src={pictureUrl}
          alt=""
        />

        <div className="employee-detail__content__detail">
          <div className="employee-detail__content__detail__personal-info">
            <div className="employee-detail__content__detail__personal-info__item">
              {`${name} ${surname}`}
            </div>
            <div className="employee-detail__content__detail__personal-info__item">
              {title}
            </div>
            <div className="employee-detail__content__detail__personal-info__item">
              {email}
            </div>
            <div className="employee-detail__content__detail__personal-info__item">
              {phoneNumber}
            </div>
            <div className="employee-detail__content__detail__personal-info__item">
              Vote Count: {voteCount}
            </div>
          </div>
        </div>
      </div>
      <div className="employee-detail__actions">
        <AppContext.Consumer>
          {(context) => (
            <Button
              text="Back To The List"
              onClick={() => {
                context.setPage(<EmployeeList />);
              }}
            />
          )}
        </AppContext.Consumer>
      </div>
      <hr />
      <div className="employee-detail__description">{description}</div>
    </div>
  );
};

export default EmployeeDetail;
