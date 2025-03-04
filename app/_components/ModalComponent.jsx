import React from "react";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import Link from "next/link";
import PlainText from "./_atoms/PlainText";
import Button from "./_atoms/Button";

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
            <p className="text-2xl font-bold uppercase tracking-widest">
              {selectedCountry?.countryName === "Turkey" ? "TÜRKİYE" : selectedCountry?.countryName}
            </p>
            <span className=" flex-row text-xl">
              <h2 className="text-xl font-bold">Executive Summary</h2>
              <div className="overflow-hidden max-h-40 transition-all duration-500 group-open:max-h-[1000px]">
                <PlainText text={selectedCountry?.executiveSummary} />
              </div>
              <Link
                href={selectedCountry?.countryName === "United Kingdom" ? "/executive-summary/unitedKingdom" : `/executive-summary/${selectedCountry?.countryName}`}
                target="_blank"
              >
                <div className="truncate text-primary">Read More</div>
              </Link>
            </span>
            <div className="flex mt-4 align-sub justify-evenly">
              <span className="font-black m-2">
                {selectedCountry?.returnPolicyTimeline ? (
                  <Link
                    href={`/return-policy-timeline/${selectedCountry?.countryName}`}
                    target="_blank"
                  >
                    <Button
                      label={"Return Policy Timeline"}
                      customCSS={"bg-buttonYellow text-black font-bold"}
                    />
                  </Link>
                ) : (
                  ""
                )}
              </span>
              <span className="font-black m-2">
                {selectedCountry?.returnFlowChart ? (
                  <Link
                    target="_blank"
                    href={`/return-flow-chart/${selectedCountry?.countryName}`}
                  >
                    <Button
                      label={"Return Flow Chart"}
                      customCSS={"bg-buttonYellow text-black font-bold"}
                    />
                  </Link>
                ) : (
                  ""
                )}
              </span>
              <span className="font-black m-2">
                {selectedCountry?.actorReturnDiagram ? (
                  <Link
                    target="_blank"
                    href={`/actor-return-diagram/${selectedCountry?.countryName}`}
                  >
                    <Button
                      label={"Actor Diagram"}
                      customCSS={"bg-buttonYellow text-black font-bold"}
                    />
                  </Link>
                ) : (
                  ""
                )}
              </span>
            </div>
            {<Link
                className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
                href={
                  ["Greece", "Iraq", "Morocco", "Poland", "Sweden"].includes(
                    selectedCountry?.countryName
                  )
                    ? `https://www.returnmigration.eu/countries_${selectedCountry?.countryName.toLowerCase()}`: 
                    selectedCountry?.countryName === "United Kingdom" ? `https://www.returnmigration.eu/united-kingdom`
                    : `https://www.returnmigration.eu/countries-${selectedCountry?.countryName.toLowerCase()}`
                }
                target="_blank"
              >
                {`${selectedCountry?.countryName === "Turkey" ? "TÜRKİYE" : selectedCountry?.countryName} Country Profile on GAPs`}
              </Link>
            }
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default ModalComponent;
