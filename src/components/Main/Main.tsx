import { Link } from "react-router-dom";

import "./Main.css";

export const Main = () => {
  return (
    <div className="main__wrapper">
      <div className="main__welcome">Добро пожаловать!</div>
      <div>
        <Link to="login" className="main__login">
          Войдите
        </Link>
        , чтобы начать использование!
      </div>
    </div>
  );
};
