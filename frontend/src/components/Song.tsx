import { Card, Flex, CardBody, Box, Center, Spacer, Text, Image} from '@chakra-ui/react';
import {useState} from "react"

let audio = new Audio("http://streaming.tdiradio.com:8000/house.mp3")

function Song() {

    const [play, setPlay] = useState(false); // Default state is false
    const [buttonSource, setButtonSource] = useState("/play-button.png")

    function handleClick () {

        if (!play){ // Start playing audio
            setButtonSource("/stop-button.png")
            audio.play()

        } else { // Stop playing audio
            setButtonSource("/play-button.png")
            audio.pause()
        }

        setPlay(!play)
    }

    return (
        <Card width="25%">
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
