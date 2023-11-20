import React from "react";

// import "../ProductDetail/productDetail.css";
// import UserPage from "./UserPage";
// import ProductManager from "./ProductManager";
// import OderManager from "./OderManager";
// import CategoriManager from "./CategoriManager";
// import UserDetail from "./UserDetail";
import Footer from "../common/Footer";
import HeaderNav from "../common/HeaderNav";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";

function AdminPage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userLogining");
    navigate("/login");
  };

  return (
    <>
      {/* START HEADER */}
      <HeaderAdmin />
      {/* END HEADER */}
      {/* START MAIN CONTENT */}
      <div className="main_content">
        {/* START SECTION SHOP */}
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="dashboard_menu dashboard_menu_click">
                  <ul className="nav nav-tabs flex-column" role="tablist">
                    <li className="nav-item">
                      <NavLink to="productManager" className="nav-link active">
                        <i className="ti-layout-grid2" />
                        Quản Lí Sản Phẩm
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="userManager" className="nav-link">
                        <i className="ti-user" />
                        Quản lí Người Dùng
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="oderManager" className="nav-link">
                        <i className="ti-shopping-cart-full"></i>Quản Lí Đơn Hàng
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="categoriManager" className="nav-link">
                        <i className="ti-folder" />
                        Quản Lí Danh Mục
                      </NavLink>
                    </li>

                    <li className="nav-item " onClick={handleLogout}>
                      <a href="#" className="nav-link">
                        <i className="ti-lock " />
                        Đăng Xuất
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-9 col-md-8">
                <div className="tab-content dashboard_content">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END SECTION SHOP */}
      </div>
      {/* END MAIN CONTENT */}
      {/* START FOOTER */}
      <Footer />
      {/* END FOOTER */}
    </>
  );
}

export default AdminPage;
