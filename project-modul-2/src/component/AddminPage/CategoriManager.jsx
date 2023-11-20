import { Formik, useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  deleteCategori,
  fetchCategori,
  portCategori,
} from "../StoreAction/action";
import axios from "axios";

function CategoriManager() {
  const categoris = useSelector((state) => state.users.categoris);
  // const newState = useSelector((state) => state.users.newState);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      categoriName: "",
    },
    validationSchema: Yup.object({
      categoriName: Yup.string().required("Không được để trống"),
    }),

    onSubmit: (values) => {
      dispatch(portCategori(values)).then(() => dispatch(fetchCategori()));
    },
  });
  useEffect(() => {
    dispatch(fetchCategori());
  }, [dispatch]);

  const handleDeleteCategoris = (categoriId) => {
    dispatch(deleteCategori(categoriId));
  };

  return (
    <div>
      <div className="card-header">
        <h3>Quản Lí Danh Mục</h3>
      </div>
      <div className="card-body">
        <div className="category_wrapper">
          <form onSubmit={formik.handleSubmit}>
            {/* phần nhập tên danh mục */}
            <div className="form_group">
              <label htmlFor="">Tên Danh Mục</label>
              <input
                name="categoriName"
                type="text"
                className="form_control_item name-category"
                placeholder="Nhập danh mục"
                value={formik.values.categoriName}
                onChange={formik.handleChange}
              />
              {formik.errors.categoriName && formik.touched.categoriName && (
                <p style={{ color: "red" }}>{formik.errors.categoriName}</p>
              )}
            </div>
            {/* phần nhập tên danh mục */}
            <div className="form_group">
              <button type="submit" className="btn_common btn_category_save">
                Lưu Lại
              </button>
            </div>
          </form>
        </div>
        <div className="title">
          <h2>Danh mục</h2>
        </div>
        <table className="style-table">
          <thead>
            <tr>
              <td>STT</td>
              <td>Tên mục</td>
              <td className="image_aline">Actions</td>
            </tr>
          </thead>
          <tbody className="save-category-table">
            {categoris &&
              categoris.map((categori, index) => (
                <tr key={categori.id}>
                  <td>{index + 1}</td>
                  <td>{categori.categoriName}</td>
                  <td>
                    <div className="table-button_product_manager">
                      <button
                        className="btn_common btn_edit"
                        // onClick={() => handleEditProduct(product)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn_common btn_dangger"
                        onClick={() => handleDeleteCategoris(categori.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CategoriManager;
