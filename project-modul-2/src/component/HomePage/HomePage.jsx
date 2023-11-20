import React, { useEffect, useState } from "react";

import "./homePage.css";
import Header from "../common/Header";
import HeaderNav from "../common/HeaderNav";
import MenuNavBar from "../common/MenuNavBar";
import Slider1 from "./HomeItem/Slider1";
import Slider2 from "./HomeItem/Slider2";
import Product from "./Product/Product";
import Footer from "../common/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <HeaderNav />
      <MenuNavBar />
      {/*----------------- Phần Slider------------------------------ */}
      <Slider1 />
      {/* slider phần 2 */}
      <Slider2 />

      {/* phần sản phẩm nổi bật */}
      <Product />
      {/* phần footer----------- */}

      <Footer />
    </>
  );
}

export default HomePage;
