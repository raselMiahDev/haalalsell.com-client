import React, { useEffect, useState } from "react";
import { SliderListRequest } from "../../API/apiRequiest.js";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const HeroSliderTwo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await SliderListRequest();
      setData(result);
    })();
  }, []);
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.length > 0
          ? data.map((item) => {
              return (
                <SwiperSlide key={item["_id"]}>
                  <div
                    style={{
                      backgroundImage: `url(${item["img"]})`,
                      height: "80vh",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="d-flex align-items-center container h-75">
                      <div className="text-start">
                        <h1 className="poppins-black-italic">{item["title"]}</h1>
                        <p className="pb-3 poppins-regular-italic">Price : {item["price"]}</p>
                        <Link
                          to={"/details/" + item["_id"]}
                          className="btn btn-warning text-white fw-bold py-2 px-5"
                        >
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          : "Loading..."}
      </Swiper>
    </>
  );
};

export default HeroSliderTwo;
