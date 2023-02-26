const StarshipDetail = ({ starship }) => {
  return (
    <table className="starship-list">
      <thead>
        <tr>
          <th colSpan={2}>{starship.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Model</th>
          <td>{starship.model}</td>
        </tr>
        <tr>
          <th>Manufacturer</th>
          <td>{starship.manufacturer}</td>
        </tr>
        <tr>
          <th>Cost</th>
          <td>{starship.cost_in_credits}</td>
        </tr>
        <tr>
          <th>Length</th>
          <td>{starship.length}m</td>
        </tr>
        <tr>
          <th>Max Atmosphering Speed</th>
          <td>{starship.max_atmosphering_speed}</td>
        </tr>
        <tr>
          <th>Crew</th>
          <td>{starship.crew}</td>
        </tr>
        <tr>
          <th>Cargo Capacity</th>
          <td>{starship.cargo_capacity}</td>
        </tr>
        <tr>
          <th>Consumables</th>
          <td>{starship.consumables}</td>
        </tr>
        <tr>
          <th>Hyperdrive Rating</th>
          <td>{starship.hyperdrive_rating}</td>
        </tr>
        <tr>
          <th>Starship Class</th>
          <td>{starship.starship_class}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default StarshipDetail;
