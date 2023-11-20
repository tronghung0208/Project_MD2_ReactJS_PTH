import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import {
  deleteProduct,
  fetchCategori,
  fetchProducts,
  portProduct,
  putProduct,
} from "../StoreAction/action";

function ProductManager() {
  const products = useSelector((state) => state.users.products);
  const categoris = useSelector((state) => state.users.categoris);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategori());
  }, [dispatch]);
  const formik = useFormik({
    initialValues: {
      productName: "",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      price: "",
      categori: "",
      oldPrice: "",
      description: "",
      evaluate: "",
    },
    validationSchema: Yup.object({
      productName: Yup.string().required("Không được để trống"),
      categori: Yup.string().required("Không được để trống"),
      image1: Yup.string().required("Không được để trống"),
      image2: Yup.string().required("Không được để trống"),
      image3: Yup.string().required("Không được để trống"),
      image4: Yup.string().required("Không được để trống"),
      price: Yup.number()
        .typeError("Phải là số")
        .required("Không được để trống"),
      oldPrice: Yup.number()
        .typeError("Phải là số")
        .required("Không được để trống"),
      description: Yup.string().required("không được để trống"),
    }),

    onSubmit: async (values, { resetForm }) => {
      if (values.id) {
        dispatch(putProduct({ values: values, id: values.id })).then(() =>
          dispatch(fetchProducts())
        );
      } else {
        dispatch(portProduct(values)).then(() => dispatch(fetchProducts()));
      }

      resetForm();
    },
  });

  //Hàm edit product
  const handleEditProduct = (product) => {
    formik.setValues(product);
  };

  // hàm delete product
  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <div>
      {/* <Component /> */}
      <div className="product-box_form">
        <div className="card-header">
          <h3>Quản Lí Sản Phẩm</h3>
        </div>

        <div className="card-body">
          <div className="form_product_wrapper">
            {/* phan nhap ten san pham */}
            <form
              action=""
              className="form-save-product"
              onSubmit={formik.handleSubmit}
            >
              <div className="form_group">
                <label htmlFor="">Tên sản phẩm</label>
                <input
                  name="productName"
                  type="text"
                  className="form_control_item name"
                  placeholder="Nhập tên sản phẩm"
                  value={formik.values.productName}
                  onChange={formik.handleChange}
                />
                {formik.errors.productName && formik.touched.productName && (
                  <p style={{ color: "red" }}>{formik.errors.productName}</p>
                )}
              </div>
              {/* phần categori */}
              <div className="form_group">
                <label htmlFor="categori">Danh mục</label>
                <select
                  id="categori"
                  name="categori"
                  className="form_control_item category_wrapper_form_select"
                  value={formik.values.categori}
                  onChange={formik.handleChange}
                >
                  <option value="">Chọn danh mục</option>
                  {categoris &&
                    categoris.map((categori) => (
                      <option key={categori.id}>{categori.categoriName}</option>
                    ))}
                </select>
                {formik.errors.categori && formik.touched.categori && (
                  <p style={{ color: "red" }}>{formik.errors.categori}</p>
                )}
              </div>
              <div className="form_group">
                <label htmlFor="">Giá cũ của sản phẩm</label>
                <input
                  name="oldPrice"
                  type="text"
                  className="form_control_item price_product"
                  placeholder="Nhập giá cũ sản phẩm"
                  value={formik.values.oldPrice}
                  onChange={formik.handleChange}
                />
                {formik.errors.oldPrice && formik.touched.oldPrice && (
                  <p style={{ color: "red" }}>{formik.errors.oldPrice}</p>
                )}
              </div>
              {/* phan nhap ten san pham */}
              {/* phan nhap giá san pham */}
              <div className="form_group">
                <label htmlFor="">Giá mới của sản phẩm</label>
                <input
                  name="price"
                  type="text"
                  className="form_control_item price_product"
                  placeholder="Nhập giá mới sản phẩm"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                />
                {formik.errors.price && formik.touched.price && (
                  <p style={{ color: "red" }}>{formik.errors.price}</p>
                )}
              </div>
              {/* phan nhap giá san pham */}
              {/* Phần nhập ảnh sản phẩm */}
              <div className="form_group">
                <label htmlFor="">Ảnh sản phẩm (1)</label>

                <input
                  name="image1"
                  type="text"
                  className="form_control_item image"
                  placeholder="Ảnh 1"
                  value={formik.values.image1}
                  onChange={formik.handleChange}
                />
                {formik.errors.image1 && formik.touched.image1 && (
                  <p style={{ color: "red" }}>{formik.errors.image1}</p>
                )}
              </div>
              <div className="form_group">
                <label htmlFor="">Ảnh sản phẩm (2)</label>

                <input
                  name="image2"
                  type="text"
                  className="form_control_item image"
                  placeholder="Ảnh 2"
                  value={formik.values.image2}
                  onChange={formik.handleChange}
                />
                {formik.errors.image2 && formik.touched.image2 && (
                  <p style={{ color: "red" }}>{formik.errors.image2}</p>
                )}
              </div>
              <div className="form_group">
                <label htmlFor="">Ảnh sản phẩm (3)</label>

                <input
                  name="image3"
                  type="text"
                  className="form_control_item image"
                  placeholder="Ảnh 3"
                  value={formik.values.image3}
                  onChange={formik.handleChange}
                />
                {formik.errors.image3 && formik.touched.image3 && (
                  <p style={{ color: "red" }}>{formik.errors.image3}</p>
                )}
              </div>
              <div className="form_group">
                <label htmlFor="">Ảnh sản phẩm (4)</label>

                <input
                  name="image4"
                  type="text"
                  className="form_control_item image"
                  placeholder="Ảnh 4"
                  value={formik.values.image4}
                  onChange={formik.handleChange}
                />
                {formik.errors.image4 && formik.touched.image4 && (
                  <p style={{ color: "red" }}>{formik.errors.image4}</p>
                )}
              </div>
              {/* Phần nhập ảnh sản phẩm  */}
              {/* Phần nhập mô tả sản phẩm */}
              <div className="form_group">
                <label htmlFor="">Mô tả của sản phẩm</label>
                <textarea
                  name="description"
                  rows={6}
                  className="form_control_item description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
                {formik.errors.description && formik.touched.description && (
                  <p style={{ color: "red" }}>{formik.errors.description}</p>
                )}
              </div>
              {/*START phần thêm loại sản phẩm */}

              {/*END phần thêm loại sản phẩm */}
              {/* phần chọn category */}
              <div className="form_group">
                <button type="submit" className="btn_common btn_save">
                  Lưu lại
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Phần nhập thông tin sản phẩm */}
      <div className="tital">
        <h2>Danh Sách Sản Phẩm</h2>
      </div>
      {/* phần search theo nam và category */}
      <div className="search-all">
        <div className="search_name_category">
          <input
            className="search_product_name"
            type="text"
            placeholder="Nhập tên"
          />
          <i className="ion-ios-search-strong search-strong_name" />
        </div>
        <div className="search_name_category">
          <input
            className="search_category_name"
            type="text"
            placeholder="Nhập danh mục"
          />
          <i className="ion-ios-search-strong search-strong_category" />
        </div>
      </div>
      {/* phần search theo name và category */}
      <table className="style-table">
        <thead>
          <tr>
            <td>STT</td>
            <td>Tên sản phẩm</td>
            <td>Giá</td>
            <td className="image_aline">Ảnh</td>
            <td className="image_aline">Hành động</td>
          </tr>
        </thead>
        <tbody className="save-table">
          {products &&
            products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>
                  <img src={product.image1} alt="" />
                </td>
                <td>
                  <div className="table-button_product_manager">
                    <button
                      // data-id="${categories[i].id}"
                      className="btn_common btn_edit"
                      onClick={() => handleEditProduct(product)}
                    >
                      Edit
                    </button>
                    <button
                      // data-id="${categories[i].id}"
                      className="btn_common btn_dangger"
                      onClick={() => handleDeleteProduct(product.id)}
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
  );
}

export default ProductManager;
