import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text, Center, useBreakpointValue } from '@chakra-ui/react';  // Import useBreakpointValue
import { useInView } from "react-intersection-observer";
import userPersonImage from '../Assets/person.webp';

const TeamMember = ({ imageSrc, name, occupation }) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    }
  }, [inView]);

  const widthValue = useBreakpointValue({ base: "100%", md: "48%" });  // Adjust width for smaller devices

  return (
    <Box 
      textAlign="center"
      overflow="hidden"
      mb={4}  // Reduce margin bottom
      width={widthValue}  // Use the responsive width value
      p={2}  // Reduce padding
      ref={inViewRef}
      opacity={animated ? 1 : 0}
      transform={animated ? 'translateY(0)' : 'translateY(100px)'}
      transition="transform 0.8s, opacity 0.8s"
    >
      <Center> 
        <Image 
          src={imageSrc} 
          alt={name} 
          boxSize="200px" 
          objectFit="cover"
          borderRadius="20px"
        />
      </Center>
      <Box p="4">
        <Text fontWeight="bold" fontSize="3xl">{name}</Text>
        <Text fontSize="3xl" color="gray.500">{occupation}</Text>
      </Box>
    </Box>
  );
};

const Team = () => {
  const teamMembers = [
    // ... Repeat the same data structure 6 times
    { name: "Alice", occupation: "Nurse", imageSrc: userPersonImage },
    { name: "David", occupation: "Nurse", imageSrc: userPersonImage },
    { name: "Bob", occupation: "Front Desk", imageSrc: userPersonImage },
    { name: "Charlie", occupation: "Accountant", imageSrc: userPersonImage },
    // ... And so on up to 6 rows
  ];

  const directionValue = useBreakpointValue({ base: "column", md: "row" });  // Adjust direction for smaller devices

  return (
    <Box maxW="800px" margin="auto">
      <Flex direction={directionValue} flexWrap="wrap" justifyContent="space-between"> 
        {teamMembers.map(member => (
          <TeamMember 
            key={member.name}
            name={member.name} 
            occupation={member.occupation} 
            imageSrc={member.imageSrc} 
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Team;