import React from "react";
import "./Card.css";

export default function Card({
  image,
  name,
  temperament,
  minWeight,
  maxWeight,
  minLife_span,
  maxLife_span,
}) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body bg-primary text-black">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <h4 className="card-title">{name}</h4>
          </li>
          <li class="list-group-item">
            <p className="card-text">
              <strong>Temperaments:</strong> {temperament}.
            </p>
          </li>
          <li class="list-group-item">
            <p className="card-text">
              <strong>Weight:</strong> {minWeight} - {maxWeight} kg.
            </p>
          </li>
          <li class="list-group-item">
            <p className="card-text">
              <strong>Life Span:</strong> {minLife_span} - {maxLife_span} years.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
