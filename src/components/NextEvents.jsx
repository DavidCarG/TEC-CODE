import { Text, BackgroundImage, Box, Card } from "@mantine/core";

const NextEvents = () => {
  return (
    <>
      <BackgroundImage
        className="card"
        src="https://cdn.bhdw.net/im/abstract-minimalist-green-and-gold-lightwave-august-2023-calendar-wallpaper-119628_w635.webp"
      >
        <Card>
          <Box padding="xl">
            <Text align="center" size="xl" weight={700}>
              Próximos eventos
            </Text>
          </Box>
        </Card>
      </BackgroundImage>
    </>
  );
};

export default NextEvents;
