import PersonItem from "./PersonItem";

const PeopleList = ({ people, getPerson}) => {
  const peopleNodes = people.map((person, index) => {
    return <PersonItem key={index} person={person} index={index} getPerson={getPerson} />;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Birth Year</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>{peopleNodes}</tbody>
    </table>
  );
};

export default PeopleList;
