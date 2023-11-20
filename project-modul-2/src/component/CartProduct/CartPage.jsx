import React, { useEffect } from "react";
import "./cartPage.css";
import HeaderNav from "../common/HeaderNav";
import Footer from "../common/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  downCartQuantity,
  fetchUsers,
  upCartQuantity,
} from "../StoreAction/action";
import Swal from "sweetalert2";
function CartPage() {
  const dispatch = useDispatch();
  let cartUser = JSON.parse(localStorage.getItem("userLogining"));

  const cartUserData = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  let isUserLogining = cartUserData.find((user) => user?.id === cartUser?.id);

  // Hàm tăng số lượng
  const handleUpQuantity = (product) => {
    const existingProductIndex = isUserLogining?.cart.findIndex(
      (productItem) => productItem.id === product.id
    );
    if (existingProductIndex >= 0) {
      const updatedCart = [...isUserLogining.cart];
      const updatedProduct = { ...updatedCart[existingProductIndex] };
      // Tạo một bản sao của sản phẩm cần cập nhật
      if (updatedProduct.quantity) {
        updatedProduct.quantity += 1; // Cập nhật quantity trong bản sao sản phẩm
        updatedCart[existingProductIndex] = updatedProduct;
      }
      // Tạo một bản sao của đối tượng isUserLogining và cập nhật thuộc tính cart trong bản sao
      const updatedUserLogining = { ...isUserLogining, cart: updatedCart };

      dispatch(upCartQuantity(updatedUserLogining)).then(
        dispatch(fetchUsers())
      ); // Gửi bản sao đã cập nhật lên reducer
    }
  };

  // hàm giảm số lượng
  const handleDownQuantity = (product) => {
    const existingProductIndex = isUserLogining?.cart.findIndex(
      (productItem) => productItem.id === product.id
    );
    if (existingProductIndex >= 0) {
      const updatedCart = [...isUserLogining.cart];
      const updatedProduct = { ...updatedCart[existingProductIndex] };
      // Tạo một bản sao của sản phẩm cần cập nhật
      if (updatedProduct.quantity > 1) {
        updatedProduct.quantity -= 1; // Cập nhật quantity trong bản sao sản phẩm
        updatedCart[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct.quantity = 1; // Cập nhật quantity trong bản sao sản phẩm
        updatedCart[existingProductIndex] = updatedProduct;
      }
      // Tạo một bản sao của đối tượng isUserLogining và cập nhật thuộc tính cart trong bản sao
      const updatedUserLogining = { ...isUserLogining, cart: updatedCart };

      dispatch(downCartQuantity(updatedUserLogining)).then(
        dispatch(fetchUsers())
      ); // Gửi bản sao đã cập nhật lên reducer
    }
  };

  const handleDeleteProduct = (id) => {
    const existingProductIndex = isUserLogining?.cart.filter(
      (productItem) => productItem?.id !== id
    );
    const updatedUserLogining = {
      ...isUserLogining,
      cart: existingProductIndex,
    };
    dispatch(deleteCartProduct(updatedUserLogining)).then(
      dispatch(fetchUsers())
    );
  };

  // Mua hàng

  const handleCheckOut = () => {
    if (isUserLogining?.cart.length > 0) {
      const updatedUserLogining = {
        ...isUserLogining,
        cart: [],
      };

      console.log("gsgsgs", updatedUserLogining);
      dispatch(deleteCartProduct(updatedUserLogining)).then(() => {
        dispatch(fetchUsers());
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Mua hàng thành công",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        title: "Giỏ hàng của bạn không có sản phẩm nào",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };

  // hàm tính tổng giá của toàn bộ sản phẩm
  let total = 0;
  for (let i = 0; i < isUserLogining?.cart.length; i++) {
    total += isUserLogining?.cart[i].quantity * isUserLogining?.cart[i].price;
  }

  return (
    <main>
      <HeaderNav />
      <section className="cart">
        {/* {/* cart header * /} */}
        <header>
          <h2>Giỏ hàng của bạn</h2>
        </header>
        {/* {/* cart items * /} */}
        <div>
          {isUserLogining?.cart &&
            isUserLogining?.cart.map((cartProduct, index) => (
              <article key={cartProduct.id} className="cart-item">
                <img src={cartProduct.image1} alt="" />
                <div>
                  <h4>{cartProduct.productName}</h4>
                  <h4 className="item-price">
                    {cartProduct.price * cartProduct.quantity} <sup>đ</sup>
                  </h4>
                  {/* {/* remove button * /} */}
                  <button
                    onClick={() => handleDeleteProduct(cartProduct.id)}
                    className="remove-btn"
                  >
                    remove
                  </button>
                </div>
                <div>
                  {/* {/* increase amount * /} */}
                  <button
                    onClick={() => handleUpQuantity(cartProduct)}
                    className="amount-btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                    </svg>
                  </button>
                  {/* {/* amount * /} */}
                  <p className="amount">{cartProduct.quantity}</p>
                  {/* {/* decrease amount * /} */}
                  <button
                    onClick={() => handleDownQuantity(cartProduct)}
                    className="amount-btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
        </div>
        {/* {/* cart footer * /} */}
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              Tổng tiền:
              <span>
                {total} <sup>đ</sup>
              </span>
            </h4>
          </div>
          <button className="btn clear-btn" onClick={handleCheckOut}>
            Mua hàng
          </button>
        </footer>
      </section>
      <Footer />
    </main>
  );
}

export default CartPage;
