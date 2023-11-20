import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-menu">
          <div className="footer-menu-1">
            <div className="menu-first">
              <div>
                <ul>
                  <li>
                    <a href="">
                      <img
                        style={{ width: 150, height: 70 }}
                        src="./image/MODAL PLANE (2) (1)_preview_rev_1.png"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot"></i> Tòa nhà Sông Đà,
                  Phạm Hùng
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i> 02877770049; 0938711115
                  ( Zalo, Viber)
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i> modelplane@gmail.com
                </li>
                <li>
                  <i className="fa-solid fa-earth-americas"> </i>{" "}
                  http://localhost:3003/
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-menu-1">
            <div className="footer-menu-1-center">
              <p>THÔNG TIN CÔNG TY</p>
              <ul>
                <li>About Us</li>
                <li>Thông Tin Liên Hệ</li>
                <li>Tuyển Dụng</li>
              </ul>
            </div>
          </div>
          <div className="footer-menu-1">
            <div className="footer-menu-1-center">
              <p>CHÍNH SÁCH</p>
              <ul>
                <li>Chương Trình Tích Điểm</li>
                <li>Chính Sách Đổi Trả Hàng</li>
                <li>Chính Sách Giao Hàng</li>
                <li>Chính Sách Vận Chuyển</li>
                <li>Chính Sách Bảo Mật</li>
              </ul>
            </div>
          </div>
          <div className="footer-menu-1">
            <div className="menu-last">
              <p>HỖ TRỢ KHÁCH HÀNG</p>
              <ul>
                <li>Phương Thức Thanh Toán</li>
                <li>Thanh Toán Trả Góp</li>
                <li>Tìm Hiểu Về Kích Thước Và Tỷ Lệ Xe Mô Hình</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
