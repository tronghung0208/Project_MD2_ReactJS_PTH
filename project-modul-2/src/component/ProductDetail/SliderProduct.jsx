import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function SliderProduct() {
  return (
    <section
      style={{ paddingBottom: "20px", paddingTop: "20px", border: "none" }}
      className="product"
    >
      <div className="container">
        <div className="product-item">
          <h2 className="title_h2">Có thể bạn sẽ thích</h2>

          <OwlCarousel
            style={{ padding: "10px 10px" }}
            className="product-content owl-carousel owl-theme"
            loop
            margin={10}
            nav
          >
            <div className="product-content-item item">
              <img
                src="./image/mo-hinh-may-bay-quan-su-apache-ah-64-huayi_992d925ddeae43be98d2456b80ee3b8d_1024x1024.webp"
                alt=""
              />
              <div className="product-content-item-text">
                <div className="product-content-item-text-top">
                  <h1>Tên Sản phẩm</h1>
                  <p>
                    150.000 <sup>đ</sup>
                  </p>
                </div>
                <button>Thêm vào giỏ hàng</button>
                <div className="product-content-item-text-social">
                  <i className="fa-solid fa-binoculars" />
                </div>
              </div>
            </div>
            <div className="product-content-item item">
              <img src="./image/Maybay1.webp" alt="" />
              <div className="product-content-item-text">
                <div className="product-content-item-text-top">
                  <h1>Tên Sản phẩm</h1>
                  <p>
                    150.000 <sup>đ</sup>
                  </p>
                </div>
                <button>Thêm vào giỏ hàng</button>
                <div className="product-content-item-text-social">
                  <i className="fa-solid fa-binoculars" />
                </div>
              </div>
            </div>
            <div className="product-content-item item">
              <img src="./image/Maybay1.webp" alt="" />
              <div className="product-content-item-text">
                <div className="product-content-item-text-top">
                  <h1>Tên Sản phẩm</h1>
                  <p>
                    150.000 <sup>đ</sup>
                  </p>
                </div>
                <button>Thêm vào giỏ hàng</button>
                <div className="product-content-item-text-social">
                  <i className="fa-solid fa-binoculars" />
                </div>
              </div>
            </div>
            <div className="product-content-item item">
              <img src="./image/Maybay1.webp" alt="" />
              <div className="product-content-item-text">
                <div className="product-content-item-text-top">
                  <h1>Tên Sản phẩm</h1>
                  <p>
                    150.000 <sup>đ</sup>
                  </p>
                </div>
                <button>Thêm vào giỏ hàng</button>
                <div className="product-content-item-text-social">
                  <i className="fa-solid fa-binoculars" />
                </div>
              </div>
            </div>
            <div className="product-content-item item">
              <img src="./image/Maybay1.webp" alt="" />
              <div className="product-content-item-text">
                <div className="product-content-item-text-top">
                  <h1>Tên Sản phẩm</h1>
                  <p>
                    150.000 <sup>đ</sup>
                  </p>
                </div>
                <button>Thêm vào giỏ hàng</button>
                <div className="product-content-item-text-social">
                  <i className="fa-solid fa-binoculars" />
                </div>
              </div>
            </div>
            <div className="product-content-item item">
              <img src="./image/Maybay1.webp" alt="" />
              <div className="product-content-item-text">
                <div className="product-content-item-text-top">
                  <h1>Tên Sản phẩm</h1>
                  <p>
                    150.000 <sup>đ</sup>
                  </p>
                </div>
                <button>Thêm vào giỏ hàng</button>
                <div className="product-content-item-text-social">
                  <i className="fa-solid fa-binoculars" />
                </div>
              </div>
            </div>
            <div className="product-content-item item">
              <img src="./image/Maybay1.webp" alt="" />

              <div className="product-content-item-text">
                <div className="product-content-item-text-top">
                  <h1>Tên Sản phẩm</h1>
                  <p>
                    150.000 <sup>đ</sup>
                  </p>
                </div>
                <button>Thêm vào giỏ hàng</button>
                <div className="product-content-item-text-social">
                  <i className="fa-solid fa-binoculars" />
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default SliderProduct;
