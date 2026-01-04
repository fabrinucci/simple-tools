import { Link } from 'wouter';

import { GoSun } from 'react-icons/go';
import { HiBars3, HiXMark } from 'react-icons/hi2';

import { useSideMenu } from '../hooks/useSideMenu';
import logo from '/logo.webp';

export const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useSideMenu();
  return (
    <header className='sticky top-0 z-50 bg-indigo-400 backdrop-blur-md border-b border-blue-600 shadow-sm'>
      <div className='mx-auto px-4 md:px-8 lg:px-16'>
        <nav className='flex items-center justify-between h-16'>
          <Link href='/' aria-label='Go to homepage' title='Go to homepage'>
            <div className='flex items-center space-x cursor-pointer group'>
              <div className='flex items-center justify-center w-7 h-7 mr-3'>
                <img src={logo} alt='Logo' />
              </div>
              <div>
                <h1 className='text-xl font-bold text-gray-800'>ToolStack</h1>
                <p className='text-xs text-blue-950'>Simple tools</p>
              </div>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <div className='hidden md:flex items-center space-x-1'>
            <Link
              href='/'
              className='px-4 py-2 rounded-lg text-blue-950 hover:bg-indigo-600 hover:text-primary-600 transition-colors font-medium hover:text-blue-200'
            >
              Home
            </Link>

            <Link
              href='/categories'
              className='px-4 py-2 rounded-lg text-blue-950 hover:bg-indigo-600 hover:text-primary-600 transition-colors font-medium hover:text-blue-200'
            >
              Categories
            </Link>
            <Link
              href='/favorites'
              className='px-4 py-2 rounded-lg text-blue-950 hover:bg-indigo-600 hover:text-primary-600 transition-colors font-medium hover:text-blue-200'
            >
              Favorites
            </Link>

            {/* Botón tema */}
            <button className='ml-2 p-2 rounded-full bg-blue-300 hover:bg-blue-200 transition-colors'>
              {/* <GoMoon size={25} className='text-blue-600' /> */}
              <GoSun size={25} className='text-blue-800' />
            </button>
          </div>

          {/* Menú móvil */}
          <div className='md:hidden flex items-center gap-4'>
            <button className='p-2 rounded-full bg-blue-300'>
              {/* <GoMoon size={25} className='text-blue-950' /> */}
              <GoSun size={25} className='text-blue-950' />
            </button>
            <button
              className='md:hidden rounded-lg text-blue-950'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiXMark size={27} /> : <HiBars3 size={27} />}
            </button>
          </div>
        </nav>

        {/* Menú móvil desplegable */}

        {isMenuOpen && (
          <div className='md:hidden py-6 border-t border-blue-600'>
            <div className='flex flex-col gap-6 items-center'>
              <Link href='/' className='rounded-lg text-blue-950 font-medium'>
                Home
              </Link>
              <Link
                href='/categories'
                className='rounded-lg text-blue-950 font-medium'
              >
                Categories
              </Link>
              <Link
                href='/favorites'
                className='rounded-lg text-blue-950 font-medium'
              >
                Favorites
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
