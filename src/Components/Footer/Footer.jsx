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
import { css } from "@emotion/react";
const Footer = () => {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("whiteAlpha.900", "gray.700");
  const textColor = useColorModeValue("gray.900", "whiteAlpha.900");
  const iconColor = useColorModeValue("secondary", "primary");
  return (
    <Stack h={"36vh"} bg={bgColor} w={"full"} justifyContent={"center"}>
      <Stack
        w={"100%"}
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-evenly"}
        alignItems={{ base: "none", md: "center" }}
        p={{base:2, md:0}}
      >
        <a href="https://github.com/ServezynskiMarcos" Target="BLANK">
          <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Text
              color={textColor}
              css={css`
            &:hover { 
               color: orange
              `}
              fontFamily={"primary"}
              fontSize={"xl"}
            >
              GitHub
            </Text>
            <Icon as={AiFillGithub} color={iconColor} />
          </Stack>
        </a>
        <a
          href="https://www.linkedin.com/in/marcos-servezynski/"
          Target="BLANK"
        >
          <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Text
              color={textColor}
              css={css`
            &:hover { 
               color: orange
              `}
              fontFamily={"primary"}
              fontSize={"xl"}
            >
              LinkedIn
            </Text>
            <Icon as={AiFillLinkedin} color={iconColor} />
          </Stack>
        </a>
        <Stack display={{ base: "none", md: "flex" }}>
          <Image src={colorMode === "dark" ? logo : logoWhite} w={"140px"} />
        </Stack>
        <a href="https://www.instagram.com/m.servezynski/" Target="BLANK">
          <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Text
              color={textColor}
              css={css`
              &:hover { 
                color: orange
                `}
              fontFamily={"primary"}
              fontSize={"xl"}
            >
              Instagram
            </Text>
            <Icon as={AiFillInstagram} color={iconColor} />
          </Stack>
        </a>
        <a href="https://drive.google.com/uc?id=1NvdF4nEV77bi5kEF3_5V7hFxorNvgZlk&export=download">
          <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Text
              color={textColor}
              css={css`
              &:hover { 
                color: orange
              `}
              fontFamily={"primary"}
              fontSize={"xl"}
            >
              CV
            </Text>
            <Icon as={IoMdDownload} color={iconColor} />
          </Stack>
        </a>
      </Stack>
    </Stack>
  );
};

export default Footer;
