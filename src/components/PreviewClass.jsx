import { Card, Text, BackgroundImage, Box } from '@mantine/core';

const PreviewClass = () => {
  return (
    <>
      <BackgroundImage
        className="card fondo"
        src="https://learn.microsoft.com/es-es/visualstudio/debugger/media/get-started-step-over-cpp.png?view=vs-2022"
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

export default PreviewClass;
