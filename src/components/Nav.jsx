import logoImage from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 w-full absolute z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={logoImage} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex items-center justify-center gap-16 max-lg:hidden">
        {navLinks.map(link => (
          <li key={link.label}>
            <a href={link.href} className="font-montserrat leading-normal text-lg text-slate-gray">{link.label}</a>
          </li>
        ))}
        </ul>
        <div className="lg:hidden">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav
