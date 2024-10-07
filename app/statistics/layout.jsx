"use client"
import { usePathname } from "next/navigation";
import PageTitle from "../_components/_atoms/PageTitle";
import PlainText from "../_components/_atoms/PlainText";
import {stockOfIrregularMigrants, AsylumApplicationDescription} from '../../public/_mocks_/statisticDescriptions'

export default function StatisticsLayout({ children }) {
    const pathName = usePathname();
    const title = pathName.replace('/statistics/', '').replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())

    
    
    return (
      <div>
        <div className="ml-4 mb-8">
        <PageTitle title={title}/>  
        </div>
        <div className="ml-4 mb-4"><PlainText text={AsylumApplicationDescription}/></div>
        <div>{children}</div>
      </div>
    );
  }
  