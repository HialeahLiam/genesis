import React from "react";
import { Flex, Select} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  ChevronDownIcon,
  Box,
  Stack,
  Icon
} from "@chakra-ui/react"
import languages from '../data/languages.json'
import {
  FaTable,
  FaList
} from 'react-icons/fa'
import { CalendarIcon } from "@chakra-ui/icons";

export function Filters(props) {

  return (
    
    <Stack isInline alignItems='center' >
      <Select>
        {languages.map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
      </Select>


      <Menu>
        <MenuButton
          as={Button}
          bg="white"
          borderWidth={1}
          px="15px"
          fontWeight={400}
          minWidth="max"
        >
          Actions
          <CalendarIcon ml='5px'></CalendarIcon>
        </MenuButton>
        <MenuList>
          <MenuItem >Daily</MenuItem>
          <MenuItem >Weekly</MenuItem>
          <MenuItem >Monthly</MenuItem>
          <MenuItem >Yearly</MenuItem>
        </MenuList>
      </Menu>

      <Stack h='100%' isInline spacing={0} borderRadius={5} borderWidth={1} alignItems='center'>
        <Button bg='white' fontWeight='400' borderLeftRadius={4} borderRightRadius='0' leftIcon={<Icon as={FaTable}></Icon>}>Grid</Button>
        <Button bg='white' fontWeight='400' borderRightRadius={4} borderLeftRadius='0' leftIcon={<Icon as={FaList}></Icon>}>List</Button>
      </Stack>
    </Stack>
  );
}


