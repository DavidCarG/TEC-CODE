import { Button, Card } from '@mantine/core';
import '../styles/Navbar.css';
export function Navbar() {

    return (
      <Card padding="md" className='navbar'>
        <div className="left">
          <Button>Tec Code </Button>
        </div>
        <div className="right">
          <Button>Sing In</Button>
          <Button>About</Button>
        </div>
      </Card>
    );
}