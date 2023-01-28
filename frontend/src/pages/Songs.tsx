import { Box, Flex, VStack, Text, } from '@chakra-ui/react';
import Song from '../components/Song';

function Songs() {
    return (
        <Flex backgroundSize="cover" height="100vh" backgroundImage="/songs-bg.png">
            <Flex width="50%" justifyContent="center" alignItems="center">
                <VStack width="80%">
                    <Text fontSize="5xl" color="white" marginBottom="10">Choose a cozy song.</Text>
                    <VStack width="100%">
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                    </VStack>
                </VStack>
            </Flex>
        </Flex>
    )
}

export default Songs;