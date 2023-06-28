import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs, getTemperaments, postDog } from "../actions";
import "./DogCreate.css";

export default function DogCreate() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const dogs = useSelector((state) => state.dogs);
  const [input, setInput] = useState({
    name: "",
    image: "",
    minHeight: 0,
    maxHeight: 0,
    minWeight: 0,
    maxWeight: 0,
    minLife_span: 0,
    maxLife_span: 0,
    temperament: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      [e.target.image]: e.target.value,
      [e.target.minHeight]: e.target.value,
      [e.target.maxHeight]: e.target.value,
      [e.target.minWeight]: e.target.value,
      [e.target.maxWeight]: e.target.value,
      [e.target.minLife_span]: e.target.value,
      [e.target.maxLife_span]: e.target.value,
    });
  }

  function handleSelect(e) {
    setInput({
      ...input,
      temperament:
        input.temperament.length < 10
          ? input.temperament.includes(e.target.value)
            ? input.temperament
            : [...input.temperament, e.target.value]
          : input.temperament,
    });
  }

  function handleDelete(e) {
    setInput({
      ...input,
      temperament: input.temperament.filter((t) => t !== e),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.name.trim() === "") {
      return alert("Debe ingresar un nombre.");
    } else if (
      dogs.find(
        (e) => e.name.toLowerCase().trim() === input.name.toLowerCase().trim()
      )
    ) {
      return alert(`La raza ${input.name} ya existe.`);
    } else if (
      input.minHeight.trim() === "" ||
      input.minHeight < 1 ||
      input.minHeight > 105
    ) {
      return alert("Coloca una altura minima entre 9 y 105 cm.");
    } else if (
      input.maxHeight.trim() === "" ||
      input.maxHeight < 1 ||
      input.maxHeight > 105
    ) {
      return alert("Coloca una altura maxima entre 9 y 105 cm.");
    } else if (
      input.minWeight.trim() === "" ||
      input.minWeight < 1 ||
      input.minWeight > 90
    ) {
      return alert("Coloca un peso minimo entre 1 y 90.");
    } else if (
      input.maxWeight.trim() === "" ||
      input.maxWeight < 1 ||
      input.maxWeight > 90
    ) {
      return alert("Coloca un peso maximo entre 1 y 90.");
    } else if (
      input.minLife_span.trim() === "" ||
      input.minLife_span < 1 ||
      input.minLife_span > 20
    ) {
      return alert("Coloca una espectativa de vida minina entre 1 a 30.");
    } else if (
      input.maxLife_span.trim() === "" ||
      input.maxLife_span < 0.1 ||
      input.maxLife_span > 1000
    ) {
      return alert("Coloca una espectativa de vida maxima entre 1 a 30.");
    } else if (input.temperament.length === 0) {
      return alert("Selecciona uno o más Temperamentos.");
    } else {
      dispatch(postDog(input));
      alert("Raza creada con exito!!");
      setInput({
        name: "",
        image: "",
        minHeight: 0,
        maxHeight: 0,
        minWeight: 0,
        maxWeight: 0,
        minLife_span: 0,
        maxLife_span: 0,
        temperament: [],
      });
      document.getElementById("formulario").reset();
    }
  }

  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className="fondoCreate">
      <div className="formCreate">
        <form
          id="formulario"
          className="row g-3 bg-primary text-white"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="col-md-6">
            <label htmlFor="validationDefault01" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              value={input.name}
              placeholder="Breed name..."
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault02" className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              value={input.image}
              name="image"
              placeholder="URL"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="validationDefault03" className="form-label">
              Min Height
            </label>
            <input
              type="number"
              className="form-control"
              id="validationDefault03"
              value={input.minHeight}
              name="minHeight"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="validationDefault04" className="form-label">
              Max Height
            </label>
            <input
              type="number"
              className="form-control"
              id="validationDefault04"
              value={input.maxHeight}
              name="maxHeight"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="validationDefault05" className="form-label">
              Min Weight
            </label>
            <input
              type="number"
              className="form-control"
              id="validationDefault05"
              value={input.minWeight}
              name="minWeight"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="validationDefault06" className="form-label">
              Max Weight
            </label>
            <input
              type="number"
              className="form-control"
              id="validationDefault06"
              value={input.maxWeight}
              name="maxWeight"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="validationDefault07" className="form-label">
              Min Life Span
            </label>
            <input
              type="number"
              className="form-control"
              id="validationDefault07"
              value={input.minLife_span}
              name="minLife_span"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="validationDefault08" className="form-label">
              Max Life Span
            </label>
            <input
              type="number"
              className="form-control"
              id="validationDefault08"
              value={input.maxLife_span}
              name="maxLife_span"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="validationDefault09" className="form-label">
              Temperaments (max 10)
            </label>
            <select
              className="form-select"
              id="validationDefault09"
              defaultValue="Choose"
              onChange={(e) => handleSelect(e)}
            >
              <option disabled value="Choose">
                Choose...
              </option>
              {temperaments?.map((t) => (
                <option value={t} key={t}>
                  {t}
                </option>
              ))}
            </select>
            <div className="listaUl">
              <br />
              <ul className="list-group align-items-center ulDetail">
                <li className="list ps-2 pt-1 pb-1 bg-primary">
                  {input.temperament?.map((t) => (
                    <div key={t}>
                      {t + " "}
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm buttonClose me-2"
                        onClick={() => handleDelete(t)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </li>
              </ul>
            </div>
          </div>
          <div className="botonesDetail">
            <div className="col-6 mb-2">
              <button className="btn btn-light" type="submit">
                Create Pokemon ✓
              </button>
            </div>
            <div className="col-6">
              <Link to={"/home"}>
                <button type="button" className="btn btn-light">
                  ◁ Volver
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
