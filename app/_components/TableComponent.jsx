import Table from "./_atoms/Table";
const headers = [
  { label: "Country", accessor: "countryName" },
  { label: "Policy Title", accessor: "policyName" },
  { label: "Original Title", accessor: "originalPolicyName" },
  { label: "Announced Year", accessor: "year" },
  { label: "Policy Type/Area", accessor: "policyTypeArea" },
  { label: "Type of Legislation", accessor: "tyepOfLegislation" },
  { label: "Level of Legislation", accessor: "levelOfLegislation" },
  { label: "Policy Description", accessor: "policyDescription" },
  { label: "Notes", accessor: "notes" },
];

const TableComponent = ({ policies }) => {
  return (
    <div>
      <Table policies={policies} headers={headers} />
    </div>
  );
};

export default TableComponent;
