import React from 'react'
import { companyLogos } from './Images'
const Footer = () => {
  return (
    <footer className="bg-red-500 p-3 w-full flex flex-">
        <a className='mx-auto md:-mr-80' href="https://github.com/Allials" target="_blank" rel="noreferrer noopener">
        <img src={companyLogos.gitHubBig} alt="" className='w-8 md:w-10' />
        </a>
        <a className='mx-auto ' href="https://www.linkedin.com/in/andrew-vasquez-000434237/" target="_blank" rel="noreferrer noopener">
            <img src={companyLogos.linkedinLogo} alt="" className='w-8 md:w-10' />
        </a>
    </footer>
  )
}

export default Footer