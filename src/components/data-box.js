import React from 'react';
import {
    Box,
    Image,
    Flex,
    Heading,
    Text,
    Link,
    HStack,
    Icon,
} from '@chakra-ui/react'
import { 
    GoIssueOpened,
    GoRepoForked,
    GoStar 
} from 'react-icons/go'
import { ExternalLinkIcon } from '@chakra-ui/icons';

export function DataBox(props) {
    const {
        link,
        linkTitle,
        profilePic,
        userName
      } = props;

    return (
        <Box bg='white' p={15} borderRadius={5} borderWidth={1}>
            <Flex alignItems='center'>
                <Image
                src={profilePic}
                w={50}
                h='100%'
                borderRadius={5}
                ></Image>

                <Box ml={3}>
                    <Heading fontSize={16} >{userName}</Heading>
                    <Text fontSize={13} >View profile</Text>
                </Box>
            </Flex>

            <Box marginTop={10} >
                <Link 
                fontSize={20} 
                fontWeight='bold'
                color='blue.600'
                href={link}
                // href="https://www.nytimes.com/2010/05/30/books/excerpt-introduction-second-sex.html" 
                isExternal>
                    {linkTitle}
                </Link>
                <Text
                fontSize={13}
                color='gray.700'
                >
                    Subtitle
                </Text>
            </Box>

            <Text
            color='gray.800'
            mt={7}
            fontSize={13}>
                This is a description. Out of all the descriptions I've ever seen, this is 
                the best one.
            </Text>

            <HStack 
            mt={10}>
                <Flex align='flex-start' >
                    <Icon as={GoStar} ></Icon>
                    <Link 
                    ml={1}
                    fontSize={13}
                    _hover={{ textDecor: 'none' }}>8456</Link>
                </Flex>

                <Flex align='flex-start' >
                    <Icon as={GoRepoForked} ></Icon>
                    <Link 
                    ml={1}
                    fontSize={13}
                    _hover={{ textDecor: 'none' }}>354</Link>
                </Flex>

                <Flex align='flex-start' >
                    <Icon as={GoIssueOpened} ></Icon>
                    <Link 
                    ml={1}
                    fontSize={13}
                    _hover={{ textDecor: 'none' }}>78</Link>
                </Flex>
            </HStack>
            
        </Box>
    );
}
