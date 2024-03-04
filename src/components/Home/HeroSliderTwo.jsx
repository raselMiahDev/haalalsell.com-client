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
        autoplay={{ delay: 5000,disableOnInteraction:false }}
        navigation={true}
        modules={[Navigation,Autoplay]}
        className="mySwiper"
      >
        {
          data.length >0 ? (
            data.map((item) => {
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
                    <div className="d-flex align-items-end justify-content-center h-75">
                        <div>
                      <h1 className="headline-1">{item["title"]}</h1>
                      <h5>Price : {item["price"]}</h5>
                      <Link
                        to={"/details/" + item["_id"]}
                        className="btn btn-outline-warning text-white fw-bold py-3 px-5"
                      >
                        Buy Now
                      </Link>
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          ):("Loading...")
        }
      </Swiper>
    </>
  );
};

export default HeroSliderTwo;
