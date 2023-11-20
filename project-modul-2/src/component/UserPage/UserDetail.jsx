import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

function UserDetail({ formik }) {
  return (
    <div className="card-header_myacound">
      <div className="card-header">
        <h3>Chỉnh Sửa Thông Tin</h3>
      </div>
      <div className="card-body">
        {/* FORM THAY ĐỔI USERS */}
        <form
          method="post"
          name="enq"
          className="form_display_user"
          onSubmit={formik.handleSubmit}
        >
          <div className="row">
            {/* phần update tên */}
            <div className="col-md-12 mb-3">
              <label>
                Tên tài khoản
                <span className="required">*</span>
              </label>
              <input
                required=""
                className="form-control form_display_name"
                name="name"
                type="text"
                placeholder="Nhập tên"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.touched.name && (
                <p style={{ color: "red" }}>{formik.errors.name}</p>
              )}
            </div>
            {/* phần update tên */}
            {/* update email address */}
            <div className="col-md-12 mb-3">
              <label>
                Địa chỉ Email
                <span className="required">*</span>
              </label>
              <input
                disabled={true}
                required=""
                className="form-control form_display_email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <p style={{ color: "red" }}>{formik.errors.email}</p>
              )}
            </div>
            {/* update Ngày sinh */}
            <div className="col-md-12 mb-3">
              <label>
                Ngày sinh
                <span className="required">*</span>
              </label>
              <input
                required=""
                className="form-control form_display_email"
                name="date"
                type="date"
                value={formik.values.date}
                onChange={formik.handleChange}
              />
              {formik.errors.date && formik.touched.date && (
                <p style={{ color: "red" }}>{formik.errors.date}</p>
              )}
            </div>

            {/* update dịa chỉ */}
            <div className="col-md-12 mb-3">
              <label>
                Địa chỉ
                <span className="required">*</span>
              </label>
              <input
                required=""
                className="form-control form_display_email"
                name="address"
                type="text"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
              {formik.errors.address && formik.touched.address && (
                <p style={{ color: "red" }}>{formik.errors.address}</p>
              )}
            </div>

            {/* mật khẩu cũ */}
            <div className="col-md-12 mb-3 form-group_password">
              <label>
                Mật khẩu cũ
                <span className="required">*</span>
              </label>
              <input
                required=""
                className="form-control form_display_current_password"
                name="currentPassword"
                type="password"
                placeholder="Nhập mật khẩu cũ"
                value={formik.values.currentPassword}
                onChange={formik.handleChange}
              />

              {/* <i className="fas fa-eye-slash toggle_curent_password" /> */}
            </div>
            {formik.errors.currentPassword &&
              formik.touched.currentPassword && (
                <p style={{ color: "red" }}>{formik.errors.currentPassword}</p>
              )}
            {/* mật khẩu cũ */}
            {/* mật khẩu mới */}
            <div className="col-md-12 mb-3 form-group_password">
              <label>
                Mật khẩu mới
                <span className="required">*</span>
              </label>
              <input
                required=""
                className="form-control form_new_password"
                name="password"
                type="password"
                placeholder="Nhập mật khẩu mới"
                value={formik.values.password}
                onChange={formik.handleChange}
              />

              {/* <i className="fas fa-eye-slash toggle_new_password" /> */}
            </div>
            {formik.errors.password && formik.touched.password && (
              <p style={{ color: "red" }}>{formik.errors.password}</p>
            )}
            {/* mật khẩu mới */}
            {/* nhập lại mật khẩu mới */}
            <div className="col-md-12 mb-3 form-group_password">
              <label>
                Nhập lại mật khẩu mới
                <span className="required">*</span>
              </label>
              <input
                required=""
                className="form-control form_new_confirm_password"
                name="confirmPassword"
                type="password"
                placeholder="Nhập lại mật khẩu mới"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />

              {/* <i className="fas fa-eye-slash toggle_new_confirm_password" /> */}
            </div>
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <p style={{ color: "red" }}>{formik.errors.confirmPassword}</p>
              )}
            <div class="form-group form_group_radio">
              <label for="">Gender</label>
              <div class="content-radio">
                <div class="item">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    class="gender-radio"
                    checked
                    // checked={formik.values.gender === "Nam"}
                    // onChange={formik.handleChange}
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
                    // checked={formik.values.gender === "Nữ"}
                    // onChange={formik.handleChange}
                  />
                  <label for="female"> Nữ</label>
                </div>
              </div>
            </div>
            {/* nhập lại mật khẩu mới */}
            {/* lưu lại sửa đổi */}
            <div className="col-md-12">
              <button
                type="submit"
                className="btn btn-fill-out btn_acound_detail"
                name="submit"
                value="Submit"
                // onClick={handleUpdateUsser}
              >
                Lưu lại
              </button>
            </div>
            {/* lưu lại sửa đổi */}
          </div>
        </form>
        {/* FORM THAY ĐỔI USERS */}
      </div>
    </div>
  );
}

export default UserDetail;
