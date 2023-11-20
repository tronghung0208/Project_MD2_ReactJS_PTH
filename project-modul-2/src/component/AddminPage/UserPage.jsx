import React, { useEffect } from "react";
import "./UserPage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, lockUser, unLockUser } from "../StoreAction/action";
import axios from "axios";

function UserPage() {
  // lấy dữ liệu users từ store về để render
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  let normalAccount;
  if (users.length > 0) {
    normalAccount = users.filter((user) => user.role === "regular");
  }

  // khóa user
  const handleLockUser = async (user) => {
    dispatch(lockUser({ ...user, locked: true }));
  };
  const handleUnLockUser = async (user) => {
    dispatch(unLockUser({ ...user, locked: false }));
  };

  return (
    <div>
      <div className="product-box_form_users_manager">
        <div className="card-header">
          <h3>Thông Tin Người Dùng</h3>
        </div>
        <form
          method="post"
          name="enq"
          className="form_display_user form_manager_user"
        >
          <div className="row">
            {/* phần tên */}
            <div className="col-md-12 mb-3">
              <label>Tên</label>
              <input
                required=""
                className="form-control form-control_user_name"
                name="dname"
                type="text"
                placeholder="Nhập tên"
              />
              <div className="error_message error-name" />
            </div>
            {/* phần tên */}
            {/* update address */}
            <div className="col-md-12 mb-3">
              <label>Email</label>
              <input
                required=""
                className="form-control form-control_user_email"
                name="email"
                type="email"
                placeholder="Nhập Email"
              />
              <div className="error_message error-name" />
            </div>
            {/* update address */}
            {/* mật khẩu */}
            <div className="col-md-12 mb-3">
              <label>Mật khẩu</label>
              <input
                required=""
                className="form-control form-control_user_password"
                name="password"
                type="text"
                placeholder="Nhập mật khẩu"
              />
              <div className="error_message error-name" />
            </div>
            {/* mật khẩu */}
            {/* lưu lại sửa đổi */}
            <div className="col-md-12">
              <button
                type="submit"
                className="btn btn-fill-out save_user_manager"
                name="submit"
                value="Submit"
              >
                Lưu lại
              </button>
            </div>
            {/* lưu lại sửa đổi */}
          </div>
        </form>
      </div>
      <h3 className="list-user_manager">Danh sách người dùng</h3>
      <table className="style-table">
        <thead>
          <tr>
            <td>STT</td>
            <td>Tên</td>
            <td>Email</td>
            <td className="image_aline">Mật khẩu</td>
            <td className="image_aline">Hành động</td>
          </tr>
        </thead>
        <tbody className="save-table_manager">
          {normalAccount &&
            normalAccount.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td className="image_aline">
                  {!user.locked ? (
                    <button
                      className="btn_common btn_dangger"
                      onClick={() => handleLockUser(user)}
                    >
                      Lock
                    </button>
                  ) : (
                    <button
                      className="btn_common btn_dangger"
                      onClick={() => handleUnLockUser(user)}
                    >
                      unLock
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;
