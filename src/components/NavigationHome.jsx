import { Flex, Button } from "@mantine/core";

const NavigationHome = () => {
    return(
    <>
    <Flex
      mih={60}
      bg="rgba(0, 0, 0, .3)"
      gap="lg"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Button variant="filled" size="xl" radius="xl">Button1</Button>
      <Button variant="filled" size="xl" radius="xl">Button2</Button>
      <Button variant="filled" size="xl" radius="xl">Button3</Button>
    </Flex>
    </>

    )
}
export default NavigationHome;