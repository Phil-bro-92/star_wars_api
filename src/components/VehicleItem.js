const VehicleItem = ({ vehicle, getVehicle, index }) => {
  const handleClick = (event) => {
    getVehicle(event.target.value);
  };
  return (
    <tr>
      <td>{vehicle.name}</td>
      <td>{vehicle.model}</td>
      <td>{vehicle.manufacturer}</td>
      <td>{vehicle.cost_in_credits}</td>
      <td>{vehicle.crew}</td>
      <td>{vehicle.vehicle_class}</td>
      <td>
        <button value={index} onClick={handleClick}>
          Detail
        </button>
      </td>
    </tr>
  );
};

export default VehicleItem;
