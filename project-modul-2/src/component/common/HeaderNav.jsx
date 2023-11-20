import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function HeaderNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const localStorageDataUser = JSON.parse(localStorage.getItem("userLogining"));

  const handlePermission = () => {
    if (localStorageDataUser.role === "admin") {
      navigate("/admin");
    } else if (localStorageDataUser.role === "regular") {
      navigate("/userPage");
    }
  };

  const useIsLogin = useSelector((state) => state.users.users);
  const products = useSelector((state) => state.users.products);

  const isUserLogining = useIsLogin?.find(
    (user) => user.id === localStorageDataUser?.id
  );

  // tính tổng giá của sản phẩm
  const handleClickCart = () => {
    if (!localStorageDataUser) {
      Swal.fire({
        title: "Bạn chưa đăng nhập",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else {
      navigate("/cartPage");
    }
  };

  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <Link to="/">
              <img
                style={{ width: 150, height: 70 }}
                src="./image/MODAL PLANE (2) (1)_preview_rev_1.png"
                alt=""
              />
            </Link>
          </li>
          <li>
            <a href="">
              Hà Nội <i className="fa-solid fa-chevron-down" />
            </a>
          </li>
          <li>
            <input placeholder="Bạn tìm gì" type="text" />
            <i className="fa-solid fa-magnifying-glass" />
          </li>
          <li>
            <a onClick={handleClickCart}>
              <button>
                <div className="nav-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
                  </svg>
                  <div className="amount-container">
                    <p className="total-amount">
                      {isUserLogining?.cart?.length}
                    </p>
                  </div>
                </div>
              </button>
            </a>
          </li>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/productAllProduct">Sản phẩm</Link>
          </li>
          <li>
            <a href="">Liên hệ</a>
          </li>
          <li>
            {localStorageDataUser ? (
              <a href="#" onClick={handlePermission}>
                {localStorageDataUser.name}
              </a>
            ) : (
              <Link to="/login">Đăng nhập/Đăng kí</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderNav;
