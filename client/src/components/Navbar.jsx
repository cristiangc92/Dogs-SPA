import React, { useEffect } from "react";
import { getDogs, getTemperaments } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-primary position-fixed z-1">
      <div className="container-fluid">
        <h2 className="text-white fw-bold">Dogs SPA</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue="Temperaments"
              >
                <option disabled>Temperaments</option>
                <option value="All">All</option>
                {allTemperaments.map(
                  (t) =>
                    t !== "Not found" && (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    )
                )}
              </select>
            </li>
            <li className="nav-item">
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue="Origin"
              >
                <option disabled>Origin</option>
                <option value="All">All</option>
                <option value="Api">Api</option>
                <option value="Created">Created</option>
              </select>
            </li>
            <li className="nav-item">
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue="Order"
              >
                <option disabled>Order</option>
                <option value="asc">A to Z</option>
                <option value="desc">Z to A</option>
              </select>
            </li>
            <li className="nav-item">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option disabled>Weigh</option>
                <option value="2">High</option>
                <option value="3">Low</option>
              </select>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
