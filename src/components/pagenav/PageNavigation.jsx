import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";;
import { Typewriter } from "react-simple-typewriter";

export default function PageNavigation({ title, subheading }) {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `
          linear-gradient(to bottom, #fff 0%, rgb(255, 255, 255, 0) 40%),
          url(https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29zbWV0aWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          paddingBottom: "160px",
          overflow: "visible",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 50% 95%, 0% 90%)",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "20px",
              width: { xs: "100%", sm: "90%", md: "580px" },
              color: "rgba(0, 0, 0, 0.7);",
              textTransform: "uppercase",
              lineHeight: 1.1,
              fontWeight: "bold",
              fontFamily: "'Lato', sans-serif",
            }}
          >
            <Typewriter
              words={[`Home > ${subheading} >`]}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={60}
              deleteSpeed={0}
              delaySpeed={2000}
            />
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#000000",
              fontSize: "66px",
              width: { xs: "100%", sm: "90%", md: "800px" },
              mt: 2,
            }}
          >
            <Typewriter
              words={[`${title}`]}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={60}
              deleteSpeed={0}
              delaySpeed={2000}
            />
          </Typography>
        </Container>
      </Box>
    </>
  );
}
