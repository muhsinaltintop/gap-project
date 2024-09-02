import Link from "next/link";
import React from "react";

const SideMenu = () => {
  const leftMenu = [
    {
      id: 1,
      name: "GAPs Data Repository",
      path: "/",
    },
    {
      id: 2,
      name: "Country Profiles & Infographics",
      path: "/country-list",
    },
    {
      id: 3,
      name: "Policy/Legislation Mapping",
      path: "/policy-legislation-map",
    },
    {
      id: 4,
      name: "Return Infrastructure",
      path: "/return-infrastructure",
    },
    {
      id: 5,
      name: "International Cooperation",
      path: "/international-cooperation",
    },
    {
      id: 6,
      name: "Statistics",
      path: "/",
      submenu: [
        {
          id: 1,
          name: "Stock of Irregular Migrants",
          path: "/statistics/stock-of-irregular-migrants",
        },
        {
          id: 2,
          name: "Asylum Applications",
          path: "/statistics/asylum-applications",
        },
        {
          id: 3,
          name: "Entry Refusals and Pushbacks",
          path: "/statistics/entry-refusals-and-pushbacks",
        },
        {
          id: 4,
          name: "Dublin Returns",
          path: "/statistics/dublin-returns",
        },
        {
          id: 5,
          name: "TCNs/Foreign Nationals Ordered to Leave",
          path: "/statistics/tcn-foreign-nationals-ordered-to-leave",
        },
        {
          id: 6,
          name: "Returns by Type",
          path: "/statistics/returns-by-type"
        },
        {
          id: 7,
          name: "Returns by Citizenship",
          path: "/statistics/returns-by-citizenship",
        },
        {
          id: 8,
          name: "Alternative/Various Categories (National)",
          path: "/statistics/alternative-various-categories",
        },
        {
          id: 9,
          name: "Readmitted Citizens",
          path: "/statistics/readmitted-citizens",
        },
      ],
    },
  ];
  return (
    <div className="flex h-max flex-col justify-between max-w-54 overflow-y-auto">
      <div className="px-4 py-6">
        <ul className="mt-6 space-y-1">
          {leftMenu.map((menuItem) => (
            <li className="shadow-md bg-primary-light rounded-lg" key={menuItem.id} >
              {menuItem.submenu ? (
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-md font-bold text-primary">{menuItem.name}</span>
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="#0d7dff"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
                  <ul className="mt-2 space-y-1 px-4">
                    {menuItem.submenu.map((submenuItem) => (
                      <li key={submenuItem.id}>
                        <Link
                          href={submenuItem.path}
                          className="block rounded-lg px-4 py-2 text-md font-bold text-primary hover:bg-gray-100 hover:text-gray-700"
                        >
                          {submenuItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  href={menuItem.path}
                  className="block rounded-lg px-4 py-2 text-md font-bold text-primary hover:bg-gray-100 hover:text-gray-700"
                >
                  {menuItem.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
