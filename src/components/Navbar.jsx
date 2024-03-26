import { AppShell, Burger, Group, UnstyledButton, ThemeIcon} from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import classes from './MobileNavbar.module.css';

function Navbar() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
      <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
          <ThemeIcon
          variant="gradient"
          size="xl"
          aria-label="Gradient action icon"
          gradient={{ from: 'indigo', to: 'cyan', deg: 258 }}
          >
          <IconHeart  size={30} />
          </ThemeIcon>
            <Group ml="xl" gap={10} visibleFrom="sm">
              <UnstyledButton className={classes.control}>Home</UnstyledButton>
              <UnstyledButton className={classes.control}>Blog</UnstyledButton>
              <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
              <UnstyledButton className={classes.control}>Support</UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={classes.control}>Home</UnstyledButton>
        <UnstyledButton className={classes.control}>Blog</UnstyledButton>
        <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
        <UnstyledButton className={classes.control}>Support</UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main>
      
      </AppShell.Main>
    </AppShell>
  );
}
export default Navbar;