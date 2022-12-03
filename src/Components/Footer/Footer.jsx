import { Image, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.png"
import logoWhite from "../../assets/logoWhite.png"
const Footer = () => {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("whiteAlpha.900", "gray.700");
  return (
    <Stack
      direction={"row"}
      h={"40vh"}
      bg={bgColor}
      minW={"100%"}
      justifyContent={"space-around"}
      alignItems={'center'}
    >
      <Stack>
        <Text fontFamily={'primary'} fontSize={'xl'}>GitHub</Text>
        <Text fontFamily={'primary'} fontSize={'xl'}>LinkedIn</Text>
      </Stack>
      <Stack>
        <Image src={colorMode === "dark" ? logo : logoWhite} w={"140px"}/>
      </Stack>
      <Stack>
        <Text fontFamily={'primary'} fontSize={'xl'}>Instagram</Text>
        <Text fontFamily={'primary'} fontSize={'xl'}>Descarga mi CV</Text>
      </Stack>
    </Stack>
  );
};

export default Footer;
