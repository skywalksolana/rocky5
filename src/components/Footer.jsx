import React from 'react'
import logo from '/images/logo.png';
import dexLogo from '/images/DexLogo.png';
import teleLogo from '/images/teleLogo.png';
import xLogo from '/images/xLogo.png';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 px-0">
    <div className=" mx-auto text-center flex flex-row justify-between items-center">
    <div>
         <img className='h-15 w-8 ml-2 ' src={logo} alt="Logo" />
      </div>

      <div> 
      <p className="text-[8px] py-2">
        CA-DMvGnJyENUhmAUTRKJVJwavUbZ8b3ETLaXi5vUoboop
      </p>
      <p className="text-sm ">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </p>
      </div>
      

     

      <div className="mt-2 mr-4">
                     <div className="social-icon-footer ">
                       <a href="https://boop.fun/tokens/DMvGnJyENUhmAUTRKJVJwavUbZ8b3ETLaXi5vUoboop"><img src={dexLogo} alt="dexhoscat" /></a>
                       <a href="https://x.com/PurritoCatGame"><img src={xLogo} alt="xhoscat" /></a>
                       {/* <a href="https://t.me/fredfishgame"><img src={teleLogo} alt="" /></a> */}
                     </div>
      </div>
      {/* <p className="text-sm py-2">
        &copy; {new Date().getFullYear()} Fred The Fish. All Rights Reserved.
      </p> */}
    </div>
  </footer>
  )
}

export default Footer