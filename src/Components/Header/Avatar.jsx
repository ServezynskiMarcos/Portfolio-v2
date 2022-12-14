import { Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import avatarWhite from "../../assets/avatarWhite.png";
import avatarBlackMode from "../../assets/avatarBlackMode.png";
import vector6 from "../../assets/vector6.png";
import vector4 from "../../assets/vector4.png";
import { css } from "@emotion/react";

function Avatar() {
  const { colorMode } = useColorMode();

  return (
    <Stack
      w={"full"}
      h={{ base: "auto", lg: "100vh" }}
      alignItems={"center"}
      justifyContent={"space-between"}
      spacing={{ base: 6, md: 14, lg: 0, xl: 6 }}
    >
      <Image
        src={colorMode === "dark" ? vector4 : vector6}
        position={"absolute"}
        w={"400px"}
        zIndex={0}
      />
      <Image
        src={colorMode === "dark" ? avatarBlackMode : avatarWhite}
        objectFit={"cover"}
        zIndex={1}
      />
      <Text
        fontFamily={"barra"}
        fontSize={"3xl"}
        w={"full"}
        textAlign={{ base: "center", md: "end" }}
        css={css`
            &:hover {
               color: orange
              `}
      >
        Front-End developer
      </Text>
    </Stack>
  );
}
export default Avatar;
