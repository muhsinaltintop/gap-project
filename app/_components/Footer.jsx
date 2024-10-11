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
                 height={0}
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
    // <footer className="bg-gray-100">
    //   <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
    //     <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
    //       <a
    //         className="inline-block rounded-full bg-primary p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
    //         href="#MainContent"
    //       >
    //         <span className="sr-only">Back to top</span>

    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //       </a>
    //     </div>

    //     <div className="lg:flex lg:items-end lg:justify-between">
    //       <div>
    //         <div className="flex justify-center text-teal-600 lg:justify-start">
    //           <Image
    //             src="/gaps_logo.png"
    //             alt="Your Logo"
    //             width={180}
    //             height={0}
    //           />
    //         </div>

    //         <div className="flex flex-center mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
    //           <div className="flex items-center mr-4">
    //             <Image src="/eu-flag.png" width="80" height="30" alt="eu-flag"/>
    //           </div>
    //           <div className="w-full">
    //           <h3 className="font-bold text-lg">Funding</h3>     
    //           <p className="font-bold">Awarding body:</p>
    //           <p>European Union</p>
    //           <p>Horizon Europe Research Programme</p>
    //           <p>HORIZON-CL2-2022-TRANSFORMATIONS-01-09</p>
    //           <p>Project Reference: 101094341</p>
    //           <p>Project Duration:  36 Months</p>

    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex">
    //           {/* <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
    //             <li><Link className="text-gray-700 transition hover:text-gray-700/75" href="#">About</Link>
    //             </li>

    //             <li>
    //               <Link
    //                 className="text-gray-700 transition hover:text-gray-700/75"
    //                 href="#"
    //                 >
                    
    //                 Services
    //               </a>
    //             </li>

    //             <li>
    //               <a
    //                 className="text-gray-700 transition hover:text-gray-700/75"
    //                 href="#"
    //                 >
                    
    //                 Projects
    //               </a>
    //             </li>

    //             <li>
    //               <a
    //                 className="text-gray-700 transition hover:text-gray-700/75"
    //                 href="#"
    //                 >
                    
    //                 Blog
    //               </a>
    //             </li>
    //           </ul> */}
    //         </div>

    //         <p className="mt-4 text-center text-sm text-gray-500 lg:text-right">
    //           Copyright &copy; 2024. All rights reserved.
    //         </p>
    //         <p className="mt-4 text-center text-sm text-gray-500 lg:text-right">
    //           Data Repository created by {" "}
    //           <Link href={"#"}>
    //             <span className="font-bold">
    //               Dr. Zeynep Şahin Mencütek & Dr. Fatma Yılmaz Elmas
    //             </span>
    //           </Link>
    //         </p>
    //         <p className="mt-4 text-center text-sm text-gray-500 lg:text-right">
    //           Web application created by {" "}
    //           <Link href={"#"}>
    //             <span className="font-bold">Muhsin Altıntop</span>
    //           </Link>
    //         </p>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
