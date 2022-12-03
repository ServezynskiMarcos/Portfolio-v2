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
function Contact() {
  const [state, handleSubmit] = useForm("mpznqblo");
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("whiteAlpha.900", "gray.700");
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
              <Button type="submit" disabled={state.submitting}>
                Submit
              </Button>
            </Stack>
            {state.succeeded ? <Text>¡Thanks for your interest!</Text> : null}
          </form>
        </Stack>
      </Stack>
      <Stack
        position="absolute"
        left={0}
        top={{ base: "62vh", lg: "51vh", xl: "61vh" }}
      >
        <Image
          src={colorMode === "dark" ? torsoBlack : torsoWhite}
          w={{ base: "250px", lg: "300px" }}
        />
      </Stack>
    </Stack>
  );
}
export default Contact;
