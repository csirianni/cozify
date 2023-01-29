import { Box, Flex, VStack, Text, } from '@chakra-ui/react';
import Song from '../components/Song';

function Songs() {
    return (
        <Flex backgroundSize="cover" height="100vh" backgroundImage="/songs-bg.png">
            <Flex width="50%" justifyContent="center" alignItems="center">
                <VStack width="80%">
                    <Text fontSize="5xl" color="white" marginBottom="10">Choose a cozy song.</Text>
                    <VStack width="100%">
                        <Song title="Cozy #1" duration="0:49" url="http://streaming.tdiradio.com:8000/house.mp3" />
                        <Song title="Cozy #2" duration="0:48" url="http://streaming.tdiradio.com:8000/house.mp3" />
                        <Song title="Cozy #3" duration="0:37" url="http://streaming.tdiradio.com:8000/house.mp3" />
                        <Song title="Cozy #4" duration="0:43" url="http://streaming.tdiradio.com:8000/house.mp3" />
                        <Song title="Cozy #5" duration="0:49" url="http://streaming.tdiradio.com:8000/house.mp3" />
                    </VStack>
                </VStack>
            </Flex>
        </Flex>
    )
}

export default Songs;