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

const getAlternativeDublinReturns = async () => {
  const data = await fetchData("/alternative-dublin-returns?populate=*");
  return data;
};

const getStockOfIrregularMigrants = async () => {
  const data = await fetchData("/stock-of-irregular-migrants?populate=*")
  return data;
}

const getStockOfIrregularAlternative = async () => {
  const data = await fetchData("/stock-of-irregular-alternative?populate=*")
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

const getTcnReturnDesicionForIrregulars = async (countryKey) => {
  const data = await fetchData("/tcn-return-desicion-for-irregulars?populate=*");
  const filteredData = data.map(item => ({
    year: item.year,
    value: item[countryKey] == 0  ? "n/a" : item[countryKey]
  }));
  return filteredData;
};

const getReturnFollowingOrder = async (countryKey) => {
  // Diğer API'lerden veri çekmek için benzer bir yapı
  const data = await fetchData("/tcn-return-following-order?populate=*");
  const filteredData = data.map(item => ({
    year: item.year,
    value: item[countryKey] == 0  ? "n/a" : item[countryKey]
  }));
  return filteredData;
};

const getReturnNegativeAsylum = async (countryKey) => {
  // Üçüncü API'den veri çekmek için benzer bir yapı
  const data = await fetchData("/tcn-return-negative-asylum?populate=*");
  const filteredData = data.map(item => ({
    year: item.year,
    value: item[countryKey] == 0  ? "n/a" : item[countryKey]
  }));
  return filteredData;
};
const getReturnedMinors = async (countryKey) => {
  // Üçüncü API'den veri çekmek için benzer bir yapı
  const data = await fetchData("/tcn-returned-minors?populate=*");
  const filteredData = data.map(item => ({
    year: item.year,
    value: item[countryKey] == 0  ? "n/a" : item[countryKey]
  }));
  return filteredData;
};

const getReturnTotal = async (countryKey) => {
  // Üçüncü API'den veri çekmek için benzer bir yapı
  const data = await fetchData("/tcn-return-total?populate=*");
  const filteredData = data.map(item => ({
    year: item.year,
    value: item[countryKey] == 0  ? "n/a" : item[countryKey]
  }));
  return filteredData;
};

const getReturnSource = async (countryKey) => {
  // Üçüncü API'den veri çekmek için benzer bir yapı
  const data = await fetchData("/tcn-return-source?populate=*");
  const filteredData = data.find(item => item.country.split(' ').join('').toLowerCase() === countryKey.toLowerCase()) 
  
  return filteredData;
};

const getAllTcnData = async (countryCode) => {
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
      returnFollowingOrder: api2Data[index]?.value || "n/a", 
      returnNegativeAsylum: api3Data[index]?.value || "n/a",
      returnedMinors: api4Data[index]?.value || "n/a",
      returnTotal: api5Data[index]?.value || "n/a",
      sourceReturnDecisionsIrregular: api6Data?.sourceReturnDecisionsIrregular || "n/a",
      sourceReturnFollowingOrder: api6Data?.sourceReturnedFollowingOrder || "n/a",
      sourceReturnNegativeAsylum: api6Data?.sourceReturnNegativeAsylum || "n/a",
      sourceReturnedMinors: api6Data?.sourceReturnedMinors || "n/a",
      sourceTotalOrderReturn: api6Data?.sourceTotalOrderReturn || "n/a",
      // URL bilgileri
      urlReturnDecisionsIrregular: api6Data?.urlReturnDecisionsIrregular || "n/a",
      urlReturnFollowingOrder: api6Data?.urlReturnedFollowingOrder || "n/a",
      urlReturnNegativeAsylum: api6Data?.urlReturnNegativeAsylum || "n/a",
      urlReturnedMinors: api6Data?.urlReturnedMinors || "n/a",
      urlTotalOrderReturn: api6Data?.urlTotalOrderReturn || "n/a",
      additionalNote: api6Data?.addtionalNote || "n/a"
    }));

    return merged;
  } catch (err) {
    console.error("Error fetching data: ", err);
    throw err; // Hata yakalanırsa dışarıya atılır
  }
};

const getVoluntaryReturn = async (countryKey) => {
  const data = await fetchData("/rbt-voluntary?populate=*");
  const filteredData = data.map(item => ({
    year: item.year,
    value: item[countryKey] == -1  ? "n/a" : item[countryKey]
  }));
  return filteredData;
};

const getEnforcedReturn = async (countryKey) => {
  const data = await fetchData("/rbt-enforced?populate=*");
  const filteredData = data.map(item => ({
    year: item.year,
    value: item[countryKey] == -1  ? "n/a" : item[countryKey]
  }));
  return filteredData;
};

const getAssistedReturn = async (countryKey) => {
  const data = await fetchData("/rbt-assisted?populate=*");
  const filteredData = data.map(item => ({
    year: item.year,
    value: item[countryKey] == -1  ? "n/a" : item[countryKey]
  }));
  return filteredData;
};

