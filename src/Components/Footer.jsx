import React from 'react';
import DH from '../assets/image/DH.png';
import Facebook from '../assets/image/ico-facebook.png';
import IS from '../assets/image/ico-instagram.png';
import WH from '../assets/image/ico-whatsapp.png';
import TK from '../assets/image/ico-tiktok.png';

const Footer = () => {
  return (
    <footer className="min-h-screen bg-white ">
      <div className="flex justify-center py-2 text-white bg-red-600">
        <div className="mt-1 mb-1 text-xs font-semibold">VOLTAR PARA O TOPO</div>
      </div>
      <div className="flex gap-96">
        <span className="mt-5 ml-72 size-60"><img src={DH} alt="" /></span>
        <div className="flex space-x-4 mt-7">
          <a href="#" className='mt-0 bg-black size-9'><img src={Facebook} alt="" /></a>
          <a href="#" className='bg-black size-9'><img src={IS} alt="" /></a>
          <a href="#" className='bg-black size-9'><img src={WH} alt="" /></a>
          <a href="#" className='bg-black size-9'><img src={TK} alt="" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
