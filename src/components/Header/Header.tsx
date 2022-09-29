import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

import style from "./Header.module.scss";

const navigate = [
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
]

export const Header: FC = () => {
  return (<>
      <header className={style.nav_header}>
        <ul className={style.nav_ul}>
          {navigate.map((item, idx) => (
            <li key={idx}>
              <NavLink 
                to={item.path} end 
                style={({isActive}) => ({
                  color: isActive ? 'green' : 'blue',
                })}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  );
};