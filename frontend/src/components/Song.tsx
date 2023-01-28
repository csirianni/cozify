import { Card, Flex, CardBody, Box, Center, Spacer, Text, Image } from '@chakra-ui/react';

function Song() {
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
                            <Image boxSize='70px' src="/play-button.png" />
                        </Center>
                    </Flex>
                </CardBody>
            </Card>
        </Center>
    )
};

export default Song;
