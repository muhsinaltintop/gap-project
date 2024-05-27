const PDFViewer = ({ filename }) => {
  return (
    <div className="m-2 w-100 h-12/12">
      <object
        class="pdf"
        data={`../../../pdfs/${filename}.pdf`}
        width="800"
        height="600"
      ></object>
    </div>
  );
};

export default PDFViewer;
