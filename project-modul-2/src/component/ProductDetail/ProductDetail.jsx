import React from "react";
import "./productDetail.css";
import HeaderNav from "../common/HeaderNav";
import Footer from "../common/Footer";
import SliderProduct from "./SliderProduct";

function ProductDetail() {
  return (
    <div>
      <HeaderNav />
      <div>
        <div className="card-wrapper">
          <div className="card">
            {/* card left */}
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase">
                  <img
                    src="image/mo-hinh-may-bay-quan-su-apache-ah-64-huayi_992d925ddeae43be98d2456b80ee3b8d_1024x1024.webp"
                    alt="shoe image"
                  />
                  <img
                    src="image/mo-hinh-may-bay-quan-su-apache-ah-64-huayi_992d925ddeae43be98d2456b80ee3b8d_1024x1024.webp"
                    alt="shoe image"
                  />
                  <img
                    src="image/mo-hinh-may-bay-quan-su-apache-ah-64-huayi_992d925ddeae43be98d2456b80ee3b8d_1024x1024.webp"
                    alt="shoe image"
                  />
                  <img
                    src="image/mo-hinh-may-bay-quan-su-apache-ah-64-huayi_992d925ddeae43be98d2456b80ee3b8d_1024x1024.webp"
                    alt="shoe image"
                  />
                </div>
              </div>
              <div className="img-select">
                <div className="img-item">
                  <a href="#" data-id={1}>
                    <img
                      src="image/mo-hinh-may-bay-quan-su-apache-ah-64-huayi_992d925ddeae43be98d2456b80ee3b8d_1024x1024.webp"
                      alt="shoe image"
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id={2}>
                    <img
                      src="image/mo-hinh-may-bay-quan-su-apache-ah-64-huayi_992d925ddeae43be98d2456b80ee3b8d_1024x1024.webp"
                      alt="shoe image"
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id={3}>
                    <img
                      src="image/mo-hinh-may-bay-quan-su-apache-ah-64-huayi_992d925ddeae43be98d2456b80ee3b8d_1024x1024.webp"
                      alt="shoe image"
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id={4}>
                    <img
                      src="image/mo-hinh-may-bay-quan-su-apache-ah-64-huayi_992d925ddeae43be98d2456b80ee3b8d_1024x1024.webp"
                      alt="shoe image"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* card right */}
            <div className="product-content">
              <h2 className="product-title">nike shoes</h2>
              <a href="#" className="product-link">
                visit nike store
              </a>
              <div className="product-rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span>4.7(21)</span>
              </div>
              <div className="product-price">
                <p className="last-price">
                  Old Price: <span>$257.00</span>
                </p>
                <p className="new-price">
                  New Price: <span>$249.00 (5%)</span>
                </p>
              </div>
              <div className="product-detail">
                <h2>about this item: </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  eveniet veniam tempora fuga tenetur placeat sapiente
                  architecto illum soluta consequuntur, aspernatur quidem at
                  sequi ipsa!
                </p>
              </div>
              <div className="purchase-info">
                <input type="number" min={0} defaultValue={1} />
                <button type="button" className="btn">
                  Add to Cart <i className="fas fa-shopping-cart" />
                </button>
                <button type="button" className="btn">
                  Compare
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SliderProduct />

      <Footer />
    </div>
  );
}

export default ProductDetail;
