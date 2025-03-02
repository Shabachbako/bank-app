import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Timeline.css";
import { FaUsers } from "react-icons/fa"; // Icon for each card

const timelineData = [
  { year: "2016", text: "Nam blandit volutpat arcu. Nullam vitae elit arcu. Duis nec faucibus sapien. In sagittis, mauris vel laoreet elementum" },
  { year: "2017", text: "Nam blandit volutpat arcu. Nullam vitae elit arcu. Duis nec faucibus sapien. In sagittis, mauris vel laoreet elementum" },
  { year: "2018", text: "Nam blandit volutpat arcu. Nullam vitae elit arcu. Duis nec faucibus sapien. In sagittis, mauris vel laoreet elementum" },
  { year: "2020", text: "Nam blandit volutpat arcu. Nullam vitae elit arcu. Duis nec faucibus sapien. In sagittis, mauris vel laoreet elementum" },
];

const Timeline = () => {
  return (
    <section className="timeline">
      <div className="timeline-container">
        {/* Heading */}
        <h4 className="timeline-subtitle">Our journey so far</h4>
        <h2 className="timeline-title">
          Everyone has a story behind. Here’s ours!
        </h2>
        <p className="timeline-description">
          For decades, the clearing of financial transactions remained unchanged and unchallenged. 
          Bankio provides real-time payment and innovative banking services to their customers.
        </p>

        {/* Swiper Timeline Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={true}
          loop={true} // Enables infinite looping
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto-slide every 2 seconds
          speed={1000} // Smooth transition speed
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="timeline-slider"
        >
          {timelineData.map((item, index) => (
            <SwiperSlide key={index} className="timeline-card">
              <FaUsers className="timeline-icon" />
              <h3>{item.year}</h3>
              <p>{item.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Timeline;
