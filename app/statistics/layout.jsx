"use client"
import { usePathname } from "next/navigation";
import PageTitle from "../_components/_atoms/PageTitle";


export default function StatisticsLayout({ children, params }) {
    const pathName = usePathname();
    const title = pathName.replace('/statistics/', '').replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())

    
    
    return (
      <div>
        <div className="ml-4 mb-8">
        <PageTitle title={title === "/Statistics" ? "" : title === "Stock Of Irregular Migrants" ? "Stock of Irregular Migrants" : title === "Tcn Foreign Nationals Ordered To Leave" ? "TCNs/Foreign Nationals Ordered To Leave" : title}/>  
        </div>      
        
        <div>{children}</div>
      </div>
    );
  }
  