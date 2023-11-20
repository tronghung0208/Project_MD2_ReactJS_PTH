import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchUsers,
  putCartInUser,
} from "../../StoreAction/action";

function Product() {
  const dispatch = useDispatch();
  const usersCart = useSelector((state) => state.users.users);
  console.log("vgsdgsd", usersCart);
  const productAll = useSelector((state) => state.users.products);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchUsers());
  }, []);

  const productLimit = productAll?.slice(0, 10); // Sử dụng slice thay vì filter
  const isUserLogging = JSON.parse(localStorage.getItem("userLogining"));

  const userLogging = usersCart.find((user) => user.id == isUserLogging?.id);
  console.log("isUserLogging", isUserLogging);
  console.log("usersCart", usersCart);
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
    <section style={{ marginBottom: "20px" }} className="product-gallery-one">
      <div className="container">
        <div className="product-gallery-one-content">
          <div className="product-gallery-one-content-title">
            <h2>Sản phẩm nổi bật nhất</h2>
          </div>
          <div className="product-gallery-one-content-product">
            {/* start------------------ item product------------ */}
            {productLimit &&
              productLimit.map((air, index) => (
                <ProductItem
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
  );
}

export default Product;
