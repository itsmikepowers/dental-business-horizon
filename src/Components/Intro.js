import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import bgImage from '../Assets/blue.jpg';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 2 },
      y: { duration: 1.5 }
    }
  }
};

export const Intro = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const companyName = useSelector(state => state.companyName);

  return (
    <Flex
      align="center"
      justify="center"
      p={{ base: 8, md: 4 }}
      bg="gray.800"
      backgroundImage={`url(${bgImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      minHeight={{ base: "auto", md: "80vh" }}
    >
      <MotionBox
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInFromBottom}
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        p={{ base: 8, md: 100 }}
        width={{ base: "90%", md: "80%" }}
      >
        <MotionFlex
          align="center"
          justify="space-between"
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Box width={{ base: "100%", md: "50%" }} textAlign="center">
            <Heading size="lg" fontSize={{ base: "24px", md: "60px" }} textAlign="left" mb={3}>
              Dental Done Right, So You Can Smile Bigger
            </Heading>
            <Box
              width="100px"
              height="4px"
              backgroundColor="blue.500"
              marginBottom="3"
            />
          </Box>

          <Box width={{ base: "100%", md: "50%" }} textAlign="left">
          <Text 
            mt={4} 
            fontSize={{ base: "md", md: "lg", lg: "2xl" }} 
            fontFamily="Open Sans, sans-serif"
          >
            Dive into a world where dentistry meets delight at {companyName}! With our high-tech tools and heartwarming care, we're turning frowns upside down and lighting up communities one sparkling smile at a time.
          </Text>
            <Button mt={4} colorScheme="blue" size="lg" fontSize="xl" px={8} py={6}>LEARN MORE</Button>
          </Box>
        </MotionFlex>
      </MotionBox>
    </Flex>
  );
}
