import React from "react";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import Link from "next/link";
import PlainText from "./_atoms/PlainText";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const ModalComponent = ({ open, handleClose, selectedCountry }) => {
  const openPopup = () => {
    alert(selectedCountry?.executiveSummary);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <section className="flex overflow-hidden w-9/12 rounded-lg shadow-2xl md:grid md:grid-cols-3 bg-white mx-auto">
          <div className="bg-gray-200 flex justify-center items-center h-auto p-10">
            <Image
              alt={`${selectedCountry?.countryName}`}
              src={`/${selectedCountry?.countryName}.png`}
              width={500} // specify a width value
              height={500} // specify a height value
              className="object-cover max-w-full h-auto mx-auto"
            />
          </div>

          <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest">
              {selectedCountry?.countryName}
            </p>
            <span className=" flex-row text-xl">
              <h2 className="text-2xl font-bold">Executive Summary</h2>
              <PlainText executiveSummary={selectedCountry?.executiveSummary} />
              <Link href={`/executiveSummary/${selectedCountry?.countryName}`}>
                <div className="truncate text-primary">Read More</div>
              </Link>
            </span>
            <div className="flex-col mt-4 align-sub">
              <span className="font-black m-2">
                {selectedCountry?.returnPolicyTimeline ? (
                  <Link
                    href={"https://www.returnmigration.eu/countries-germany"}
                  >
                    Return Policy Timeline
                  </Link>
                ) : (
                  ""
                )}
              </span>
              <span className="font-black m-2">
                {selectedCountry?.returnFlowChart ? (
                  <Link href={"#"}>Return Flow Chart</Link>
                ) : (
                  ""
                )}
              </span>
              <span className="font-black m-2">
                {selectedCountry?.actorReturnDiagram ? (
                  <Link href={"#"}>Actor Return Diagram</Link>
                ) : (
                  ""
                )}
              </span>
            </div>
            {/* <a
              className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
              href="#"
            >
              Get Executive Summary
            </a> */}
            {/* <p className="mt-8 text-xs font-medium uppercase text-gray-400">
              This part will be updated...
            </p> */}
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default ModalComponent;
