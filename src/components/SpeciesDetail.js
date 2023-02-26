const SpeciesDetail = ({ species }) => {
  return (
    <table className="species-list">
      <thead>
        <tr>
          <th colSpan={2}>{species.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>classification</th>
          <td>{species.classification}</td>
        </tr>
        <tr>
          <th>Designation</th>
          <td>{species.designation}</td>
        </tr>
        <tr>
          <th>Average Height</th>
          <td>{species.average_height}cm</td>
        </tr>
        <tr>
          <th>Skin Colours</th>
          <td>{species.skin_colors}</td>
        </tr>
        <tr>
          <th>Hair Colours</th>
          <td>{species.hair_colors}</td>
        </tr>
        <tr>
          <th>Eye Colours</th>
          <td>{species.eye_colors}</td>
        </tr>
        <tr>
          <th>Average Lifespan</th>
          <td>{species.average_lifespan} years</td>
        </tr>
        <tr>
          <th>Language</th>
          <td>{species.language}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SpeciesDetail;
