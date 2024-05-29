const page = ({ params }) => {
  return (
    <div>
      {console.log("params:", params.subCategory)}
      <div>page</div>
    </div>
  );
};

export default page;
