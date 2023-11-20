import React from "react";

function MenuNavBar() {
  return (
    <section className="menu-bar">
      <div className="container">
        <div className="menu-bar-content">
          <ul>
            <li>
              <a href="">
                <img
                  style={{ width: 25, height: 25 }}
                  src="./image/menu_icon_1.webp"
                  alt=""
                />
                Hàng mới về
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-plane" /> Chở khách{" "}
              </a>
              <div className="submenu">
                <ul>
                  <li>
                    <a href="">Airbus</a>
                  </li>
                  <li>
                    <a href="">Boeing</a>
                  </li>
                  <li>
                    <a href="">MD-11/DC-10</a>
                  </li>
                  <li>
                    <a href="">Lockheed</a>
                  </li>
                  <li>
                    <a href="">Embraer</a>
                  </li>
                  <li>
                    <a href="">VN airline</a>
                  </li>
                  <li>
                    <a href="">Jetstar Pacific</a>
                  </li>
                  <li>
                    <a href="">Vietjet Air</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-jet-fighter" /> Quân sự{" "}
              </a>
              <div className="submenu">
                <ul>
                  <li>
                    <a href="">Máy bay chiến đấu</a>
                  </li>
                  <li>
                    <a href="">Máy bay ném bom</a>
                  </li>
                  <li>
                    <a href="">Máy bay tấn công</a>
                  </li>
                  <li>
                    <a href="">Máy bay vận tải</a>
                  </li>
                  <li>
                    <a href="">Không người lái</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-helicopter" /> Trực thăng{" "}
              </a>
              <div className="submenu">
                <ul>
                  <li>
                    <a href="">Dân dụng</a>
                  </li>
                  <li>
                    <a href="">Chiến đấu</a>
                  </li>
                  <li>
                    <a href="">Vận tải</a>
                  </li>
                  <li>
                    <a href="">Nga</a>
                  </li>
                  <li>
                    <a href="">Mỹ</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-car-side" /> Ô tô
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-sailboat" /> Tàu thuyền
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-motorcycle" /> Mô tô
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MenuNavBar;
