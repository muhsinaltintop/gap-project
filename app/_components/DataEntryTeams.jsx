import React from 'react'
import { Mail } from 'lucide-react'
import Link from 'next/link'

const DataEntryTeams = () => {
  return (
    <div className='ml-4'>

    <div className='font-bold text-primary'>Data Entry Teams</div>
    <div className='flex mt-2'> <span className='font-bold'>Afghanistan:</span> Hidayet Siddikoglu (PI) <span className='ml-2'><Link href={'mailto:111siddiqi.20@gmail.com'}><Mail color='#0d7dff'/></Link></span></div>
    <div className='flex mt-2'> <span className='font-bold'>Canada:</span> Anna Triandafyllidou (PI) <span className='ml-2 mr-2'><Link href={'mailto:anna.triandafyllidou@torontomu.ca'}><Mail color='#0d7dff'/></Link></span> | Younes Ahouga <span className='ml-2 mr-2'><Link href={'mailto:younes.ahouga@torontomu.ca'}><Mail color='#0d7dff'/></Link></span></div>
    <div className='flex mt-2'> <span className='font-bold'>Germany:</span> Zeynep Sahin Mencütek (PI) <span className='ml-2 mr-2'><Link href={'mailto:zeynep.mencutek@bicc.de'}><Mail color='#0d7dff'/></Link></span> | Daphne Wolf </div>
    <div className='flex mt-2'> <span className='font-bold'>Greece:</span> Eva Papatzani (PI) <span className='ml-2 mr-2'><Link href={'mailto:epapatzani@ekke.gr'}><Mail color='#0d7dff'/></Link></span> | George Kandylis (PI) <span className='ml-2 mr-2'><Link href={'mailto:gkandyli@ekke.gr'}><Mail color='#0d7dff'/></Link></span> | Panos Hatziprokopiou </div>
    <div className='flex mt-2'> <span className='font-bold'>Iraq:</span> William Warda (PI) <span className='ml-2 mr-2'><Link href={'mailto:william@hhro.org'}><Mail color='#0d7dff'/></Link></span> | Mohamad Noor Ahmad <span className='ml-2 mr-2'><Link href={'mailto:noor@hhro.org'}><Mail color='#0d7dff'/></Link></span></div>
    <div className='flex mt-2'> <span className='font-bold'>Jordan:</span> Rasha Istaiteyeh (PI)<span className='ml-2 mr-2'><Link href={'mailto:ristaiteyeh@hu.edu.jo'}><Mail color='#0d7dff'/></Link></span> | Marah Almalalha; Rola Jaber </div>
    <div className='flex mt-2'> <span className='font-bold'>Morocco:</span> Mehdi Lahlou (PI) <span className='ml-2 mr-2'><Link href={'mailto:melahlou@hotmail.com'}><Mail color='#0d7dff'/></Link></span> | Karima Belhaj <span className='ml-2 mr-2'><Link href={'mailto:karima.belhaj.88@gmail.com'}><Mail color='#0d7dff'/></Link></span>  </div>
    <div className='flex mt-2'> <span className='font-bold'>Netherlands:</span> Joris Schapendonk (PI) <span className='ml-2 mr-2'><Link href={'mailto:Joris.schapendonk@ru.nl'}><Mail color='#0d7dff'/></Link></span></div>
    <div className='flex mt-2'> <span className='font-bold'>Nigeria:</span> Ngozi Uzomah (PI) <span className='ml-2 mr-2'><Link href={'mailto:ngozi.uzomah.pg77764@unn.edu.ng'}><Mail color='#0d7dff'/></Link></span> | Ignatus Madu (PI) <span className='ml-2 mr-2'><Link href={'mailto:ignatius.madu@unn.edu.ng'}><Mail color='#0d7dff'/></Link></span></div>
    <div className='flex mt-2'> <span className='font-bold'>Poland:</span> Marta Pachocka (PI) <span className='ml-2 mr-2'><Link href={'mailto:m.pachocka@uw.edu.pl'}><Mail color='#0d7dff'/></Link></span> | Mateusz Krępa <span className='ml-2 mr-2'><Link href={'mailto:mateusz.krepa@uw.edu.pl'}><Mail color='#0d7dff'/></Link></span></div>
    <div className='flex mt-2'> <span className='font-bold'>Sweden:</span> Andreas Onver Cetrez (PI) <span className='ml-2 mr-2'><Link href={'mailto:onver.cetrez@teol.uu.se'}><Mail color='#0d7dff'/></Link></span> | MD Arifuzzaman Rajon </div>
    <div className='flex mt-2'> <span className='font-bold'>Tunisia:</span> Hassen Boubakri (PI) <span className='ml-2 mr-2'><Link href={'mailto:hassen.boubakri@flsh.u-sousse.tn'}><Mail color='#0d7dff'/></Link></span> | Hanen Ben Othman; Emna Garbaa</div>
    <div className='flex mt-2'> <span className='font-bold'>Turkey:</span> Ela Gökalp Aras (PI) <span className='ml-2 mr-2'><Link href={'mailto:ela.gokalparas@sri.org.tr'}><Mail color='#0d7dff'/></Link></span> | Umutcan Yüksel <span className='ml-2 mr-2'><Link href={'mailto:umutcan.yuksel@sri.org.tr'}><Mail color='#0d7dff'/></Link></span></div>
    <div className='flex mt-2'> <span className='font-bold'>UK:</span> Gerasimos Tsourapas (PI)<span className='ml-2 mr-2'><Link href={'mailto:gerasimos.tsourapas@glasgow.ac.uk'}><Mail color='#0d7dff'/></Link></span> | Pablo José Pérez Cañavate</div>



    <div className='text-sm flex mt-2'>* PI: Principal Investigator of the Project (responsible for country-level data)</div>















    </div>
  )
}

export default DataEntryTeams