import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [superheroes, setSuperheroes] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/api");

    console.log(response.data)
    setSuperheroes(response.data.superheroes);
  };

  // response to changes on the system
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <h1>Superheroes</h1>
      <div className="card">
        {superheroes.map((superheroe, index) => (
          <ul key={index}>
            <li>
              <h2>{superheroe.superhero}</h2>
              <div className="info">
                <p>Publisher: {superheroe.publisher}</p>
                <p>Alter ego: {superheroe.alter_ego}</p>
                <p>First appearance: {superheroe.first_appearance}</p>
                <p>Characters: {superheroe.characters}</p>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
