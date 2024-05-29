import SearchBar from "./_atoms/SearchBar";

const SearchBarComponent = ({ value, onChange, placeholder, title }) => {
  return (
    <div>
      <SearchBar
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        title={title}
      />
    </div>
  );
};

export default SearchBarComponent;
