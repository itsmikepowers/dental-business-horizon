import React from 'react';
import { Box, Text, VStack, Heading, Image } from "@chakra-ui/react";
import { useInView } from 'react-intersection-observer';
import room from '../Assets/room.jpeg';
import { useSelector } from 'react-redux';

const Patients = () => {
  const companyName = useSelector((state) => state.companyName);

  const [leftRef, leftInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [rightRef, rightInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 200  // delay can be adjusted based on your needs
  });

  const slideInStyle = {
    transform: leftInView ? 'translateX(0)' : 'translateX(-100%)',
    opacity: leftInView ? 1 : 0,
    transition: 'transform 1s ease-out, opacity 2s ease-out'
  };

  const fadeInStyle = {
    opacity: rightInView ? 1 : 0,
    transition: 'opacity 2s ease-out'
  };

  return (
    <Box maxWidth="1200px" margin="0 auto" padding="4" borderRadius="md">
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}  // Changed to column for mobile
        padding="4"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Left Section */}
        <VStack 
          ref={leftRef}
          style={slideInStyle}
          alignItems="start" 
          spacing="4" 
          flex="1" 
          paddingRight={{ base: "0", md: "4" }}
        >
          <Heading size={{ base: "lg", md: "xl" }}>What To Expect On Your First Visit</Heading>
          <Box 
              width="100px"
              height="4px" 
              backgroundColor="blue.500" 
              marginBottom="3"
          />
          <Text fontSize={{ base: "md", md: "xl" }} fontFamily="Open Sans, sans-serif">
            At your first visit to {companyName}, you're immediately met with a team deeply dedicated to dental excellence. Every interaction is infused with professionalism, ensuring you're not just another patient, but a valued member of our dental family.
          </Text>
          <Text fontSize={{ base: "md", md: "xl" }} fontFamily="Open Sans, sans-serif">
            By the time your visit concludes, you'll leave with a profound sense of confidence and a clear roadmap for your oral health journey. Your dental well-being is our utmost priority, and it shows in every facet of our care.
          </Text>
        </VStack>

        {/* Right Section */}
        <VStack 
          ref={rightRef}
          style={fadeInStyle}
          alignItems="center" 
          justifyContent="center"  
          spacing="4" 
          flex="1" 
          paddingLeft={{ base: "0", md: "4" }}
          marginTop={{ base: "4", md: "0" }}  // Added top margin for mobile layout
        >
          <Box 
            backgroundColor="blue.500"
            maxWidth={{ base: "340px", md: "420px" }}
            width="full"
            height={{ base: "220px", md: "280px" }}
            position="relative"
          >
            <Image 
              src={room} 
              alt="Room Image" 
              maxWidth={{ base: "320px", md: "400px" }}
              position="absolute"
              top="-10px"
              left="-10px"
            />
          </Box>
          <Text fontSize={{ base: "xl", md: "3xl" }} textAlign="center">
            Fill out the form below and we'll give you a call to get started on your dental journey.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Patients;
