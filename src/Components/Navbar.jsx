
import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import routes from '../Routes/routes'
import { getClasses } from '../Components/utils/globalcontext';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext); // poner contexto del tema

  const { navTheme, bgNav, themeBtn } = getClasses(theme);


  return (
    <nav className={navTheme}>
      <img
        className='aling-logo'
        src={theme === 'light' ? logoClinicaA : logoClinicaB}
        alt='Logo Clinica Dental'
      />
      <div className={bgNav}>
        {routes.map(({ path, name }) => {
          if (name !== 'Detail') {
            return (
              <div key={path}>
                <Link to={path}>
                  <div className='button-nav'>{name}</div>
                </Link>
              </div>
            );
          }
          return null;
        })}
        <button className={themeBtn} onClick={toggleTheme}>
          <img
            src={theme === 'light' ? iconThemeDark : iconThemeLight}
            alt='Toggle Theme'
            width={32}
            height={32}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;