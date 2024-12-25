const TransformInternational = (data) => {
    const formatDate = (inputDate) => {
        if (inputDate === "N/A" || inputDate === "n/a") {
            return "";
          }
        
          const date = new Date(inputDate);
        
         
          if (isNaN(date.getTime())) {
            return "";
          }
        
         
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
        
         
          return `${day}/${month}/${year}`;
    }

  
    const transformInternational = (policy) => {
        const signatureDate = formatDate(policy.signatureDate);
        const entryIntoForceDate = formatDate(policy.entryIntoForceDate);
        const negotiationStartDate = formatDate(policy.negotiationStartDate)
  
        return {
            policyName:policy.policyName,
            typeOfBiletralAgreement: policy.typeOfBiletralAgreement,
            signatoryState: policy.signatoryState,
            signatureDate,
            entryIntoForceDate,
            negotiationStartDate,
            urlEnglish: policy.urlEnglish,
            mediaCoverageUrl: policy.mediaCoverageUrl,
            note: policy.note
        };
    };
  
    return data.map(country => ({
        countryName: country.countryName,
        policies: country.policies.map(transformInternational),
    }));
  };
  
  export default TransformInternational;