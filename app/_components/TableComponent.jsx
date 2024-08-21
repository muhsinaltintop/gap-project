import PlainTable from "./_atoms/PlainTable";



const TableComponent = ({ policies, headers, pathName, selectedCountries }) => {
  return (
    <div>
               <PlainTable policies={policies} headersData={headers} pathName={pathName} selectedCountries={selectedCountries}/>
    </div>
  );
};

export default TableComponent;
