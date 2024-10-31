import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (

    <footer className="bg-gray-100 h-full mt-10">
      <div className="grid grid-cols-2 gap-0">
        <div className="grid grid-rows-2">
          <div className="pt-10 mx-40"> 
            <Image
                 src="/gaps_logo.png"
                 alt="Your Logo"
                 width={180}
                 height={100}
               />
          </div>
          <div>
          <div className="flex flex-center mx-auto max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
               <div className="flex items-center mr-4">
                 <Image src="/eu-flag.png" width="80" height="30" alt="eu-flag"/>
               </div>
               <div className="w-full">
               <h3 className="font-bold text-lg">Funding</h3>     
               <p className="font-bold">Awarding body:</p>
               <p>European Union</p>
               <p>Horizon Europe Research Programme</p>
               <p>HORIZON-CL2-2022-TRANSFORMATIONS-01-09</p>
               <p>Project Reference: 101094341</p>
               <p>Project Duration:  36 Months</p>
               </div>
             </div>
          </div>

        </div>
        
        
        <div className="grid align-middle">
          <div className="mt-4 text-right text-sm text-gray-500">
                
          </div>
          <div className="mt-4 mr-24 text-right text-sm text-gray-500">
            <div>

          Data Repository created by {" "}
                <Link href={"#"}>
                  <span className="font-bold">
                    Dr. Zeynep Şahin Mencütek & Dr. Fatma Yılmaz Elmas
                  </span>
                </Link>
            </div>
            <div>

                
               Web application created by {" "}
               <Link href={"#"}>
                 <span className="font-bold">Muhsin Altıntop</span>
               </Link>
            </div>

            <div>
              Data Collected By <Link href={'/data-entry-teams'}>
              <span className="font-bold text-primary">

              National Teams
              </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
      <div>
        <p className="mt-4 text-sm text-gray-500 text-center">Copyright &copy; 2024. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
