import {
  Cards,
  Profile,
  PreviewClass,
  NextEvents,
  Gallery,
  Code,
  Navbar,
  NavigationHome,
} from '@/components';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const Home = () => {
  const [opened] = useDisclosure();
  return (
    <AppShell>
      <Navbar />

      <AppShell.Main>
        <NavigationHome />
      </AppShell.Main>
    </AppShell>
  );
};

export default Home;
