import Table from "./_atoms/Table";
const headers = [
  { label: "Country", accessor: "countryName" },
  { label: "Policy Name", accessor: "policyName" },
  { label: "Org. Pol. Name", accessor: "originalPolicyName" },
  { label: "Year", accessor: "year" },
  { label: "Policy Description", accessor: "policyDescription" },
  { label: "Policy Type/Area", accessor: "policyTypeArea" },
  { label: "Type of Legislation", accessor: "tyepOfLegislation" },
  { label: "Level of Legislation", accessor: "levelOfLegislation" },
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
