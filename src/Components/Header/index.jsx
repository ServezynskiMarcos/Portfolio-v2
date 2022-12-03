import { Icon, Stack, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import Nav from "../Nav";
import Avatar from "./Avatar";
import { RxDoubleArrowUp } from "react-icons/rx";
import { FaMoon, FaSun } from "react-icons/fa";

const index = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      minH={"100vh"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      spacing={{ base: 0, xl: 20 }}
      w={"full"}
      id={"intro"}
    >
      <Stack cursor={'pointer'}>
        <Icon
          onClick={toggleColorMode}
          as={colorMode === "dark" ? FaSun : FaMoon}
        />
      </Stack>
      <Stack marginX={{ lg: 2, xl: 16 }} display={{ base: "none", lg: "flex" }}>
        <Nav />
        <a href="#intro">
          <Icon as={RxDoubleArrowUp} position={"fixed"} bottom={4} left={4} />
        </a>
      </Stack>
      <Stack alignItems={"center"} w={"full"}>
        <Stack w={{ base: "full", xl: "xl" }} spacing={0} textAlign={"center"}>
          <Text
            fontWeight={"bold"}
            fontFamily={"primary"}
            fontSize={{ base: "40px", lg: "60px", xl: "80px" }}
          >
            MARCOS
          </Text>
          <Text
            fontWeight={"bold"}
            fontFamily={"primary"}
            fontSize={{ base: "40px", lg: "60px", xl: "80px" }}
          >
            SERVEZYNSKI
          </Text>
        </Stack>
      </Stack>
      <Avatar />
    </Stack>
  );
};

export default index;
