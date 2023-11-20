import React, { useState } from "react";

// import "../ProductDetail/productDetail.css";
// import UserPage from "./UserPage";
// import ProductManager from "./ProductManager";
// import OderManager from "./OderManager";
// import CategoriManager from "./CategoriManager";
// import UserDetail from "./UserDetail";

import Footer from "../common/Footer";
import HeaderNav from "../common/HeaderNav";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import UserDetail from "./UserDetail";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { putUser } from "../StoreAction/action";

function MyAcound() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const localStorageDataUser = JSON.parse(localStorage.getItem("userLogining"));
  console.log("localStorageDataUser", localStorageDataUser);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      date: "",
      currentPassword: "",
      password: "",
      confirmPassword: "",
      gender: "Nam",
      role: "regular",
      status: "",
      locked: "false",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Cần nhiều hơn 5 kí tự")
        .max(25, "Không được nhập quá 5 kí tự")
        .required("Không được để trống"),
      email: Yup.string()
        .email("email chưa đúng định dạng")
        .required("Không được để trống"),
      address: Yup.string().required("không được để trống"),
      date: Yup.string().required("không được để trống"),
      currentPassword: Yup.string()
        .min(8, "Nhập nhiều hơn 8 kí tự")
        .required("Không được để trống"),
      password: Yup.string()
        .min(8, "Nhập nhiều hơn 8 kí tự")
        .required("Không được để trống"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu không khớp")
        .required("Không được để trống"),
    }),

    onSubmit: async (values) => {
      console.log("userIsLogin", values);
      console.log("values", values);
      if (localStorageDataUser.password === values.currentPassword) {
        dispatch(putUser({ values: values, id: userIsLogin.id }));
        localStorage.setItem("userLogining", JSON.stringify(values));
      } else {
        alert("Mật khẩu không trùng khớp");
      }

      toast.success("Cập nhật thành công");
    },
  });

  let userIsLogin;
  if (localStorageDataUser) {
    userIsLogin = localStorageDataUser;
  }

  const handleLogout = () => {
    localStorage.removeItem("userLogining");
    navigate("/login");
  };

  function convertDate(inputDate) {
    if (!inputDate || typeof inputDate !== "string") {
      return inputDate; // Trả về giá trị ban đầu nếu không hợp lệ
    }
    // Tách ngày, tháng và năm từ chuỗi đầu vào
    const parts = inputDate.split("/");

    if (parts.length === 3) {
      const day = parts[0];
      const month = parts[1];
      const year = parts[2];

      // Đảo ngược và nối lại thành chuỗi mới theo định dạng "zzzz-yy-xx"
      const newDate = `${year}-${month}-${day}`;

      return newDate;
    }

    // Trả về chuỗi ban đầu nếu đầu vào không hợp lệ
    return inputDate;
  }
  const inputDate = userIsLogin?.date;
  const convertedDate = convertDate(inputDate);
  if (userIsLogin && userIsLogin.date) {
    userIsLogin.date = convertedDate;
  }

  const handleEdit = () => {
    formik.setValues({
      ...formik.values,
      name: localStorageDataUser.name,
      email: localStorageDataUser.email,
      address: localStorageDataUser.address,
      date: localStorageDataUser.date,
      currentPassword: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      {/* START HEADER */}
      <HeaderNav />
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
                      <a href="#" className="nav-link active">
                        <i className="ti-id-badge" />
                        Chi Tiết Tài Khoản
                      </a>
                    </li>
                    <li className="nav-item " onClick={handleLogout}>
                      <a href="#" className="nav-link">
                        <i className="ti-lock " />
                        Đăng Xuất
                      </a>
                    </li>
                  </ul>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <h5>Thông Tin Cá Nhân</h5>
                  <div>
                    <p>
                      Tên: {localStorageDataUser && localStorageDataUser.name}
                    </p>
                    <p>
                      Email:{" "}
                      {localStorageDataUser && localStorageDataUser.email}
                    </p>
                    <p>
                      Địa chỉ:{" "}
                      {localStorageDataUser && localStorageDataUser.address}
                    </p>
                    <p>
                      Ngày sinh:{" "}
                      {localStorageDataUser && localStorageDataUser.date}
                    </p>
                    <p>
                      Giới tính:{" "}
                      {localStorageDataUser && localStorageDataUser.gender}
                    </p>

                    <button
                      className="btn btn-fill-out btn_acound_detail"
                      onClick={handleEdit}
                    >
                      Chỉnh sửa
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-9 col-md-8">
                <div className="tab-content dashboard_content">
                  <UserDetail formik={formik} />
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

export default MyAcound;
