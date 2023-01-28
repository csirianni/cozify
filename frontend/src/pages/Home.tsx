import { Box, VStack, Center, Flex, Text, Container } from '@chakra-ui/react';
import StartButton from '../components/StartButton';

function Home() {
    return (
        <Flex alignItems="center" justifyContent="center" height="100vh" backgroundImage="home-bg.png">
            <VStack>
                <Box>
                    <Text as="span" color="white" fontSize="6xl">Welcome to </Text>
                    <Text as="span" color="#443737" fontSize="6xl"><strong>Cozify</strong></Text>
                </Box>
                <StartButton />
            </VStack>
        </Flex>
    )
}

export default Home;