import { Card, Text, BackgroundImage, Box } from '@mantine/core';

const Code = () => {
  return (
    <>
      <BackgroundImage
        className="card fondo"
        src="https://www.yusufaytas.com/wp-content/uploads/2022/03/hindex_leetcode.jpg"
      >
        <Card>
          <Box padding="xl">
            <Text align="center">Code</Text>
          </Box>
        </Card>
      </BackgroundImage>
    </>
  );
};

export default Code;
