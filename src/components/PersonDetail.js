import { useState, useEffect } from "react";

const PersonDetail = ({ person }) => {
  const [homeworld, setHomeworld] = useState("");

  useEffect(() => {
    fetchHomeWorld();
  });
  const fetchHomeWorld = () => {
    fetch(person.homeworld)
      .then((response) => response.json())
      .then((data) => setHomeworld(data.name));
  };
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>{person.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Height</th>
          <td>{person.height}</td>
        </tr>
        <tr>
          <th>Mass</th>
          <td>{person.mass}</td>
        </tr>
        <tr>
          <th>Hair Colour</th>
          <td>{person.hair_color}</td>
        </tr>
        <tr>
          <th>Eye Colour</th>
          <td>{person.eye_color}</td>
        </tr>
        <tr>
          <th>Birth Year</th>
          <td>{person.birth_year}</td>
        </tr>
        <tr>
          <th>Gender</th>
          <td>{person.gender}</td>
        </tr>
        <tr>
          <th>Homeworld</th>
          {homeworld ? <td>{homeworld}</td> : null}
        </tr>
        <tr>
          <th>Mass</th>
          <td>{person.mass}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PersonDetail;
