import StarshipItem from "./StarshipItem";

const StarshipList = ({ starships, getStarship }) => {
  const starshipNodes = starships.map((starship, index) => {
    return (
      <StarshipItem
        key={index}
        starship={starship}
        getStarship={getStarship}
        index={index}
      />
    );
  });
  return (
    <table className="starship-list">
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
      <tbody>{starshipNodes}</tbody>
    </table>
  );
};

export default StarshipList;
