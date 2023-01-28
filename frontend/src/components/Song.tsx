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
        console.log("Clicked!")
    }

    return (
        <Center>
            <Card width="50%">
                <CardBody>
                    <Flex>
                        <Box>
                            <Text fontSize="2xl">Blue in Green (feat. John Coltrane & Bill Evans)</Text>
                            <Text fontSize="lg">Miles Davis</Text>
                            <Text fontSize="md">5:37</Text>
                        </Box>
                        <Spacer />
                        <Center>
                            <Image onClick={handleClick} boxSize='70px' src={buttonSource} />
                        </Center>
                    </Flex>
                </CardBody>
            </Card>
        </Center>
    )
};

export default Song;
