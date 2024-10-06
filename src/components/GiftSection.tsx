import { Box, Grid, Typography } from "@mui/material";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import { styled } from "@mui/system";
//import divider from "../assets/img/festicon-foto.png";

export const GiftSection = () => {
  const CustomBox = styled(Box)({
    borderRadius: "25px", // Bordes redondeados
    border: "2px solid #a8a692", // Borde gris
    padding: "10px 20px", // Espaciado interno
    display: "inline-block", // Ajusta el tamaño al contenido
    backgroundColor: "white", // Fondo blanco
    textAlign: "center", // Texto centrado
  });

  return (
    <Box
      sx={{
        height: "25rem",
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
        xs={10}
        direction="column"
        container
        alignContent="center"
        justifyContent="center"
        mr="1.5rem"
      >
        <Grid xs={10}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={2}
          >
            <CardGiftcardOutlinedIcon
              fontSize="large"
              sx={{ width: "15vw", height: "15vw" }}
            />
          </Box>
          <Typography variant="h5" fontWeight="bold">
            Si deseas regalarme algo más que tu hermosa presencia...
          </Typography>
        </Grid>
        <Grid xs={10} mt="1rem">
          <CustomBox>
            <Typography variant="h6" component="div" color="textPrimary">
              Micaela.Ochoa.Babi
            </Typography>
          </CustomBox>
        </Grid>
      </Grid>
    </Box>
  );
};
