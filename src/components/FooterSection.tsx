import { Box, Grid, Typography } from "@mui/material";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

export const FooterSection = () => {
  return (
    <Box
      sx={{
        height: "10rem",
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
        mb="2rem"
      >
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <AutoAwesomeOutlinedIcon
            fontSize="large"
            sx={{ width: "15vw", height: "15vw" }}
          />
        </Box>
        <Grid xs={10}>
          <Typography variant="h5" fontWeight="bold">
            Una gran noche junto a vos!!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
