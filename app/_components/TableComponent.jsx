import Table from "./_atoms/Table";
const headers = [
  { label: "Country", accessor: "countryName" },
  { label: "Policy Name", accessor: "policyName" },
  { label: "Org. Pol. Name", accessor: "originalPolicyName" },
  { label: "Policy Type/Area", accessor: "policyTypeArea" },
  { label: "Year", accessor: "year" },
  { label: "Policy Description", accessor: "policyDescription" },
  { label: "Level of Legislation", accessor: "levelOfLegislation" },
  { label: "Type of Legislation", accessor: "tyepOfLegislation" },
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
