import { Image, Grid, Paper, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const NavigationHome = () => {
  return (
    <>
      <Grid>
        <Grid.Col span={9}>
          <Carousel
            withIndicators
            height={500}
            slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
            slideGap={{ base: 0, sm: 0 }}
            loop
            align="start"
          >
            <Carousel.Slide>
              <Image
                h={500}
                w="50%"
                radius="md"
                src={
                  'https://cdn.pixabay.com/photo/2018/03/29/20/50/wildlife-3273640_1280.jpg'
                }
              ></Image>
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                h={500}
                w="50%"
                radius="md"
                src={
                  'https://cdn.pixabay.com/photo/2017/06/13/09/06/raccoon-2398128_640.jpg'
                }
              ></Image>
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                h={500}
                w="50%"
                radius="md"
                src={
                  'https://cdn.pixabay.com/photo/2019/09/24/15/01/raccoon-4501494_640.jpg'
                }
              ></Image>
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                h={500}
                w="50%"
                radius="md"
                src={
                  'https://cdn.pixabay.com/photo/2017/08/03/14/42/nature-2576639_640.jpg'
                }
              ></Image>
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                h={500}
                w="50%"
                radius="md"
                src={
                  'https://cdn.pixabay.com/photo/2019/09/16/15/03/raccoon-4481257_640.jpg'
                }
              ></Image>
            </Carousel.Slide>
          </Carousel>
        </Grid.Col>

        <Grid.Col span={3}>
          <Paper shadow="xs" p="xl">
            <Text>Paper is the most basic ui component</Text>
            <Text>
              Use it to create cards, dropdowns, modals and other components
              that require background with shadow
            </Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  );
};
export default NavigationHome;
