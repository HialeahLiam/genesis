import { Button, Stack} from "@chakra-ui/react";

export function NavButtons() {
    return(
    <Stack  direction="row" spacing="5px">
        <Button colorScheme="whiteAlpha" color="blackAlpha">One</Button>
        <Button colorScheme="telegram">Two</Button>
        <Button colorScheme="teal">Three</Button>
    </Stack>
    );
}