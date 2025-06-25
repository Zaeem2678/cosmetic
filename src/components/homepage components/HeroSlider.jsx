import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = ["./lipstick.jpg", "./lipstick2.jpg", "./lipstick3.jpg"];

// Custom Arrow Components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        zIndex: 1,
        color: "white",
        backgroundColor: "rgba(0,0,0,0.4)",
        "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        zIndex: 1,
        color: "white",
        backgroundColor: "rgba(0,0,0,0.4)",
        "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default function HeroSlider() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "40vh", sm: "60vh", md: "70vh" },
        position: "relative", // Make sure arrows are positioned inside
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
