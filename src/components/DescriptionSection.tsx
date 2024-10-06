import { Box, Grid, Typography } from "@mui/material";
import divider from "../assets/img/15.jpg";
//import divider from "../assets/img/festicon-foto.png";

export const DescriptionSection = () => {
  return (
    <Box
      sx={{
        height: "45rem",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#778da9", // Gradiente inspirado en los tonos de "La Noche Estrellada"
        color: "white",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          /* padding: "20px", */
          /*  backgroundColor: "rgba(0, 0, 0, 0.4)", // Fondo oscuro traslúcido */
          borderRadius: "10px",
          /*   boxShadow: "0 8px 30px rgba(0, 0, 0, 0.7)", // Sombra más pronunciada */
        }}
      >
        <Grid xs={9} mb="20px">
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Dancing Script', cursive",
              /* marginBottom: "20px", */
            }}
          >
            Te espero para compartir esa noche que para mí será mágica.
          </Typography>
        </Grid>

        <Grid xs={8}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "10rem",
              height: "20rem",
            }}
          >
            <img src={divider} /> {/* Ícono decorativo */}
          </Box>
        </Grid>

        <Grid xs={9} mt="20px">
          <Typography
            variant="h4"
            sx={
              {
                fontFamily: "'Dancing Script', cursive",
                /* marginBottom: "20px", */
              }
            }
          >
            Viernes 8 de noviembre - 22 hs
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
