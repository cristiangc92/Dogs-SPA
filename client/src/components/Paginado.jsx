import React from "react";
import "./Paginado.css";

export default function Paginado({ dogsPerPage, allDogs, paginado }) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav className="paginado" aria-label="Page navigation example">
      <ul className="pagination justify-content-center mt-5">
        {pageNumbers?.map((number) => (
          <li className="page-item" key={number}>
            <a
              className="page-link bg-primary text-white fw-bold"
              onClick={() => paginado(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
