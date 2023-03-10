import { Box, Flex, VStack, Text, } from '@chakra-ui/react';
import Song from '../components/Song';

function Songs() {
    return (
        <Flex backgroundSize="cover" height="100vh" backgroundImage="songs-bg.png">
            <Flex width="50%" justifyContent="center" alignItems="center">
                <VStack width="80%">
                    <Text fontSize="5xl" color="white" marginBottom="10">Choose a cozy song.</Text>
                    <VStack width="100%">
                        <Song title="Cozy #1" duration="0:49" url="https://audio.jukehost.co.uk/GmWSEIK82RiofZ9f6FuaajgJl47ZQ9Z6" />
                        <Song title="Cozy #2" duration="0:48" url="https://audio.jukehost.co.uk/I6pGuT884650qRmjvvygs3QtVhr6kaFl" />
                        <Song title="Cozy #3" duration="0:37" url="https://audio.jukehost.co.uk/eQeIVdsVPLdqPP0kRNNkXUmh0icXeAnv" />
                        <Song title="Cozy #4" duration="0:43" url="https://audio.jukehost.co.uk/7mhgd5lWbeZKvqKb02YTb9ej8PE8KvhW" />
                        <Song title="Cozy #5" duration="0:49" url="https://audio.jukehost.co.uk/aQvQaE5PVd9puf56QliwWDyyXxVNFJ0b" />
                    </VStack>
                </VStack>
            </Flex>
        </Flex>
    )
}

export default Songs;