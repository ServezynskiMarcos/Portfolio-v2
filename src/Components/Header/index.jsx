import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import Nav from "../Nav";
import Avatar from "./Avatar";

const index = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      minH={"100vh"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      spacing={{ base: 0, xl: 20 }}
      w={"full"}
    >
      <Stack marginX={{ lg: 2, xl: 16 }} display={{ base: "none", lg: "flex" }}>
        <Nav />
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
