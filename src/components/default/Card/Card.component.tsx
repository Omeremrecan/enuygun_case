import React, { useState } from "react";
import { Button } from "../../../dependencies/selected-profile";
import { ICardProps } from "../../../types/ICard";

const Card = ({ data, vote, goToDetail }: ICardProps) => {
  const { name, surname, title, email, phoneNumber, pictureUrl, voteCount } =
    data;

  return (
    <div className="card">
      <div className="card__vote-count">{voteCount}</div>
      <div className="card__content">
        <img className="card__content__picture" src={pictureUrl} alt="" />

        <div className="card__content__detail">
          <div className="card__content__detail__personal-info">
            <div className="card__content__detail__personal-info__item">
              <div className="card__content__detail__personal-info__item--title">
                Name/Surname
              </div>
              <div className="card__content__detail__personal-info__item--value">{`${name} ${surname}`}</div>
            </div>
            <div className="card__content__detail__personal-info__item">
              <div className="card__content__detail__personal-info__item--title">
                Title
              </div>
              <div className="card__content__detail__personal-info__item--value">{`${title}`}</div>
            </div>
          </div>
          <div className="card__content__detail__actions">
            <Button text="vote" onClick={vote} />
            <Button text="detail" onClick={goToDetail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
