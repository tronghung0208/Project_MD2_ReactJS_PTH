import React, { useEffect } from "react";

function ProductItemAll({ air, handleAddCart }) {
  const handleOnClickAddCart = (product) => {
    handleAddCart(product);
  };
  return (
    <div className="product-gallery-one-content-product-item">
      <img src={air.image1} alt="" />
      <div className="product-gallery-one-content-product-item-text">
        <li>
          <button onClick={() => handleOnClickAddCart(air)}>
            Thêm vào giỏ hàng
          </button>
        </li>
        <li>{air.productName}</li>
        <li>online giá rẻ</li>
        <li>
          <a href="">
            {air.oldPrice} <sup>đ</sup>
          </a>
          <span>
            {Math.floor(((air.oldPrice - air.price) * 100) / air.oldPrice)}%
          </span>
        </li>
        <li>
          {air.price} <sup>đ</sup>
        </li>
        <li>Quà tặng kèm</li>
        <li>
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </li>
      </div>
    </div>
  );
}

export default ProductItemAll;
