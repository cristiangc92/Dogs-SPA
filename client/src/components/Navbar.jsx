import React, { useEffect, useState } from "react";
import {
  getTemperaments,
  filterDogsByTemperaments,
  filterCreated,
  orderByName,
  orderByWeight,
} from "../actions";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperaments).sort(
    function (a, b) {
      if (a < b) return -1;
      else return 1;
    }
  );
  const [orden, setOrden] = useState("");

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  function handleFilterTemperaments(e) {
    dispatch(filterDogsByTemperaments(e.target.value));
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrden(e.target.value);
  }

  function handleSort2(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setOrden(e.target.value);
  }

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
              <Link to={"/dog"}>
                <button type="button" className="btn btn-outline-light">
                  Create Breed
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue="Temperaments"
                onChange={(e) => handleFilterTemperaments(e)}
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
                onChange={(e) => handleFilterCreated(e)}
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
                onChange={(e) => handleSort(e)}
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
                defaultValue="Weight"
                onChange={(e) => handleSort2(e)}
              >
                <option disabled>Weight</option>
                <option value="high">High</option>
                <option value="low">Low</option>
              </select>
            </li>
          </ul>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}
