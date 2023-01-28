import { Card, Flex, CardBody, Box, Center, Spacer, Text, Image} from '@chakra-ui/react';
import {useState} from "react"

function Song() {

    const [play, setPlay] = useState(false); // Default state is false
    const [buttonSource, setButtonSource] = useState('')

    function handleClick () {

        if (!play){ // Playing audio
            setButtonSource("/stop-button.png")

        } else { // Stopping audio
            setButtonSource("/play-button.png")
        }

        setPlay(!play)
    }

    return (
        <Card width="100%">
            <CardBody>
                <Flex>
                    <Box>
                        <Text fontSize="md">Blue in Green (feat. John Coltrane)</Text>
                        <Text fontSize="sm">Miles Davis</Text>
                        <Text fontSize="xs">5:37</Text>
                    </Box>
                    <Spacer />
                    <Center>
                        <Image onClick={handleClick} boxSize='70px' src={buttonSource} />
                    </Center>
                </Flex>
            </CardBody>
        </Card>
    )
};

export default Song;
