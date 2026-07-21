import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Test() {
  return (
    <div className="p-10">
      <Swiper slidesPerView={1.2} spaceBetween={20}>
        <SwiperSlide>
          <div className="h-60 bg-red-500 rounded-xl"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-60 bg-blue-500 rounded-xl"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-60 bg-green-500 rounded-xl"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}