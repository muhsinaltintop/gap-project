const PlainText = ({ text }) => {
  return (
    <div>
      <div className="">{text ? text : "No text provided"}</div>
    </div>
  );
};

export default PlainText;
