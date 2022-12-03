import {
  Icon,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.png";
import logoWhite from "../../assets/logoWhite.png";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
const Footer = () => {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("whiteAlpha.900", "gray.700");
  const textColor = useColorModeValue("gray.900","whiteAlpha.900");
  const iconColor = useColorModeValue("secondary", "primary");
  return (
    <Stack
      h={"40vh"}
      bg={bgColor}
      w={"full"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        w={{ base: "50%", md: "100%" }}
        p={8}
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-evenly"}
      >
        <Stack alignItems={"center"} direction={"row"} spacing={4}>
          <Icon as={AiFillGithub} color={iconColor} />
          <a href="https://github.com/ServezynskiMarcos" Target="BLANK">
            <Text color={textColor} fontFamily={"primary"} fontSize={"xl"}>
              GitHub
            </Text>
          </a>
        </Stack>
        <Stack alignItems={"center"} direction={"row"} spacing={4}>
          <Icon as={AiFillLinkedin} color={iconColor} />
          <a
            href="https://www.linkedin.com/in/marcos-servezynski/"
            Target="BLANK"
          >
            <Text color={textColor} fontFamily={"primary"} fontSize={"xl"}>
              LinkedIn
            </Text>
          </a>
        </Stack>
        <Stack display={{ base: "none", md: "flex" }}>
          <Image src={colorMode === "dark" ? logo : logoWhite} w={"140px"} />
        </Stack>
        <Stack alignItems={"center"} direction={"row"} spacing={4}>
          <Icon as={AiFillInstagram} color={iconColor} />
          <a href="https://www.instagram.com/m.servezynski/" Target="BLANK">
            <Text color={textColor} fontFamily={"primary"} fontSize={"xl"}>
              Instagram
            </Text>
          </a>
        </Stack>
        <Stack alignItems={"center"} direction={"row"} spacing={4}>
          <Icon as={IoMdDownload} color={iconColor} />
          <a href="https://drive.google.com/uc?id=1NvdF4nEV77bi5kEF3_5V7hFxorNvgZlk&export=download">
            <Text color={textColor} fontFamily={"primary"} fontSize={"xl"}>
              CV
            </Text>
          </a>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
