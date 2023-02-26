const PersonItem = ({ person, index, getPerson }) => {
  const handleClick = (event) => {
    getPerson(event.target.value);
  };
  return (
    <tr >
      <td>{person.name}</td>
      <td>{person.height}</td>
      <td>{person.mass}</td>
      <td>{person.birth_year}</td>
      <td><button value={index} onClick={handleClick}>Detail</button></td>
    </tr>
  );
};

export default PersonItem;
