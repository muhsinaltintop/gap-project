"use client"
import { usePathname } from "next/navigation";
import PageTitle from "../_components/_atoms/PageTitle";


export default function StatisticsLayout({ children, params }) {
    const pathName = usePathname();
    const title = pathName.replace('/statistics/', '').replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())

    
    
    return (
      <div>
        {console.log(title)}
        <div className="ml-4 mb-8">
        <PageTitle title={title === "/Statistics" ? "" : title}/>  
        </div>      
        
        <div>{children}</div>
      </div>
    );
  }
  