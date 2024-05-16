const PlainText = ({ executiveSummary }) => {
  return (
    <div>
      <div className="overflow-hidden max-h-40 transition-all duration-500 group-open:max-h-[1000px]">
        {console.log("exe", executiveSummary)}
        {executiveSummary ? executiveSummary : "No executive summary available"}
      </div>
    </div>
  );
};

export default PlainText;
