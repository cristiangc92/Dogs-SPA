import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, vaciarDetail } from "../actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Detail.css";

export default function Detail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
    return function () {
      dispatch(vaciarDetail());
    };
  }, [dispatch, id]);

  const myDog = useSelector((state) => state.detail);

  return (
    <div className="fondoDetail">
      {myDog ? (
        <div className="contenedorDetail">
          <br />
          <h1 className="tituloDetail">{myDog.name}</h1>
          <br />
          <img className="imgDetail" src={myDog.image} alt="Image of breed" />
          <br />
          <h3 className="tempDetail">
            <strong>Temperaments:</strong> {myDog.temperament}
          </h3>
          <h3>
            <strong>Height:</strong> {myDog.minHeight} - {myDog.maxHeight}
          </h3>
          <h3>
            <strong>Weight:</strong> {myDog.minWeight} - {myDog.maxWeight}
          </h3>
          <h3>
            <strong>Life Span:</strong> {myDog.minLife_span} -{" "}
            {myDog.maxLife_span}
          </h3>
          <br />
          <Link to={"/home"}>
            <button type="button" className="btn btn-outline-light">
              ◁ Volver
            </button>
          </Link>
          <br />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
