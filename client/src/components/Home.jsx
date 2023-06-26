import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../actions";
import "./Home.css";
import Card from "./Card";
import Navbar from "./Navbar";
import Paginado from "./Paginado";
import Footer from "./Footer";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(20);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentPokemons = allDogs?.slice(indexOfFirstDog, indexOfLastDog);
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
  }, []);

  return (
    <div className="fondoHome">
      <div>
        <Navbar />
      </div>
      <div>
        <Paginado
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          paginado={paginado}
        />
      </div>
      <div className="containerCards">
        {currentPokemons.map((dog) => (
          <Card
            key={dog.id}
            image={dog.image}
            name={dog.name}
            temperament={dog.temperament}
            minWeight={dog.minWeight}
            maxWeight={dog.maxWeight}
            minLife_span={dog.minLife_span}
            maxLife_span={dog.maxLife_span}
          />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
