const PlanetDetail = ({ planet }) => {
  return (
    <table className="planet-list">
      <thead>
        <tr>
          <th colSpan={2}>{planet.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Rotation Period</th>
          <td>{planet.rotation_period}</td>
        </tr>
        <tr>
          <th>Orbital Period</th>
          <td>{planet.orbital_period}</td>
        </tr>
        <tr>
          <th>Diameter</th>
          <td>{planet.diameter}</td>
        </tr>
        <tr>
          <th>Climate</th>
          <td>{planet.climate}</td>
        </tr>
        <tr>
          <th>Gravity</th>
          <td>{planet.gravity}</td>
        </tr>
        <tr>
          <th>Terrain</th>
          <td>{planet.terrain}</td>
        </tr>
        <tr>
          <th>Surface Water</th>
          <td>{planet.surface_water}</td>
        </tr>
        <tr>
          <th>Population</th>
          <td>{planet.population}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PlanetDetail;
