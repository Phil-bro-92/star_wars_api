const StarshipDetail = ({ starship }) => {
  console.log(starship);
  return (
    <table className="starship-list">
      <thead>
        <tr>
          <th>{starship.name}</th>
        </tr>
      </thead>
    </table>
  );
};

export default StarshipDetail;
