import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchUsers,
  putCartInUser,
} from "../../StoreAction/action";

function Slider2() {
  // lấy sản phảm từ DB ra
  const productHomes = useSelector((state) => state.users.products);

  // lấy users từ DB ra

  const usersCart = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchUsers());
  }, [dispatch]);

  const combatAircrafts = productHomes?.filter(
    (air) => air.categori === "Mô hình máy bay chiến đấu"
  );
  const commercialAircraft = productHomes?.filter(
    (air) => air.categori === "Mô hình máy bay thương mại"
  );

  // Phần mua hàng slider1

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

  const handleAddCartSlider = (product) => {
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
    <section
      style={{ paddingBottom: "20px", paddingTop: "20px", border: "none" }}
      className="product"
    >
      <div className="container">
        <div className="product-item">
          <h2 className="title_h2">Mô Hình Máy Bay Chiến Đấu</h2>

          <OwlCarousel
            style={{ padding: "10px 10px" }}
            className="product-content owl-carousel owl-theme"
            loop
            margin={10}
            nav
          >
            {combatAircrafts &&
              combatAircrafts?.map((air) => (
                <div key={air.id} className="product-content-item item">
                  <img src={air.image1} alt="" />
                  <div className="product-content-item-text">
                    <div className="product-content-item-text-top">
                      <h1>{air.productName}</h1>
                      <p>
                        {air.price} <sup>đ</sup>
                      </p>
                    </div>
                    <button onClick={() => handleAddCart(air)}>
                      Thêm vào giỏ hàng
                    </button>
                    <div className="product-content-item-text-social">
                      <i className="fa-solid fa-binoculars" />
                    </div>
                  </div>
                </div>
              ))}
          </OwlCarousel>
        </div>

        <div className="product-item">
          <h2 className="title_h2">Mô Hình Máy Bay Thương Mại</h2>

          <OwlCarousel
            style={{ padding: "10px 10px" }}
            className="product-content owl-carousel owl-theme"
            loop
            margin={10}
            nav
          >
            {commercialAircraft &&
              commercialAircraft.map((air) => (
                <div key={air.id} className="product-content-item item">
                  <img src={air.image1} alt="" />
                  <div className="product-content-item-text">
                    <div className="product-content-item-text-top">
                      <h1>{air.productName}</h1>
                      <p>
                        {air.price} <sup>đ</sup>
                      </p>
                    </div>
                    <button onClick={() => handleAddCartSlider(air)}>
                      Thêm vào giỏ hàng
                    </button>
                    <div className="product-content-item-text-social">
                      <i className="fa-solid fa-binoculars" />
                    </div>
                  </div>
                </div>
              ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default Slider2;
