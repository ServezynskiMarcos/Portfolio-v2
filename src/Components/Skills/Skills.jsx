import {
  Icon,
  Image,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { IoLogoNpm } from "react-icons/io";
import {
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTypescript,
  SiPython,
  SiDjango,
} from "react-icons/si";
import { WiStars } from "react-icons/wi";

const Skills = () => {
  const logoColor = useColorModeValue("secondary", "primary");
  const tableColor = useColorModeValue("red", "teal");
  return (
    <Stack
      minH={"100vh"}
      w={"full"}
      justifyContent={"space-between"}
      id={"skills"}
    >
      <Stack alignItems={"center"}>
        <Stack w={{ base: "full", lg: "50%" }}>
          <TableContainer>
            <Table variant="simple" colorScheme={tableColor}>
              <TableCaption>Front-End Technologies</TableCaption>
              <Thead>
                <Tr>
                  <Th>Technologies</Th>
                  <Th isNumeric>
                    <Icon as={IoLogoNpm} w={6} h={6} />
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>React</Td>
                  <Td isNumeric>
                    <Icon as={SiReact} w={4} h={4} color={logoColor} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Redux</Td>
                  <Td isNumeric>
                    <Icon as={SiRedux} w={4} h={4} color={logoColor} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Javascrypt</Td>
                  <Td isNumeric>
                    <Icon as={SiJavascript} w={4} h={4} color={logoColor} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Typescrypt</Td>
                  <Td isNumeric>
                    <Icon as={SiTypescript} w={4} h={4} color={logoColor} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Css</Td>
                  <Td isNumeric>
                    <Icon as={SiCss3} w={4} h={4} color={logoColor} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>ChakraUi - MaterialUi - Bootstrap</Td>
                  <Td isNumeric>
                    <Icon as={WiStars} w={4} h={4} color={logoColor} />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <TableContainer>
            <Table variant="simple" colorScheme={tableColor}>
              <TableCaption>Back-End Technologies</TableCaption>
              <Thead>
                <Tr>
                  <Th>Technologies</Th>
                  <Th isNumeric>
                    <Icon as={IoLogoNpm} w={6} h={6} />
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Javascript</Td>
                  <Td isNumeric>
                    <Icon as={SiJavascript} w={4} h={4} color={logoColor} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Nodejs</Td>
                  <Td isNumeric>
                    <Icon as={SiNodedotjs} w={4} h={4} color={logoColor} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Python</Td>
                  <Td isNumeric>
                    <Icon as={SiPython} w={4} h={4} color={logoColor} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Django</Td>
                  <Td isNumeric>
                    <Icon as={SiDjango} w={4} h={4} color={logoColor} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>SQL</Td>
                  <Td isNumeric>
                    <Icon as={SiPostgresql} w={4} h={4} color={logoColor} />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Skills;
