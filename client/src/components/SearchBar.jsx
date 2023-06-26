import React, { useState } from "react";
import "./SearchBar.css";
import { getNameDogs } from "../actions";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      return alert("Debe ingresar un nombre");
    } else {
      dispatch(getNameDogs(name));
      setName("");
      document.getElementById("search").value = "";
    }
  }

  return (
    <form className="d-flex" role="search">
      <input
        id="search"
        className="form-control me-2"
        type="search"
        placeholder="Breed name..."
        aria-label="Search"
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="btn btn-outline-light"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Search
      </button>
    </form>
  );
}
