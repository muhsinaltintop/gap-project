const TransformPolicies = (data) => {
  // Helper function to capitalize words in a string
  const capitalizeWords = (str) => {
      return str
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
  };

  // Helper function to format policy type areas
  const formatPolicyTypeArea = (policyTypeArea) => {
      return Object.keys(policyTypeArea)
          .filter(key => policyTypeArea[key])
          .map(key => capitalizeWords(key.replace(/([a-z])([A-Z])/g, '$1 $2'))) // Add space before uppercase letters
          .join(', ');
  };

  const transformPolicy = (policy) => {
      const policyTypeArea = formatPolicyTypeArea(policy.policyTypeArea);
      const announcedYear = `${policy.day}/${policy.month}/${policy.year}`;

      return {
          policyName: policy.policyName,
          originalPolicyName: policy.originalPolicyName,
          policyTypeArea,
          announcedYear,
          policyDescription: policy.policyDescription,
          levelOfLegislation: policy.levelOfLegislation,
          typeOfLegislation: policy.typeOfLegislation,
          urlEnglish: policy.urlEnglish,
          originalUrl: policy.originalUrl,
          notes: policy.notes,
      };
  };

  return data.map(country => ({
      countryName: country.countryName,
      policies: country.policies.map(transformPolicy),
  }));
};

export default TransformPolicies;