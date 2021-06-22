import {
    Flex,
    Box,
    SimpleGrid,
    Button
} from "@chakra-ui/react";
import { DataBox } from "./components/data-box";
import { Filters } from "./components/filters";
import { GroupTitle } from "./components/group-title";
import { PageHeader } from "./components/page-header";

export function Feed() {
    return (
    <Box  maxW="1200px" mx="auto">
        <PageHeader />

        <Flex align='center' justify="space-between" mb={5} >
            <GroupTitle />  
            <Filters />
        </Flex>

        <SimpleGrid columns={3} spacing={15}>

            <DataBox 
            profilePic="/simone.jpg" 
            link="https://www.nytimes.com/2010/05/30/books/excerpt-introduction-second-sex.html"
            linkTitle="I'm in the Times!!"
            userName='SD_Bevy'
            ></DataBox>

            <DataBox 
            profilePic="/sartre.jpg" 
            link="https://www.newyorker.com/magazine/2005/09/26/stand-by-your-man"
            linkTitle="my love life"
            userName='SartyParty'
            ></DataBox>
            
            <DataBox 
            profilePic="/russell.jpg" 
            link="https://www.youtube.com/watch?v=xL_sMXfzzyA"
            linkTitle="check me out on youtube!"
            userName='OxfordRuss'
            ></DataBox>

            <DataBox 
            profilePic="/wittgenstein.jpg" 
            link="https://www.amazon.com/Ludwig-Wittgenstein/e/B000APXRL4"
            linkTitle="Buy my Books"
            userName='GetWittyWiddit'
            ></DataBox>

            </SimpleGrid>

            <Flex justify='center' my={10}>
                <Button 
                bg='blue.400'
                color='white'>Load Next Group</Button>
            </Flex>

    </Box>
    
    );
}