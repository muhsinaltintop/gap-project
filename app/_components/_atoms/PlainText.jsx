const PlainText = ({ text }) => {
  return (
    <div>
      <div className="overflow-hidden max-h-40 transition-all duration-500 group-open:max-h-[1000px]">
        {text ? text : "No text provided"}
      </div>
    </div>
  );
};

export default PlainText;
