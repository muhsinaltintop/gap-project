
const CountryNameFormatter = (value) => {
    switch (value) {
      case "unitedKingdom":
        return "United Kingdom";
      case "russianFederation":
        return "Russian Federation";
      case "bosniaAndHerzegowina":
        return "Bosnia and Herzegovina";
      case "otherTotal":
        return "Other Total";
      case "turkey":
        return "Türkiye";
      case "Turkey":
            return "Türkiye";
      case "coteDIvoire":
        return "Côte d'Ivoire";
      case "democraticRepublicOfCongo":
        return "Democratic Republic of Congo";
      case "burkinaFaso":
        return "Burkina Faso";
      case "sriLanka":
        return "Sri Lanka";
      default:
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
  };

  export default CountryNameFormatter