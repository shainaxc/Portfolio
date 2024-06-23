import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";

import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [hoveredItem, setHoveredItem] = useState(null);

  const portfolioItems = [
    {
      image: Sidebar,
      description: "Develop an interactive and informative web portal for your school, featuring a Home Page, an Interactive Virtual School Tour, an Interactive Organizational Chart for the Top Administration and Computer Engineering Department, and an About the Developers section.",
      videoUrl:
        "https://drive.google.com/file/d/1JTvKNCnp6imOfZwt1Mmk1bUv7RwMiY18/view?usp=sharing",
    },
    {
      image: Ecommerce,
      description: "This is our Capstone project, a Smart Off-Grid Egg Incubator.",
      videoUrl:
        "https://drive.google.com/file/d/1lKTZvf2bDR4zSn1_eMdYxmxrTzlmBywd/view?usp=sharing",
    },
    {
      image: MusicApp,
      description: "Van Gogh merchandise collection is crafted with attention to detail, ensuring that you can enjoy the beauty and inspiration of Van Gogh's art in your everyday life.",
      videoUrl:
        "https://drive.google.com/file/d/1kSfchCt4nUuAEdtyU7Q-5efLN2VLh8qR/view?usp=sharing",
    },
    {
      image: HOC,
      description: "This e-commerce website allows users to order products online through a user-friendly interface with browsing, shopping cart, and checkout features.",
      videoUrl:
        "https://drive.google.com/file/d/15GW7BFgUifp1lA73oVGtA43jAVFFu3p7/view?usp=sharing",
    },
  ];

  const openVideoInNewTab = (videoUrl) => {
    window.open(videoUrl, "_blank");
  };

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="portfolio-item"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={item.image} alt="" />
              <div
                className="portfolio-description"
                style={{ opacity: hoveredItem === index ? 1 : 0 }}
              >
                <p>{item.description}</p>
                <button
                  className="portfolio-button"
                  onClick={() => openVideoInNewTab(item.videoUrl)}
                >
                  Play Video
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
