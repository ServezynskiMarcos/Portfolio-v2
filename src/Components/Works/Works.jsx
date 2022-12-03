import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { SliderDate } from "../../assets/slider";

const Works = () => {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("whiteAlpha.900", undefined);
  const textColor = useColorModeValue("secondary", "primary");
  return (
    <Grid
      id={"works"}
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={6}
    >
      {SliderDate?.map((e) => {
        return (
          <Card maxW="md" bg={bgColor}>
            <CardHeader>
              <Stack
                textAlign={"center"}
                fontFamily={"primary"}
                fontSize={"xl"}
                fontWeight={"bold"}
              >
                <Text color={textColor}>{e.tittle}</Text>
              </Stack>
            </CardHeader>
            <CardBody>
              <Text textAlign={"center"} fontFamily={"priamry"} fontSize={"lg"}>
                {e.description}
              </Text>
            </CardBody>
            <Image objectFit="cover" src={e.image} alt={e.tittle} />
            <CardFooter justify="space-evenly">
                <a href={e.repo} target={"_blank"}>
              <Button variant="ghost" w={40}>
                Github
              </Button></a>
              <a href={e.deploy} target={"_blank"}>
                <Button
                  variant="ghost"
                  color={colorMode === "dark" ? "primary" : "secondary"}
                  w={40}
                >
                  Deploy
                </Button>
              </a>
            </CardFooter>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Works;
