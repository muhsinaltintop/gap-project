import Table from "./_atoms/Table";
const headers = [
  { label: "Country", accessor: "countryName" },
  { label: "Policy Name", accessor: "policyName" },
  { label: "Year", accessor: "year" },
  { label: "Link", accessor: "link" },
];

const TableComponent = ({ policies }) => {
  return (
    <div>
      <Table policies={policies} headers={headers} />
    </div>
  );
};

export default TableComponent;
