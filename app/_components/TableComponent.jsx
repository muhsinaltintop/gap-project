import Table from "./_atoms/Table";



const TableComponent = ({ policies, headers, pathName }) => {
  return (
    <div>
         <Table policies={policies} headers={headers} pathName={pathName}/>
    </div>
  );
};

export default TableComponent;
