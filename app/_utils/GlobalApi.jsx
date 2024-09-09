const BASE_URL = "https://gap-project-eight.vercel.app/api";

const fetchData = async (endpoint, options = {}) => {
  const defaultOptions = {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const finalOptions = { ...defaultOptions, ...options };
  const url = `${BASE_URL}${endpoint}`;

  try {
    const res = await fetch(url, finalOptions);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

const getCountryList = async () => {
  const data = await fetchData("/countries?populate=*");
  return data;
};

const getDublinReturns = async () => {
  const data = await fetchData("/dublin-returns?populate=*");
  return data;
};

const getStockOfIrregularMigrants = async () => {
  const data = await fetchData("/stock-of-irregular-migrants?populate=*")
  return data;
}

const getAsylumApplications = async () => {
  const data = await fetchData("/asylum-applications?populate=*")
  return data;
}

const getTps = async () => {
  const data = await fetchData("/tps?populate=*")
  return data;
}

const getPushBacks = async () => {
  const data = await fetchData("/entry-refusals?populate=*")
  return data;
}

// GlobalApi.js

export const getTcnReturnDesicionForIrregulars = async (countryKey) => {
  const data = await fetchData("/tcn-return-desicion-for-irregulars?populate=*");
  const filteredData = data.map(item => ({
    year: item.year,
    value: item[countryKey] == -1  ? "N/A" : item[countryKey]
  }));
  return filteredData;
};

export const getReturnFollowingOrder = async (countryKey) => {
  // Diğer API'lerden veri çekmek için benzer bir yapı
  const data = await fetchData("/tcn-return-following-order?populate=*");
  const filteredData = data.map(item => ({
    year: item.year,
    value: item[countryKey] == -1  ? "N/A" : item[countryKey]
  }));
  return filteredData;
};

export const getReturnNegativeAsylum = async (countryKey) => {
  // Üçüncü API'den veri çekmek için benzer bir yapı
  const data = await fetchData("/tcn-return-negative-asylum?populate=*");
  const filteredData = data.map(item => ({
    year: item.year,
    value: item[countryKey] == -1  ? "N/A" : item[countryKey]
  }));
  return filteredData;
};
export const getReturnedMinors = async (countryKey) => {
  // Üçüncü API'den veri çekmek için benzer bir yapı
  const data = await fetchData("/tcn-returned-minors?populate=*");
  const filteredData = data.map(item => ({
    year: item.year,
    value: item[countryKey] == -1  ? "N/A" : item[countryKey]
  }));
  return filteredData;
};

export const getReturnTotal = async (countryKey) => {
  // Üçüncü API'den veri çekmek için benzer bir yapı
  const data = await fetchData("/tcn-return-total?populate=*");
  const filteredData = data.map(item => ({
    year: item.year,
    value: item[countryKey] == -1  ? "N/A" : item[countryKey]
  }));
  return filteredData;
};

export const getReturnSource = async (countryKey) => {
  // Üçüncü API'den veri çekmek için benzer bir yapı
  const data = await fetchData("/tcn-return-source?populate=*");
  const filteredData = data.find(item => item.country.toLowerCase() === countryKey.toLowerCase());
  console.log("fD:", filteredData);
  
  return filteredData;
};

export const fetchAllData = async (countryCode) => {
  try {
    // Birden fazla API'den veri çekiyoruz
    const [api1Data, api2Data, api3Data, api4Data, api5Data, api6Data] = await Promise.all([
      getTcnReturnDesicionForIrregulars(countryCode),
      getReturnFollowingOrder(countryCode),
      getReturnNegativeAsylum(countryCode),
      getReturnedMinors(countryCode),
      getReturnTotal(countryCode),
      getReturnSource(countryCode)

    ]);

    // Verileri yıllara göre birleştiriyoruz
    const merged = api1Data.map((item, index) => ({
      year: item.year,
      returnDesicionsForIrregulars: item.value,
      returnFollowingOrder: api2Data[index]?.value || "N/A", 
      returnNegativeAsylum: api3Data[index]?.value || "N/A",
      returnedMinors: api4Data[index]?.value || "N/A",
      returnTotal: api5Data[index]?.value || "N/A",
      sourceReturnDecisionsIrregular: api6Data?.sourceReturnDecisionsIrregular || "N/A",
      sourceReturnFollowingOrder: api6Data?.sourceReturnedFollowingOrder || "N/A",
      sourceReturnNegativeAsylum: api6Data?.sourceReturnNegativeAsylum || "N/A",
      sourceReturnedMinors: api6Data?.sourceReturnedMinors || "N/A",
      sourceTotalOrderReturn: api6Data?.sourceTotalOrderReturn || "N/A",
      // URL bilgileri
      urlReturnDecisionsIrregular: api6Data?.urlReturnDecisionsIrregular || "N/A",
      urlReturnFollowingOrder: api6Data?.urlReturnedFollowingOrder || "N/A",
      urlReturnNegativeAsylum: api6Data?.urlReturnNegativeAsylum || "N/A",
      urlReturnedMinors: api6Data?.urlReturnedMinors || "N/A",
      urlTotalOrderReturn: api6Data?.urlTotalOrderReturn || "N/A",
      additionalNote: api6Data?.addtionalNote || "N/A"
    }));

    return merged;
  } catch (err) {
    console.error("Error fetching data: ", err);
    throw err; // Hata yakalanırsa dışarıya atılır
  }
};



const getReturnByType = async () => {
  const data = await fetchData("/return-by-type?populate=*")
  return data;
}

const getReturnByCitizenship = async (code) => {
  const data = await fetchData(`/returns-by-citizenship-${code}?populate=*`)
  return data;
}

const getAlternativeVariousCategories = async () => {
  const data = await fetchData("/alternative-various-categories?populate=*")
  return data;
}

const getReadmittedCitizens = async () => {
  const data = await fetchData("/readmitted-citizens?populate=*")
  return data;
}

export { getCountryList, getDublinReturns, getStockOfIrregularMigrants, getAsylumApplications, getPushBacks, getReturnByType, getReturnByCitizenship, getAlternativeVariousCategories, getReadmittedCitizens, getTps };
