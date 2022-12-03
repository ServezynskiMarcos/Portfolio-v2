import { Container, Stack } from "@chakra-ui/react";
import Header from "./Components/Header";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";

function App() {
  return (
    <Container minW={"full"}>
      <Stack spacing={20}>
        <Header />
        <Works />
        <Skills />
      </Stack>
    </Container>
  );
}

export default App;
