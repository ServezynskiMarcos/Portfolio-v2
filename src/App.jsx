import { Container, Icon, Stack } from "@chakra-ui/react";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";


function App() {
  
  return (
    <Stack spacing={16}>
      <Container minW={"full"}>
        <Stack spacing={20} alignItems="center">
          <Header />
          <Works />
          <Skills />
          <Contact />
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
}

export default App;
