import { usePathname } from "next/navigation";

const PageTitle = () => {
const pathName = usePathname();
let transformed;

if (pathName.startsWith("/statistics")) {
  // Step 1: Remove the "/statistics/" part
  transformed = pathName.replace("/statistics/", "");
} else {
  // If it doesn't start with "/statistics", use the original pathName
  transformed = pathName;
}

// Step 2: Replace hyphens with spaces
transformed = transformed.replace(/-/g, " ");

// Step 3: Capitalise each word
transformed = transformed.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <h3 className="text-primary text-xl font-bold">
        {transformed}</h3>
  )
}

export default PageTitle