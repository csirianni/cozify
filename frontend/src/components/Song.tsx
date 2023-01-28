import { Card, Flex, CardBody, Box, Center, Spacer, Text, Image } from '@chakra-ui/react';

function Song() {
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
                        <Image boxSize='30px' src="/play-button.png" />
                    </Center>
                </Flex>
            </CardBody>
        </Card>
    )
};

export default Song;
