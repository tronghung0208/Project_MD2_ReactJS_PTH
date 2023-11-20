import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormRegister() {
  // lấy dữ liêu từ Api về

  const [dataUsers, setDataUsers] = useState([]);
  const [isEmailCheck, setIsEmailCheck] = useState(false);

  const [toggleEye, setToggleEye] = useState(true);
  const [toggleConfirmEye, setToggleConfirmEye] = useState(true);
  const navigate = useNavigate();

  const getUsers = async () => {
    let resultData = await axios.get("http://localhost:8000/users");
    setDataUsers(resultData.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      date: "",
      password: "",
      confirmPassword: "",
      gender: "Nam",
      role: "regular",
      status: "",
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
      password: Yup.string()
        .min(8, "Nhập nhiều hơn 8 kí tự")
        .required("Không được để trống"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu không khớp")
        .required("Không được để trống"),
    }),

    onSubmit: async (values, { resetForm }) => {
      const checkEmail = dataUsers.findIndex(
        (user) => user.email === values.email
      );
      if (checkEmail >= 0) {
        setIsEmailCheck(true);
      } else {
        await axios.post("http://localhost:8000/users", values);

        navigate("/login");
      }
      resetForm();
    },
  });

  const handleTogleFlashPasword = () => {
    setToggleEye(false);
  };
  const handleTogleNoFlashPasword = () => {
    setToggleEye(true);
  };
  const handleTogleFlashConfirmPasword = () => {
    setToggleConfirmEye(false);
  };
  const handleTogleNoFlashConfirmPasword = () => {
    setToggleConfirmEye(true);
  };

  return (
    <form onSubmit={formik.handleSubmit} method="post">
      <div className="text-message container-message" />
      {/* Phần nhập tên */}
      <div className="form-group mb-3">
        <label htmlFor="">Họ và Tên </label>
        <input
          type="text"
          className="form-control name"
          name="name"
          placeholder="Nhập họ tên"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name && (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        )}
      </div>
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

      {/* Phần nhập địa chỉ */}

      <div className="form-group mb-3">
        <label htmlFor="">Địa chỉ</label>
        <input
          type="text"
          className="form-control email"
          name="address"
          placeholder="Nhập địa chỉ"
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        {formik.errors.address && formik.touched.address && (
          <p style={{ color: "red" }}>{formik.errors.address}</p>
        )}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="">Ngày sinh</label>
        <input
          className="form-control"
          type="date"
          id="dob"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
        />
        {formik.errors.date && formik.touched.date && (
          <p style={{ color: "red" }}>{formik.errors.date}</p>
        )}
      </div>

      {/* phần nhập password */}
      <div className="form-group_magin_bottom">
        <div className="form-group mb-3 form-group_password">
          <input
            className="form-control password"
            type={toggleEye ? "password" : "text"}
            name="password"
            placeholder="Nhập mật khẩu"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {toggleEye ? (
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

          {/* icon show hide password */}
        </div>
        {formik.errors.password && formik.touched.password && (
          <p style={{ color: "red" }}>{formik.errors.password}</p>
        )}
      </div>
      {/* Phần nhập Confirm Password */}
      <div className="form-group_magin_bottom">
        <div className="form-group mb-3 form-group_password">
          <input
            className="form-control confirm_password"
            type={toggleConfirmEye ? "password" : "text"}
            name="confirmPassword"
            placeholder="Nhập lại mật khẩu"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />

          {toggleConfirmEye ? (
            <i
              className="fas fa-eye-slash toggle_password"
              onClick={handleTogleFlashConfirmPasword}
            />
          ) : (
            <i
              className="fas fa-eye toggle_password"
              onClick={handleTogleNoFlashConfirmPasword}
            />
          )}
        </div>
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <p style={{ color: "red" }}>{formik.errors.confirmPassword}</p>
        )}
      </div>

      <div class="form-group form_group_radio">
        <label for="">Giới tính</label>
        <div class="content-radio">
          <div class="item">
            <input
              type="radio"
              value="Nam"
              id="male"
              name="gender"
              class="gender-radio"
              checked={formik.values.gender === "Nam"}
              onChange={formik.handleChange}
            />
            <label for="male"> Nam</label>
          </div>
          <div class="item">
            <input
              type="radio"
              value="Nữ"
              id="female"
              name="gender"
              class="gender-radio"
              checked={formik.values.gender === "Nữ"}
              onChange={formik.handleChange}
            />
            <label for="female"> Nữ</label>
          </div>
        </div>
      </div>

      {isEmailCheck && (
        <p style={{ color: "red" }}>Tài khoản đã có người sử dụng</p>
      )}

      {/* Phần button đăng kí */}
      <div className="form-group mb-3">
        <button type="submit" className="btn btn-fill-out btn-block btn-signup">
          Đăng kí
        </button>
      </div>
    </form>
  );
}

export default FormRegister;
