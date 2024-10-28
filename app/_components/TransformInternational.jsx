const TransformInternational = (data) => {
    const formatDate = (inputDate) => {
        if (inputDate === "N/A" || inputDate === "n/a") {
            return "N/A";
          }
        
          // Tarihi Date nesnesine dönüştür
          const date = new Date(inputDate);
        
          // Geçersiz tarih durumunda "N/A" döndür
          if (isNaN(date.getTime())) {
            return "N/A";
          }
        
          // Geçerli bir tarih için formatı ayarla
          const day = date.getDate();
          const month = date.getMonth() + 1; // Aylar 0-11 arası olduğundan +1 ekliyoruz
          const year = date.getFullYear();
        
          // Formatı istediğiniz gibi düzenleyin
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