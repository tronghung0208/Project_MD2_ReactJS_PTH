import React from "react";
import { Link } from "react-router-dom";

function HeaderAdmin() {
  const localStorageDataUser = JSON.parse(localStorage.getItem("userLogining"));
  let userIsLogin;
  if (localStorageDataUser) {
    userIsLogin = localStorageDataUser[0];
  }

  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <Link to="/">
              <a href="">
                <img
                  style={{ width: 150, height: 70 }}
                  src="./image/MODAL PLANE (2) (1)_preview_rev_1.png"
                  alt=""
                />
              </a>
            </Link>
          </li>
          <li style={{ fontSize: "35px" }}>ADMIN</li>
          <li>
            <Link to="/">
              <a href="">Trang chủ</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderAdmin;
