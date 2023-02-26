const SpeciesItem = ({ spec, index, getSpecies }) => {
  const handleClick = (event) => {
    getSpecies(event.target.value);
  };
  return (
    <tr>
      <td>{spec.name}</td>
      <td>{spec.classification}</td>
      <td>{spec.designation}</td>
      <td>{spec.average_height}</td>
      <td>{spec.language}</td>
      <td>
        <button value={index} onClick={handleClick}>
          Detail
        </button>
      </td>
    </tr>
  );
};

export default SpeciesItem;
