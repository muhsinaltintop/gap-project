import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className='text-center'>
        <div className='font-bold text-xl mt-2'>How to get in touch with GAPs</div>
        <div className='mt-2'>Have questions, feedback, or want to make a partner inquiry?</div>
        <div className='mt-2'><span className='font-bold'>Please connect us via</span> <Link href="mailto:gaps.return.migration@gmail.com"><span className='text-primary font-bold'>gaps.return.migration@gmail.com</span></Link></div>
        <div className='mt-2'>We look forward to hearing from you!</div>
        {/* <div>To keep up with GAPs Return Migration Project, check out our blog and follow us on X (Twitter), Instagram, Facebook.</div> */}
        <div className='font-bold text-xl mt-4'>Project Coordination</div>
        <div className='mt-2'>Onver Cetrez | Department of Theology, Uppsala University | <Link href="mailto:onver.cetrez@teol.uu.se"><span className='text-primary font-bold'>onver.cetrez@teol.uu.se</span></Link></div>
        <div className='mt-2'>Soner Barthoma | CRS, Uppsala University | <Link href="mailto:soner.barthoma@crs.uu.se"><span className='text-primary font-bold'>soner.barthoma@crs.uu.se</span></Link></div>
        <div className='mt-2'>Zeynep Sahin-Mencütek | Bonn International Centre for Conflict Studies | <Link href="mailto:zeynep.mencutek@bicc.de"><span className='text-primary font-bold'>zeynep.mencutek@bicc.de</span></Link></div>
        <div className='font-bold mt-4 text-xl'>Inquiries about Data Repository</div>
        <div className='mt-2'>Looking for details? For inquiries about the Data Repository, reach out to us:</div>
        <div className='mt-2'>Zeynep Sahin-Mencütek | Bonn International Centre for Conflict Studies | <Link href="mailto:zeynep.mencutek@bicc.de"><span className='text-primary font-bold'>zeynep.mencutek@bicc.de</span></Link></div>
        <div className='mt-2'>Please reach out to the <Link href="/data-entry-teams"><span className='text-primary'>data collection teams</span></Link> directly for specific questions regarding national data.</div>


        
    </div>
  )
}

export default Contact