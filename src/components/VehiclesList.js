import VehicleItem from "./VehicleItem";

const VehiclesList = ({ vehicles, getVehicle }) => {
  const vehicleNodes = vehicles.map((vehicle, index) => {
    return (
      <VehicleItem
        key={index}
        vehicle={vehicle}
        getVehicle={getVehicle}
        index={index}
      />
    );
  });
  return (
    <table className="vehicle-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Model</th>
          <th>Manufacturer</th>
          <th>Cost</th>
          <th>Crew</th>
          <th>Class</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>{vehicleNodes}</tbody>
    </table>
  );
};

export default VehiclesList;
