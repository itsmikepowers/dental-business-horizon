import React, { useState, useEffect } from 'react';
import { Box, Text, Center } from "@chakra-ui/react";

// Images
import aboutImage from '../Assets/about.png';
import patientsImage from '../Assets/patients.jpg';
import teamImage from '../Assets/team.jpg';
import treatmentsImage from '../Assets/treatment.jpg';
import contactImage from '../Assets/contact.jpg';

const imageMapping = {
  about: aboutImage,
  patients: patientsImage,
  team: teamImage,
  treatments: treatmentsImage,
  contact: contactImage,
};

const Topic = ({ title = "About Us", imageName = "about" }) => {
  const [scrollY, setScrollY] = useState(0);
  const backgroundImage = imageMapping[imageName];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const parallaxShift = scrollY * 0.5; // Adjust the multiplier for more or less shift

  const bgProps = {
    bgImage: `url(${backgroundImage})`,
    bgPosition: { base: "center", md: `center ${-100 - parallaxShift}px` },
    bgRepeat: "no-repeat",
    bgSize: { base: "100% auto", sm: "100% auto", md: "100% auto", lg: "100% auto" }
  };

  return (
    <Box
      w="100%"
      h={{ base: "30vh", sm: "40vh", md: "50vh" }}
      {...bgProps}
      position="relative"
      zIndex="1"
    >
      <Box
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        bgColor="rgba(0, 0, 0, 0.5)"
        zIndex="1"
      />
      <Center h="100%">
        <Box zIndex="20">
          <Text 
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }} 
            fontWeight="bold" 
            color="white" 
            textAlign="center"
          > 
            {title}
          </Text>
        </Box>
      </Center>
    </Box>
  );
}

export default Topic;
