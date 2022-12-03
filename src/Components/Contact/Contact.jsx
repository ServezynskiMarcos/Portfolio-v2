import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Button,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import torsoBlack from "../../assets/torsoBlack.png";
import torsoWhite from "../../assets/torsoWhite.png";
import { css } from "@emotion/react";
function Contact() {
  const [state, handleSubmit] = useForm("mpznqblo");
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("whiteAlpha.900", "gray.700");
  const alertColor = useColorModeValue("secondary", "primary");
  const textColor = useColorModeValue("white", "gray.900");
  return (
    <Stack
      id="contact"
      w={"full"}
      h={"100vh"}
      position="relative"
      paddingY={{ base: 12, lg: 20 }}
      paddingX={{ base: 0, lg: 20 }}
    >
      <Stack alignItems={"center"}>
        <Stack
          bg={bgColor}
          w={{ base: "full", lg: "50%" }}
          p={4}
          borderRadius={20}
        >
          <form onSubmit={handleSubmit}>
            <Stack marginBottom={{ base: 8, lg: 16 }}>
              <Text
                htmlFor="email"
                textAlign={"center"}
                fontFamily={"secondary"}
                fontSize={"3xl"}
              >
                Contact Me
              </Text>
            </Stack>
            <FormLabel>Your email</FormLabel>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <FormLabel>Leave me a message</FormLabel>
            <Input id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Stack alignItems={"center"} marginTop={{ base: 8, lg: 16 }}>
              <Button
                type="submit"
                disabled={state.submitting}
                css={css`
            &:hover { 
               color: orange
              `}
              >
                Submit
              </Button>
            </Stack>
            {state.succeeded ? (
              <Stack
                textAlign={"center"}
                bg={alertColor}
                p={2}
                borderRadius={8}
                marginTop={4}
              >
                <Text fontFamily={"primary"} fontSize={'lg'} color={textColor} fontWeight={"bold"}>¡Thanks for your interest!</Text>
              </Stack>
            ) : null}
          </form>
        </Stack>
      </Stack>
      <Stack position="absolute" left={0} bottom="-16">
        <Image
          src={colorMode === "dark" ? torsoBlack : torsoWhite}
          w={{ base: "250px", lg: "300px" }}
        />
      </Stack>
    </Stack>
  );
}
export default Contact;
