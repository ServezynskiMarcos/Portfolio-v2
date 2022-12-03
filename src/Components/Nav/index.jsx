import {
  Button,
  Icon,
  Slider,
  SliderTrack,
  Stack,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";

const index = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Stack alignItems={"center"} h={"100vh"} justifyContent={"center"}>
      <Stack>
        <Icon
          onClick={toggleColorMode}
          as={colorMode === "dark" ? FaSun : FaMoon}
        />
      </Stack>
      <Stack spacing={0} w={22} alignItems={"center"}>
        <Tooltip label="Intro" placement="right" variant={"solid"}>
          <Button variant={"unstyled"}>
            <Icon as={BsFillCircleFill} w={3} />
          </Button>
        </Tooltip>

        <Slider orientation="vertical" minH={16} isDisabled>
          <SliderTrack w={"2px"}></SliderTrack>
        </Slider>

        <Tooltip label="Work" placement="right" variant={"solid"}>
          <a href="#works">
            <Button variant={"unstyled"}>
              <Icon as={BsFillCircleFill} w={2} />
            </Button>
          </a>
        </Tooltip>

        <Slider defaultValue={0} orientation="vertical" minH={16} isDisabled>
          <SliderTrack w={"2px"}></SliderTrack>
        </Slider>
        <a href="#skills">
          <Tooltip label="Skills" placement="right" variant={"solid"}>
            <Button variant={"unstyled"}>
              <Icon as={BsFillCircleFill} w={2} />
            </Button>
          </Tooltip>
        </a>
        <Slider defaultValue={0} orientation="vertical" minH={16} isDisabled>
          <SliderTrack w={"2px"}></SliderTrack>
        </Slider>
        <a href="#contact">
          <Tooltip label="Contact Me" placement="right" variant={"solid"}>
            <Button variant={"unstyled"}>
              <Icon as={BsFillCircleFill} w={2} />
            </Button>
          </Tooltip>
        </a>
      </Stack>
    </Stack>
  );
};

export default index;
