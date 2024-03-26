import { useState } from 'react';
import {
  AppShell,
  Burger,
  Group,
  UnstyledButton,
  ThemeIcon,
  useMantineColorScheme,
} from '@mantine/core';
import { IconHeart, IconSun, IconMoon } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import classes from './MobileNavbar.module.css';

function Navbar() {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const handleColorSchemeChange = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
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
              <IconHeart size={30} />
            </ThemeIcon>
            <Group ml="xl" gap={20} visibleFrom="sm">
              <UnstyledButton className={classes.control}>
                Recursos
              </UnstyledButton>
              <UnstyledButton className={classes.control}>Fotos</UnstyledButton>
              <UnstyledButton className={classes.control}>
                Avisos
              </UnstyledButton>
              <UnstyledButton className={classes.control}>
                Algoritmos
              </UnstyledButton>
              <UnstyledButton onClick={handleColorSchemeChange}>
                {colorScheme === 'dark' ? <IconMoon /> : <IconSun />}
              </UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={classes.control}>Recursos</UnstyledButton>
        <UnstyledButton className={classes.control}>Fotos</UnstyledButton>
        <UnstyledButton className={classes.control}>Avisos</UnstyledButton>
        <UnstyledButton className={classes.control}>Algoritmos</UnstyledButton>
        <UnstyledButton onClick={handleColorSchemeChange}>
          {colorScheme === 'dark' ? <IconMoon /> : <IconSun />}
        </UnstyledButton>
      </AppShell.Navbar>
    </AppShell>
  );
}

export default Navbar;
