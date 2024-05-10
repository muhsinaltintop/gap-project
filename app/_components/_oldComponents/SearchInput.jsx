const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <div>
      <h4>Search in the policy Title:</h4>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
