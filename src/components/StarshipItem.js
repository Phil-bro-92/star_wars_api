const StarshipItem = ({ starship, getStarship, index }) => {
  const handleClick = (event) => {
    getStarship(event.target.value);
  };
  return (
    <tr>
      <td>{starship.name}</td>
      <td>{starship.model}</td>
      <td>{starship.manufacturer}</td>
      <td>{starship.cost_in_credits}</td>
      <td>{starship.crew}</td>
      <td>{starship.starship_class}</td>
      <td>
        <button value={index} onClick={handleClick}>
          Detail
        </button>
      </td>
    </tr>
  );
};

export default StarshipItem;
