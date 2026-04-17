import React from "react";
import Button from "./_atoms/Button";
import Link from "next/link";

const ExternalReturnComponent = () => {
  return (
    <div className="flex gap-2">
      <Link
        href="https://www.returnmigration.eu/wp-series/return-migration-infrastructures-in-tunisia"
        target="_blank"
      >
        <div>
          <Button
            label="Tunisia"
            icon={false}
            customCSS="bg-primary w-20 content-center text-white mt-2"
          />
        </div>
      </Link>
      <Link
        href="https://www.returnmigration.eu/wp-series/infrastructure-for-returns-/readmission-from-eu-member-states-to-morocco"
        target="_blank"
      >
        <div>
          <Button
            label="Morocco"
            icon={false}
            customCSS="bg-primary w-24 content-center text-white mt-2"
          />
        </div>
      </Link>
      <Link
        href="https://www.returnmigration.eu/wp-series/return-migration-infrastructure-in-turkey-from-europe-to-europe"
        target="_blank"
      >
        <div>
          <Button
            label="Türkiye"
            icon={false}
            customCSS="bg-primary w-24 content-center text-white mt-2"
          />
        </div>
      </Link>
      <Link
        href="https://www.returnmigration.eu/wp-series/return-migration-infrastructures-in-poland-and-georgia"
        target="_blank"
      >
        <div>
          <Button
            label="Poland & Georgia"
            icon={false}
            customCSS="bg-primary w-24 content-center text-white mt-2"
          />
        </div>
      </Link>
      <Link
        href="https://www.returnmigration.eu/wp-series/return-migration-infrastructures-in-sweden"
        target="_blank"
      >
        <div>
          <Button
            label="Sweden"
            icon={false}
            customCSS="bg-primary w-24 content-center text-white mt-2"
          />
        </div>
      </Link>
      <Link
        href="https://www.returnmigration.eu/wp-series/return-migration-infrastructures-in-greece"
        target="_blank"
      >
        <div>
          <Button
            label="Greece"
            icon={false}
            customCSS="bg-primary w-24 content-center text-white mt-2"
          />
        </div>
      </Link>
      <Link
        href="https://www.returnmigration.eu/wp-series/return-migration-infrastructures-in-iraq-country-dossier"
        target="_blank"
      >
        <div>
          <Button
            label="Iraq"
            icon={false}
            customCSS="bg-primary w-24 content-center text-white mt-2"
          />
        </div>
      </Link>
      <Link
        href="https://www.returnmigration.eu/wp-series/insights-on-nigerias-return-migration-infrastructures"
        target="_blank"
      >
        <div>
          <Button
            label="Nigeria"
            icon={false}
            customCSS="bg-primary w-24 content-center text-white mt-2"
          />
        </div>
      </Link>
      <Link
        href="https://www.returnmigration.eu/wp-series/return-migration-infrastructures-in-germany"
        target="_blank"
      >
        <div>
          <Button
            label="Germany"
            icon={false}
            customCSS="bg-primary w-24 content-center text-white mt-2"
          />
        </div>
      </Link>
      <Link
        href="https://www.returnmigration.eu/wp-series/return-migration-infrastructures-of-the-netherlands"
        target="_blank"
      >
        <div>
          <Button
            label="Netherlands"
            icon={false}
            customCSS="bg-primary w-30 content-center text-white mt-2"
          />
        </div>
      </Link>
    </div>
  );
};

export default ExternalReturnComponent;
