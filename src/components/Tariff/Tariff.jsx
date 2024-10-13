import React from "react";
import "../Tariff/Tariff.css";

function Card({ price, color, speed, isSelected }) {
  return (
    <div className="container">
      <div className={`card ${isSelected ? "selected" : ""}`}>
        <div className={color}>
          <h2 className="card__header">Безлимитный {price}</h2>
          <h3 className="card__price">
            {price}
            <span className="card__text">руб/мес</span>
          </h3>
        </div>
        <p>до {speed} Мбит/сек</p>
        <div className="footer">
          <p>Объем включенного</p>
          <p>трафика не ограничен</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
