import { Center, Text } from '@chakra-ui/react';
import Song from '../components/Song';
import StartButton from '../components/StartButton';

function Home() {
    return (
        <>
            <Center>
                <Text fontSize="3xl">Welcome to <strong>Cozify</strong></Text>
            </Center>
            <Center>
                <StartButton />
            </Center>
        </>
    )
}

export default Home;