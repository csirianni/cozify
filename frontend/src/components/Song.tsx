import { Card, Flex, CardBody, Box, Center, Spacer, Text, Image } from '@chakra-ui/react';
import { useState, useMemo } from "react"
import internal from 'stream';

interface SongProps {
    title: string,
    duration: string,
    url: string
}

function Song({ title, duration, url }: SongProps) {

    const [play, setPlay] = useState(false); // Default state is false
    const [buttonSource, setButtonSource] = useState("/play-button.png")

    // useMemo used to fix pause not pausing the audio
    // https://stackoverflow.com/questions/68295443/audio-pause-is-not-working-after-audio-play-in-react
    const audio = useMemo(() => new Audio(url), []);

    function handleClick() {
        if (!play) { // Start playing audio
            setButtonSource("/stop-button.png")
            audio.play()

        } else { // Stop playing audio
            setButtonSource("/play-button.png")
            audio.pause()
            audio.currentTime = 0
        }

        setPlay(!play)
    }

    return (
        <Card width="100%">
            <CardBody>
                <Flex>
                    <Box>
                        <Text fontSize="xl">{title}</Text>
                        <Text fontSize="md">{duration}</Text>
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
