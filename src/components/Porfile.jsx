
import '../styles/App.css';
import { Card, Avatar, Text } from '@mantine/core';

export default function Porfile() {
    return (
        <>
            <Card className='card'>
                <Card.Section className="avatar"> 
                    <Avatar variant="filled" radius="sm" size="xs" src="" color="violet" />
                </Card.Section>
                <Card.Section>
                    <Text>Carlos</Text>
                </Card.Section>

            </Card>
        </>
    );
}