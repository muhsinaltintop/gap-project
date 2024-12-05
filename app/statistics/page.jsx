import Link from "next/link"
import statisticList from "../../public/_mocks_/statisticList"
import React from 'react'

const page = () => {
  return (
    
    <div className="mx-10"> 
        <h1 className="text-primary font-bold text-2xl">Statistics</h1>
        <ul>
        {statisticList.map((statistic,index) => {
          return (
         <Link key={index} href={`/statistics/${statistic.link}`}>
          <li key={`1${index}`} className="mt-4 text-white text-start">
            <button className="bg-primary p-2 rounded-lg">
            {statistic.name}
            </button>
            </li>
         </Link> 
        )
        })}

        </ul>


    </div>
    
  )
}

export default page