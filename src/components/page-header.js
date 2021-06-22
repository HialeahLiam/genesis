import { Brand } from "./brand";
import { NavButtons } from "./nav-buttons";
import { Flex} from "@chakra-ui/react";

export function PageHeader() {
    return (
    <Flex  justify="space-between" align="center" p="15">
        <Brand /> 
        <NavButtons />
    </Flex>
    );
}