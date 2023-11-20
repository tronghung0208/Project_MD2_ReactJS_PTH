import React, { useEffect, useState } from "react";

function Slider1() {
  const [activeIndex, setActiveIndex] = useState(0);
  let index = 0;
  let imgNumber = [
    "https://az712634.vo.msecnd.net/content/14b2744cf8d6418c87ffddc3f3127242/9502630827244d60a1214f250e3bbca7/5ba51f8542c047d493a8a106a4b29c04/ab7335f53b194b81ad8cbe2dee4e553f/image",
    "/image/army-plane_522eaa521c524b8ab285c48421762f22.webp",
    "https://c.wallhere.com/photos/df/57/War_Thunder_airplane_Gaijin_Entertainment-197094.jpg!d",

    "/image/1_19fortyfive.com_1.jpg",
    "/image/army-plane_522eaa521c524b8ab285c48421762f22.webp",
    // "./image/1_19fortyfive.com_1.jpg",
    // "./image/1_19fortyfive.com_1.jpg",
  ];

  const handleRight = () => {
    setActiveIndex((prevIndex) =>
      prevIndex >= imgNumber.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleLeft = () => {
    setActiveIndex((prevIndex) =>
      prevIndex <= 0 ? imgNumber.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRight();
    }, 5000); // Slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section className="slider">
      <div className="container">
        <div className="slider-content">
          <div className="slider-content-left">
            <div className="slider-content-left-top-container">
              <div
                className="slider-content-left-top"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                  backgroundColor: "red",
                }}
              >
                {imgNumber.map((e, i) => (
                  <a href="#" key={i}>
                    <img src={e} alt="photo" />
                  </a>
                ))}
              </div>
              <div className="slider-content-left-top-btn ">
                <i
                  className="fa-solid fa-chevron-left"
                  onClick={() => handleLeft()}
                />
                <i
                  className="fa-solid fa-chevron-right"
                  onClick={() => handleRight()}
                />
              </div>
            </div>
            <div className="slider-content-left-bottom">
              <li
                onClick={() => setActiveIndex(0)}
                className={activeIndex === 0 && "active"}
              >
                Giấc mơ
              </li>
              <li
                onClick={() => setActiveIndex(1)}
                className={activeIndex === 1 && "active"}
              >
                Chinh Phục
              </li>
              <li
                onClick={() => setActiveIndex(2)}
                className={activeIndex === 2 && "active"}
              >
                Tốc Độ
              </li>
              <li
                onClick={() => setActiveIndex(3)}
                className={activeIndex === 3 && "active"}
              >
                Sáng Tạo
              </li>
              <li
                onClick={() => setActiveIndex(4)}
                className={activeIndex === 4 && "active"}
              >
                Đam Mê
              </li>
            </div>
          </div>
          <div className="slider-content-right">
            <div className="slider-content-right-image">
              <li>
                <a href="">
                  {" "}
                  <img
                    src="https://i.ytimg.com/vi/1lYoU7QYNlY/sddefault.jpg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <img
                    src="https://sudospaces.com/babycuatoi/2021/05/sj670c-mo-hinh-san-bay-1-1.jpg"
                    alt=""
                  />
                </a>
              </li>
            </div>
            <div className="slider-content-right-image">
              <li>
                <a href="">
                  {" "}
                  <img
                    src="https://xemohinh.co/media/xe_mo_hinh_kim_loai_blue-3479.jpg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <img
                    src="https://down-vn.img.susercontent.com/file/978801ff92eaed14c4cbd84e08f5693a_tn"
                    alt=""
                  />
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider1;
