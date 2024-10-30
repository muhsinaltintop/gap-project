const TransformReturns = (data) => {
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

  const formatAreaScaleImplementation = (areaScaleImplementation) => {
    return Object.keys(areaScaleImplementation)
        .filter(key => areaScaleImplementation[key])
        .map(key => capitalizeWords(key.replace(/([a-z])([A-Z])/g, '$1 $2'))) // Add space before uppercase letters
        .join(', ');
};

const formatTargetOriginCountryRegion = (targetOriginCountryRegion) => {
    return Object.keys(targetOriginCountryRegion)
        .filter(key => targetOriginCountryRegion[key])
        .map(key => capitalizeWords(key.replace(/([a-z])([A-Z])/g, '$1 $2'))) // Add space before uppercase letters
        .join(', ');
};


  const transformPolicy = (policy) => {
      const policyTypeArea = formatPolicyTypeArea(policy.policyTypeArea);
      const areaScaleImplementation = formatAreaScaleImplementation(policy.areaScaleImplementation)
      const targetOriginCountryRegion = formatTargetOriginCountryRegion(policy.targetOriginCountryRegion)

      const announcedYear = `${policy.day}/${policy.month}/${policy.year}`;

      return {
          policyName: policy.policyName,
          actorsInvolved: policy.actorsInvolved,
          duration: policy.duration,
          summary: policy.summary,
          areaScaleImplementation,
          policyTypeArea,
          targetGroup: policy.targetGroup,
          targetOriginCountryRegion,
          specific: policy.specific,
          exceptions: policy.exceptions,
          digitalInfrastructuresTechnologies: policy.digitalInfrastructuresTechnologies,
          materialInfrastructure: policy.materialInfrastructure,
          notesBudget: policy.notesBudget,
          officialWebsite: policy.officialWebsite,
          programEvaluation: policy.programEvaluation
      };
  };

  return data.map(country => ({
      countryName: country.countryName,
      policies: country.policies.map(transformPolicy),
  }));
};

export default TransformReturns;