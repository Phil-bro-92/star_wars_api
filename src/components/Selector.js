const Selector = ({ getSelectedCategory, resetSelected }) => {
  const handleChange = (event) => {
    getSelectedCategory(event.target.value);
    resetSelected();
  };
  return (
    <>
      <select defaultValue="" onChange={handleChange}>
        <option value="">Select a Category</option>
        <option value="0">People</option>
        <option value="1">Planets</option>
        <option value="2">Species</option>
        <option value="3">vehicles</option>
        <option value="4">Starships</option>
      </select>
    </>
  );
};

export default Selector;
