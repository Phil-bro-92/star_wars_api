const PlanetItem = ({ planet, index, getPlanet }) => {
  const handleClick = (event) => {
    getPlanet(event.target.value);
  };
  return (
    <tr>
      <td>{planet.name}</td>
      <td>{planet.climate}</td>
      <td>{planet.terrain}</td>
      <td>{planet.diameter}</td>
      <td>{planet.population}</td>
      <td>
        <button value={index} onClick={handleClick}>
          Detail
        </button>
      </td>
    </tr>
  );
};

export default PlanetItem;
