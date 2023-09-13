import { Box, Image, Grid, Flex } from "@chakra-ui/react";
import cred1 from '../Assets/cred1.png';
import cred2 from '../Assets/cred2.png';
import cred3 from '../Assets/cred3.png';
import cred4 from '../Assets/cred4.png';

function ImageSection() {
  return (
    <Box py="100px" width="100%" bg="#d9e7ff">
      <Flex justifyContent="center" alignItems="center" height="100%">
        <Grid
          width={["100%", "max-content", "1000px"]}  // Adjusts the width based on screen size
          templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} // Adjusts grid layout based on screen size
          gap={4}  // Provides space between the images
          justifyItems="center"  // Centers items horizontally
          alignItems="center"    // Centers items vertically
        >
          <Image src={cred1} maxW="180px" alt="Cred 1" />
          <Image src={cred2} maxW="180px" alt="Cred 2" />
          <Image src={cred3} maxW="180px" alt="Cred 3" />
          <Image src={cred4} maxW="180px" alt="Cred 4" />
        </Grid>
      </Flex>
    </Box>
  );
}

export default ImageSection;
