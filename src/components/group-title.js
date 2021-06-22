import { HStack, Text } from "@chakra-ui/react";


export function GroupTitle() {
    return (
    <HStack align="baseline">
        <Text fontSize="2xl" fontWeight="bold">Big text</Text>
        <Text fontSize="md" color="gray.500" >Small text</Text>
    </HStack>
    );
}