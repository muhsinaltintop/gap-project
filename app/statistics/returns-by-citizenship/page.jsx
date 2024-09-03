"use client";

import { useState, useEffect } from "react";
import ChartComponent from "../../_components/ChartComponent";
import { getReturnByCitizenship } from "../../_utils/GlobalApi";

const Page = () => {
  const [selectedCountry, setSelectedCountry] = useState("ge");
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data for:", selectedCountry);
        const result = await getReturnByCitizenship(selectedCountry);
        console.log("Fetched Data:", result); // Bu hala çalışmıyorsa, sorun API çağrısında olabilir.
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedCountry]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="w-full mx-6">
      {console.log("Current Data:", data, "Selected Country:", selectedCountry)}
      <select
        className="mb-4 p-2 border rounded"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="ge">Germany</option>
        <option value="gr">Greece</option>
      </select>
      {data ? (
        <ChartComponent data={data} title="Return by Citizenship" />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Page;
