import { Box, Flex, Heading, Text, Input, Button } from '@chakra-ui/react';
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
      opacity: { duration: 2 },  // 2 seconds for fade effect
      y: { duration: 1.5 }       // 1.5 seconds for slide effect
    } 
  }
};

export const Submit = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  // Access the companyName from Redux store
  const companyName = useSelector(state => state.companyName);

  // Define constants for responsive design
  const headingSizes = ["xl", "xl", "3xl", "3xl"];
  const textSizes = ["lg", "lg", "2xl", "2xl"];
  const flexDirections = ['column', 'column', 'row', 'row'];
  const textAligns = ['left', 'left', 'center', 'center'];
  const blueBarWidth = ['100px', '150px', '200px', '300px'];
  const paddingValues = [50, 50, 75, 100];


  return (
    <Flex 
      align="center" 
      justify="center" 
      p={4} 
      backgroundImage={`url(${bgImage})`}   
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundAttachment="fixed"  
      height={['auto', 'auto', '100vh', '100vh']}  
      flexDirection={flexDirections}
    >
      <MotionBox
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInFromBottom}
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        p={paddingValues}
        width={['100%', '100%', '80%', '80%']}
        height={['auto', 'auto', '80%', '80%']} 
        display="flex" 
        flexDirection="column"
        justifyContent="space-between"
      >
        <MotionFlex flexDirection="column" alignItems="center" justifyContent="center">
            <Heading as="h2" size={headingSizes} textAlign="center">
                START YOUR DENTAL TRANSFORMATION TODAY
            </Heading>
        </MotionFlex>


        <Box 
            width={blueBarWidth}
            height="4px" 
            backgroundColor="blue.500" 
            marginBottom="3"
            marginLeft="auto"
            marginRight="auto"
        />


        <MotionFlex flexDirection="column" alignItems="flex-start" justifyContent="center">
          <Text fontSize={textSizes} fontFamily="Open Sans, sans-serif" textAlign={textAligns}>
            Begin your journey to a brighter smile with {companyName}! Fill out the form below, and we'll promptly get back to you to schedule your appointment.
          </Text>
        </MotionFlex>

        <MotionFlex mt={4} flexDirection={flexDirections} justify="center" spacing={4} gap="15px"> 
            <Input 
                placeholder="Full Name" 
                fontSize="3xl" 
                mb={[4, 4, 0, 0]}  
            />
            <Input 
                placeholder="Email" 
                fontSize="3xl" 
                mb={[4, 4, 0, 0]} 
            />
            <Input 
                placeholder="Phone" 
                fontSize="3xl" 
            />
        </MotionFlex>


        <MotionFlex 
            justifyContent="center"   // Center items horizontally
            alignItems="center"       // Center items vertically
            mt={4}
        >
            <Button 
                colorScheme="blue"  
                width="200px" 
                height="50px"
                fontSize="3xl"
            >
                Submit
            </Button>
        </MotionFlex>
      </MotionBox>
    </Flex>
  );
}