const getSpontaneousReturn = async (countryKey) => {
  const data = await fetchData("/rbt-spontaneous?populate=*");
  const filteredData = data.map(item => ({
    year: item.year,
    value: item[countryKey] == -1  ? "n/a" : item[countryKey]
  }));
  return filteredData;
};

const getTotalReturn = async (countryKey) => {
  const data = await fetchData("/rbt-total?populate=*");
  const filteredData = data.map(item => ({
    year: item.year,
    value: item[countryKey] == -1  ? "n/a" : item[countryKey]
  }));
  return filteredData;
};

const getSourceReturn = async (countryKey) => {
  // Üçüncü API'den veri çekmek için benzer bir yapı
  const data = await fetchData("/rbt-source?populate=*");
  const filteredData = data.find(item => item.country.toLowerCase() === countryKey.toLowerCase())
  
  return filteredData;
};

const getAllRbtData = async (countryCode) => {
  try {
    // Birden fazla API'den veri çekiyoruz
    const [api1Data, api2Data, api3Data, api4Data, api5Data, api6Data] = await Promise.all([
      getVoluntaryReturn(countryCode),
      getEnforcedReturn(countryCode),
      getAssistedReturn(countryCode),
      getTotalReturn(countryCode),
      getSourceReturn(countryCode),
      getSpontaneousReturn(countryCode)

    ]);
    
    
    const merged = api1Data.map((item, index) => ({
      year: item.year,
      voluntaryReturn: item.value,
      enforcedReturn: api2Data[index]?.value || "n/a", 
      assistedReturn: api3Data[index]?.value || "n/a",
      totalReturn: api4Data[index]?.value || "n/a",
      spontaneousReturn: api6Data[index]?.value || "n/a",
      sourceVoluntaryReturn: api5Data?.sourceVoluntaryReturn || "n/a",
      sourceEnforcedReturn: api5Data?.sourceEnforcedReturn || "n/a",
      sourceAssistedReturn: api5Data?.sourceAssistedReturn || "n/a",
      sourceSpontaneousReturn: api5Data?.sourceSpontaneousReturn || "n/a",
      sourceTotalReturn: api5Data?.sourceTotal || "n/a",
      //URL bilgileri
      urlVoluntaryReturn: api5Data?.urlVoluntaryReturn || "n/a",
      urlEnforcedReturn: api5Data?.urlEnforcedReturn || "n/a",
      urlAssistedReturn: api5Data?.urlAssistedReturn || "n/a",
      urlSpontaneousReturn: api5Data?.urlSpontaneousReturn || "n/a",
      urlTotalReturn: api5Data?.urlTotal || "n/a",
      additionalNote: api5Data?.notes || "n/a"
    }));
    
    return merged;
  } catch (err) {
    console.error("Error fetching data: ", err);
    throw err;
  }
}



const getAvc = async (countryCode) => {
  const data = await fetchData(`/avc-${countryCode}?populate=*`);
  return data;
  
}


const getAlternativeSource = async (countryCode) => {
  // Üçüncü API'den veri çekmek için benzer bir yapı
  const data = await fetchData(`/alternative-source?country=${countryCode}`);
  
  return data;
};

const getAllAlternativeData = async (countryCode) => {
  try {
    // Birden fazla API'den veri çekiyoruz
    const [api2Data, api1Data] = await Promise.all([

      getAlternativeSource(countryCode),
      getAvc(countryCode),
      
      
    ]);

    
    const merged = api1Data.map((item, index) => ({
      year: item.year,
      deportation: item.deportation,
      illegalEntries: item.illegalEntries,
      personsObligedToLeave: item.personsObligedToLeave,
      independentReturn: item.independentReturn,
      repatriation: item. repatriation,
      deportationFigures: item.deportationFigures,
      sourceAlternative: api2Data?.source || "n/a",
      urlAlternative: api2Data?.url || "n/a",
      //URL bilgileri
      category: api2Data.category,
      additionalNote: api2Data?.additionalNotes || "n/a"
    }));
    
    
    return merged;
  } catch (err) {
    console.error("Error fetching data: ", err);
    throw err;
  }
}

const getReturnByCitizenship = async (code, mode = 'data', selectedYear = null) => {
  // URL'i mode ve year parametrelerine göre oluştur
  let url = `/returns-by-citizenship-${code}?mode=${mode}`;
  
  // Eğer mode 'data' ve selectedYear varsa, year parametresini ekle
  if (mode === 'data' && selectedYear) {
    url += `&year=${selectedYear}`;
  }

  const data = await fetchData(url);
  return data;
};


const getAlternativeVariousCategories = async () => {
  const data = await fetchData("/alternative-various-categories?populate=*")
  return data;
}

const getReadmittedCitizens = async (countryCode) => {
  const data = await fetchData(`/readmitted-citizens?country=${countryCode}`)
  return data;
}

export { getCountryList, getDublinReturns, getAlternativeDublinReturns, getStockOfIrregularMigrants, getAsylumApplications, getPushBacks, getReturnByCitizenship, getAlternativeVariousCategories, getReadmittedCitizens, getTps, getAllTcnData, getAllRbtData, getAllAlternativeData, getStockOfIrregularAlternative, getAvc, getAlternativeSource };
