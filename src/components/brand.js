import React from 'react'
import { Box, Image, Flex, Heading, Text} from "@chakra-ui/react";

export function Brand() {
    return (
    <Flex align="center">
        <Image src="/camus.png" maxH="100px"/>
        <Box ml="10px">
            <Heading fontSize="3xl">The Best Website ... Ever</Heading>
            <Text>Glad to have you.</Text>
        </Box>
    </Flex>
    );
}