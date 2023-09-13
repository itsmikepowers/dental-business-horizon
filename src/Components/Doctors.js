import React from 'react';
import { useSelector } from 'react-redux';
import { Image, VStack, HStack, Text, Box, useBreakpointValue } from "@chakra-ui/react";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Importing the images
import doc1 from '../Assets/person.webp';

const Doctor = ({ doc, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const isMobile = useBreakpointValue({ base: true, md: false });

    const imageSize = useBreakpointValue({ base: '200px', md: '250px' });

    // Determine the initial and animate values based on index
    let initialPosition = index % 2 === 0 ? { x: -200, opacity: 0 } : { x: 200, opacity: 0 };
    let animatePosition = { x: 0, opacity: 1 };

    if (isMobile) {
        return (
            <motion.div 
                ref={ref} 
                initial={initialPosition} 
                animate={inView ? animatePosition : { opacity: 0 }} 
                transition={{ duration: 1 }}>
                <VStack spacing={10} w="100%" alignItems="center" justifyContent="center">
                    <Image src={doc1} boxSize={imageSize} alt={doc.name} borderRadius="20px" />
                    <VStack align="start">
                        <Text fontSize="4xl" fontWeight="bold">{doc.name}</Text>
                        <Text fontSize="3xl">{doc.explanation}</Text>
                    </VStack>
                </VStack>
            </motion.div>
        );
    } else {
        return (
            <motion.div 
                ref={ref} 
                initial={initialPosition} 
                animate={inView ? animatePosition : { opacity: 0 }} 
                transition={{ duration: 1 }}>
                <HStack spacing={10} w="100%" alignItems="center" justifyContent="center">
                    {index % 2 === 0 ? (
                        <>
                            <Image src={doc1} boxSize={imageSize} alt={doc.name} borderRadius="20px" />
                            <VStack align="start">
                                <Text fontSize="4xl" fontWeight="bold">{doc.name}</Text>
                                <Text fontSize="3xl">{doc.explanation}</Text>
                            </VStack>
                        </>
                    ) : (
                        <>
                            <VStack align="start">
                                <Text fontSize="4xl" fontWeight="bold">{doc.name}</Text>
                                <Text fontSize="3xl">{doc.explanation}</Text>
                            </VStack>
                            <Image src={doc1} boxSize={imageSize} alt={doc.name} borderRadius="20px" />
                        </>
                    )}
                </HStack>
            </motion.div>
        );
    }
}

const Doctors = () => {
    const doctors = useSelector(state => state.doctors);
    const padding = useBreakpointValue({ base: 6, md: 12 });

    return (
        <Box maxWidth="1000px" mx="auto" p={padding} my="30px">
            <VStack spacing={20}>
                {doctors.map((doc, index) => (
                    <Doctor key={index} doc={doc} index={index} />
                ))}
            </VStack>
        </Box>
    );
};

export default Doctors;
