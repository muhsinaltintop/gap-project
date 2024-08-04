import PlainTable from "./_atoms/PlainTable";



const TableComponent = ({ policies, headers, pathName }) => {
  return (
    <div>
               <PlainTable policies={policies} headersData={headers} pathName={pathName}/>
    </div>
  );
};

export default TableComponent;
