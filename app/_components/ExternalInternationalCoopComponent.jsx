import Link from 'next/link';
import React from 'react'
import Button from './_atoms/Button';

const ExternalInternationalCoopComponent = () => {
  return (
    <div className="flex gap-2">

      <Link
        href="https://www.returnmigration.eu/wp-series/research-digest-eu-georgia-readmission-agreement"
        target="_blank"
      >
        <div>
          <Button
            label="Georgia"
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
        href="https://onlinelibrary.wiley.com/doi/10.1111/imig.70037"
        target="_blank"
      >
        <div>
          <Button
            label="Turkey & Afghanistan"
            icon={false}
            customCSS="bg-primary w-32 content-center text-white mt-2"
          />
        </div>
      </Link>
      
    </div>
  );
}

export default ExternalInternationalCoopComponent