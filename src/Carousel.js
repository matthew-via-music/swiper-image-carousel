import { Navigation, Pagination, A11y, Keyboard, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import data from "./data"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "./css/carousel.css"

export default function Carousel() {
  return (
    <Swiper
      tag="section"
      wrapperTag="ul"
      modules={[Navigation, Pagination, A11y, Keyboard, Autoplay]}
      slidesPerView={1}
      keyboard
      loop
      // autoplay
      navigation
      pagination={{ clickable: true }}
    >
      <div>
        {data.map((obj) => (
          <SwiperSlide
            tag="li"
            style={{ width: "100vw", height: "100vh" }}
            key={obj.id}
          >
            <img src={obj.img} alt={obj.id} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  )
}
