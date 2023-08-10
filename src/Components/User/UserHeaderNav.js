import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisiticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFotos } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathmame } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [mobile, pathmame]);

  const handleLogout = () => {
    userLogout();
    navigate('/login');
  };
  return (
    <>
      {mobile ? (
        <button
          aria-label="menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
        ></button>
      ) : null}
      <nav
        className={`${!mobile ? styles.nav : styles.navMobile} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile ? 'Minhas Fotos' : null}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisiticas />
          {mobile ? 'Estatisiticas' : null}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFotos />
          {mobile ? 'Adicionar Fotos' : null}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile ? 'Sair' : null}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;