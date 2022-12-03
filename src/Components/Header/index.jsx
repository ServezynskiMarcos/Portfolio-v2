import { Icon, keyframes, Stack, Text, useColorMode } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { RxDoubleArrowUp } from "react-icons/rx";
import Nav from "../Nav";
import Avatar from "./Avatar";

const index = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const animationKeyframes = keyframes`100% { transform: scale(1) rotate(360deg);}`;
  const animation = `${animationKeyframes} 1s ease-in-out infinite`;

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
      <Stack cursor={"pointer"}>
        <Icon
          onClick={toggleColorMode}
          as={colorMode === "dark" ? FaSun : FaMoon}
          _hover={{ animation }}
          css={css`
          &:hover {
             color: orange;`}
        />
      </Stack>
      <Stack marginX={{ lg: 2, xl: 16 }} display={{ base: "none", lg: "flex" }}>
        <Nav />
        <a href="#intro">
          <Icon
            as={RxDoubleArrowUp}
            position={"fixed"}
            bottom={4}
            left={4}
            css={css`
            &:hover {
               transform: scale(1.2);
               color: orange
              `}
          />
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
