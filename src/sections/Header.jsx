import { useState } from "react";
import { Link } from "react-scroll";



const Header = () => {
  const navLinks = [
    { name: "home", label: "Home" },
    {name:"" , label: "Resume", url: ""},
    { name: "projects", label: "Projects" },
    { name: "contact", label: "Contact" }
  ];

  const [menuopen, setMenuopen] = useState(false)



  const toggleMenu = () => {
    setMenuopen((prev) => !prev)

  }


  return (
    <header className="font-poppins bg-custom-gradient">
      <nav className="md:flex justify-between items-center w-[92%] mx-auto py-4">
        <div>
          <h4 className="font-semibold top-3 whitespace-nowrap mt-2 text-white text-sm blur-[0.5px] cursor-pointer">Anand Jha</h4>
        </div>

        <div 
        className = {`absolute z-10 w-full right-4  pr-8 h-screen md:h-fit md:static  
        md:w-auto mt-10 md:mt-0 md:bg-transparent ${menuopen ? 'top-[0%]  left-0 md:bg-none transition duration-500' : 'top-[-106%]'}`}
        >
          <ul className="flex md:flex-row flex-col items-end md:gap-6 gap-1 mt-10 md:mt-0">
          {navLinks.map((nav, i) =>
            nav.url ? (
              <li key={i}>
                <a href={nav.url} target="_blank"  className="font-extralight text-[14.4px] text-white cursor-pointer">
                  {nav.label}
                </a>
              </li>
            ) : (
              <li key={i}>
                <Link to={nav.name} smooth={true} duration={800} className="font-extralight text-[14.4px] text-white cursor-pointer">
                  {nav.label}
                </Link>
              </li>
            )
          )}
        </ul>
        </div>

        <button
        onClick={toggleMenu} 
        className='md:hidden absolute right-8 top-3 size-10 cursor-pointer'
        >
            {menuopen ? (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
             class="text-white font-extrabold md:hidden">
             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
             </svg>
        ): (
            <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="size-8  text-white font-extrabold md:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

        )}

        </button>


        
      </nav>
    </header>
  );
}

export default Header;
