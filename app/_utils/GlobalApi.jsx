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

const getTcnForeignNationals = async () => {
  const data = await fetchData("/tcn-foreign-nationals-ordered-to-leave?populate=*")
  return data;
}

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

export { getCountryList, getDublinReturns, getStockOfIrregularMigrants, getAsylumApplications, getPushBacks, getTcnForeignNationals, getReturnByType, getReturnByCitizenship, getAlternativeVariousCategories, getReadmittedCitizens, getTps };
