import Table from "./_atoms/Table";
import headers from "../../public/_mocks_/data_description.json";


const TableComponent = ({ policies }) => {
  return (
    <div>
         <Table policies={policies} headers={headers} />
    </div>
  );
};

export default TableComponent;
