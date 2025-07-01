import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://flyingsquirrelholidays.com/wp-content/uploads/2023/03/ian-kelsall-dXDHJ1wXEL0-unsplash-1-FSH-Cover.jpg",
  "https://flyingsquirrelholidays.com/wp-content/uploads/2023/03/jorge-fernandez-salas-ChSZETOal-I-unsplash-FSH-Cover.jpg",
  "https://www.travellingking.com/wp-content/uploads/2019/09/Porto-Porto-Portugal.-Panoramic-cityscape-image-of-Porto-.jpg",
];

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: 10,
      transform: "translateY(-50%)",
      zIndex: 2,
      color: "#fff",
      backgroundColor: "rgba(0,0,0,0.4)",
      "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
    }}
  >
    <ArrowForwardIos fontSize="small" />
  </IconButton>
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: 10,
      transform: "translateY(-50%)",
      zIndex: 2,
      color: "#fff",
      backgroundColor: "rgba(0,0,0,0.4)",
      "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
    }}
  >
    <ArrowBackIos fontSize="small" />
  </IconButton>
);

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
        height: { xs: "60vh", sm: "70vh", md: "75vh" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              height: { xs: "60vh", sm: "70vh", md: "75vh" },
            }}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
