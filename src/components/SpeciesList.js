import SpeciesItem from "./SpeciesItem";
const SpeciesList = ({ species, getSpecies }) => {
  const speciesNodes = species.map((spec, index) => {
    return <SpeciesItem key={index} spec={spec} getSpecies={getSpecies} index={index} />;
  });
  return (
    <table className="species-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>classification</th>
          <th>Designation</th>
          <th>Average Height</th>
          <th>Language</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>{speciesNodes}</tbody>
    </table>
  );
};

export default SpeciesList;
