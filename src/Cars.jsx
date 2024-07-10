import { useState } from "react";

export default function Cars() {
  const [car, setCar] = useState({
    name: "Ford",
    model: "Fiesta",
    year: 2014,
  });

  function changeCarYear(event) {
    setCar((prevCar) => ({ ...prevCar, year: event.target.value }));
  }
  function changeCarName(event) {
    setCar((prevCar) => ({ ...prevCar, name: event.target.value }));
  }
  function changeCarModel(event) {
    setCar((prevCar) => ({ ...prevCar, model: event.target.value }));
  }

  return (
    <div>
      <ul>
        <li>{car.name}</li>
        <li>{car.model}</li>
        <li>{car.year}</li>
      </ul>
      <input type="text" value={car.model} onChange={changeCarModel} />
      <br />
      <input type="text" value={car.name} onChange={changeCarName} />
      <br />
      <input type="number" value={car.year} onChange={changeCarYear} />
    </div>
  );
}
