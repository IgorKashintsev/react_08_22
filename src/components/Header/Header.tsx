import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../store/profile/slice";
import { StoreState } from "../../store";
import { logOut } from "../../services/firebase";
import style from "./Header.module.scss";


const nav = [
  {
    name: 'Main',
    path: '/',
  },
  {
    name: 'Chats',
    path: '/chats',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
  {
    name: 'Articles',
    path: '/articles',
  },
];

export const Header: FC = () => {
  const isAuth = useSelector((state: StoreState) => state.profile.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    // dispatch(auth(false));
  };

  const handleLogin = () => {
    navigate("/chats");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (<>
      <header className={style.nav_header}>
        <ul className={style.nav_ul}>
          {nav.map((item, idx) => (
            <li key={idx}>
              <NavLink 
                to={item.path} end 
                style={({isActive}) => ({
                  color: isActive ? 'darkgreen' : 'blue',
                })}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      <main>
        {isAuth ? (
        <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignUp}>SignUp</button>
          </>
        )}
        <Outlet/>
      </main>
    </>
  );
};