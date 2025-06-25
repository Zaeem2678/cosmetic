import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "./lipstick.jpg",
  "./lipstick2.jpg", // woman applying lipstick
  "./lipstick3.jpg", // skincare & perfume layout
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export default function HeroSlider() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "40vh", sm: "60vh", md: "70vh" },
        overflow: "hidden",
      }}
    >
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box key={index}>
            <img
              src={img}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                height: "70vh",
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
