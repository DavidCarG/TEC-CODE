import { Card, Text, BackgroundImage, Box } from "@mantine/core";

const Gallery = () => {
  return (
    <>
      <BackgroundImage
        className="card fondo"
        src="https://img.impactotic.co/wp-content/uploads/2022/02/05181642/Concurso-Nacional-Programacion-colegios-2022-portada-960x720.jpg.webp"
      >
        <Card>
          <Box padding="xl">
            <Text align="center">Gallery</Text>
          </Box>
        </Card>
      </BackgroundImage>
    </>
  );
};

export default Gallery;
