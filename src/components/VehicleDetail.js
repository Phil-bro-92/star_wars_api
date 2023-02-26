const VehicleDetail = ({ vehicle }) => {
  return (
    <table className="vehicle-list">
      <thead>
        <tr>
          <th colSpan={2}>{vehicle.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Model</th>
          <td>{vehicle.model}</td>
        </tr>
        <tr>
          <th>Manufacturer</th>
          <td>{vehicle.manufacturer}</td>
        </tr>
        <tr>
          <th>Cost in Credits</th>
          <td>{vehicle.cost_in_credits}</td>
        </tr>
        <tr>
          <th>Length</th>
          <td>{vehicle.length.trim()}m</td>
        </tr>
        <tr>
          <th>Max Speed</th>
          <td>{vehicle.max_atmosphering_speed}mph</td>
        </tr>
        <tr>
          <th>Crew</th>
          <td>{vehicle.crew}</td>
        </tr>
        <tr>
          <th>Passengers</th>
          <td>{vehicle.passengers}</td>
        </tr>
        <tr>
          <th>Cargo Capacity</th>
          <td>{vehicle.cargo_capacity}kg</td>
        </tr>
        <tr>
          <th>Consumables</th>
          <td>{vehicle.consumables}</td>
        </tr>
        <tr>
          <th>Vehicle Class</th>
          <td>{vehicle.vehicle_class}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default VehicleDetail;
