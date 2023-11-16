import Image from 'next/image';
import { useAppContext } from '@/contexts/AppContext';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <header class="text-black bg-white body-font">
      <div class="shadownav">
    <div class="container mx-auto flex flex-wrap p-3 px-5 flex-col  md:flex-row items-center shadow-md">
    <Link class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href={`/`}>
      <img class="h-12 text-white" src='/assets/logo.png'></img>
      </Link>
      <nav class="md:ml-auto flex flex-wrap items-center text-black justify-center">
      </nav>
      <li class="block  text-center px-4 no-underline verdetg font-semibold">Hola, Usuario</li>
        <li class="block  text-center px-3 no-underline verdetg"><a  class="lis" href="javascript:actualizarMaestros()"><FontAwesomeIcon icon={faArrowsRotate} /></a></li>
        <li class="block  text-center px-3 no-underline verdetg"><a class="lis" href="/settings.html"><FontAwesomeIcon icon={faGear} /></a></li>
        <li class="block text-center px-3 no-underline verdetg"><a class="lis" href="javascript:cerrarSesion()"><FontAwesomeIcon icon={faArrowRightFromBracket} /></a></li>
      </div>
    </div>
  </header>
  );
};

export default Navbar;
