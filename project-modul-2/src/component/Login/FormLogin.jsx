import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function FormLogin() {
  const [toggleEyePassword, setToggleEyePassword] = useState(true);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("email chưa đúng định dạng")
        .required("Không được để trống"),

      password: Yup.string()
        .min(8, "Nhập nhiều hơn 8 kí tự")
        .required("Không được để trống"),
    }),

    onSubmit: async (values, { resetForm }) => {
      let urlGet = await axios.get(
        `http://localhost:8000/users?email=${values.email}&password=${values.password}`
      );
      let isUser = urlGet.data;
      console.log("isUser", isUser);
      if (isUser) {
        if (isUser[0].role === "admin") {
          localStorage.setItem("userLogining", JSON.stringify(isUser[0]));
          navigate("/admin");
        } else if (isUser[0].role === "regular") {
          if (isUser[0].locked === true) {
            Swal.fire({
              title: "Tài khoản đã bị khóa",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          } else {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "đăng nhập thành công",
              showConfirmButton: false,
              timer: 1500,
            });
            localStorage.setItem("userLogining", JSON.stringify(isUser[0]));
            navigate("/");
          }
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Email hoặc mật khẩu không đúng",
        });
      }
      resetForm();
    },
  });

  const handleTogleFlashPasword = () => {
    setToggleEyePassword(false);
  };
  const handleTogleNoFlashPasword = () => {
    setToggleEyePassword(true);
  };

  return (
    <form onSubmit={formik.handleSubmit} method="post">
      <div className="text-message container-message" />
      {/* Phần nhập email */}
      <div className="form-group mb-3">
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="form-control email"
          name="email"
          placeholder="Nhập email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email && (
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        )}
      </div>

      {/* phần nhập password */}
      <div className="form-group_magin_bottom">
        <label htmlFor="">Mật khẩu</label>
        <div className="form-group mb-3 form-group_password">
          <input
            className="form-control password"
            type={toggleEyePassword ? "password" : "text"}
            name="password"
            placeholder="Nhập mật khẩu"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {toggleEyePassword ? (
            <i
              className="fas fa-eye-slash toggle_password"
              onClick={handleTogleFlashPasword}
            />
          ) : (
            <i
              className="fas fa-eye toggle_password"
              onClick={handleTogleNoFlashPasword}
            />
          )}
        </div>
        {formik.errors.password && formik.touched.password && (
          <p style={{ color: "red" }}>{formik.errors.password}</p>
        )}
      </div>

      {/* Phần button đăng kí */}
      <div className="form-group mb-3">
        <button type="submit" className="btn btn-fill-out btn-block btn-signup">
          Đăng nhập
        </button>
      </div>
    </form>
  );
}

export default FormLogin;
