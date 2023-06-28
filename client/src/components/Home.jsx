import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../actions";
import "./Home.css";
import Card from "./Card";
import Navbar from "./Navbar";
import Paginado from "./Paginado";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(20);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs?.slice(indexOfFirstDog, indexOfLastDog);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs())
      .then((response) => {
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="fondoHome">
      {error ? (
        <div>
          <h1>{error}</h1>
        </div>
      ) : loading ? (
        <div className="loadingFlex">
          <div
            className="spinner-border text-primary"
            style={{ width: "5rem", height: "5rem" }}
            role="status"
          ></div>
          <strong className="text-primary mt-2">Loading...</strong>
        </div>
      ) : (
        <div>
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
            {currentDogs.map((dog) => (
              <Link to={"/home/" + dog.id} key={dog.id} className="link">
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
              </Link>
            ))}
          </div>
          <div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
