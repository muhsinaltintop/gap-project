import SearchBar from "./_atoms/SearchBar";

const SearchBarComponent = ({ value, onChange, placeholder, title }) => {
  return (
    <SearchBar
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      title={title}
    />
  );
};

export default SearchBarComponent;
