import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import ProductItemAll from "./ProductItemAll";
import {
  fetchProducts,
  fetchUsers,
  putCartInUser,
} from "../StoreAction/action";
import HeaderNav from "../common/HeaderNav";
import Footer from "../common/Footer";

function ProductAll() {
  const dispatch = useDispatch();
  const usersCart = useSelector((state) => state.users.users);
  const productAll = useSelector((state) => state.users.products);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchUsers());
  }, [dispatch]);

  const isUserLogging = JSON.parse(localStorage.getItem("userLogining"));

  const userLogging = usersCart.find((user) => user.id === isUserLogging?.id);

  const handleAddCart = (product) => {
    if (userLogging) {
      if (userLogging.cart === undefined) {
        // Tạo giỏ hàng ban đầu
        const cartUser = {
          ...userLogging,
          cart: [{ ...product, quantity: 1 }],
        };

        dispatch(putCartInUser(cartUser));
        localStorage.setItem("userLogining", JSON.stringify(cartUser));
      } else {
        const existingProductIndex = userLogging.cart.findIndex(
          (productItem) => productItem.id === product.id
        );

        if (existingProductIndex >= 0) {
          // Tạo một bản sao của sản phẩm cần cập nhật
          const updatedProduct = { ...userLogging.cart[existingProductIndex] };

          // Tăng số lượng sản phẩm trong giỏ hàng
          updatedProduct.quantity += 1;

          // Tạo một bản sao của giỏ hàng và cập nhật sản phẩm đã cập nhật
          const updatedCart = [...userLogging.cart];
          updatedCart[existingProductIndex] = updatedProduct;

          // Cập nhật giỏ hàng với giỏ hàng mới và lưu thông tin vào localStorage
          const cartUser = { ...userLogging, cart: updatedCart };
          localStorage.setItem("userLogining", JSON.stringify(cartUser));

          // Cập nhật thông tin người dùng sau mỗi thay đổi trong giỏ hàng
          dispatch(putCartInUser(cartUser));
        } else {
          // Thêm sản phẩm mới vào giỏ hàng
          const updatedCart = [
            ...userLogging.cart,
            { ...product, quantity: 1 },
          ];

          // Cập nhật giỏ hàng và lưu thông tin người dùng vào localStorage
          const cartUser = { ...userLogging, cart: updatedCart };
          localStorage.setItem("userLogining", JSON.stringify(cartUser));

          // Cập nhật thông tin người dùng sau mỗi thay đổi trong giỏ hàng
          dispatch(putCartInUser(cartUser));
        }
      }
    }
  };

  return (
    <div>
      <HeaderNav />
      <section style={{ marginBottom: "20px" }} className="product-gallery-one">
        <div className="container">
          <div className="product-gallery-one-content">
            <div className="product-gallery-one-content-title"></div>
            <div className="product-gallery-one-content-product">
              {/* start------------------ item product------------ */}
              {productAll &&
                productAll.map((air, index) => (
                  <ProductItemAll
                    air={air}
                    key={air.id}
                    handleAddCart={handleAddCart}
                  />
                ))}
              {/* end------------------ item product------------ */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProductAll;
