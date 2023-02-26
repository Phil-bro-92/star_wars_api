import PlanetItem from "./PlanetItem";

const PlanetList = ({ planets, getPlanet }) => {
  const planetNodes = planets.map((planet, index) => {
    return <PlanetItem key={index} planet={planet} index={index} getPlanet={getPlanet} />;
  });
  return (
    <table className="planet-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Climate</th>
          <th>Terrain</th>
          <th>Diameter</th>
          <th>Population</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>{planetNodes}</tbody>
    </table>
  );
};

export default PlanetList;
