import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Divider, Image } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import AboutImage from "../Assets/about.jpeg";
import { useSelector } from 'react-redux';

function About() {
    const companyName = useSelector((state) => state.companyName);
    
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

    return (
        <Box bg="white" ref={inViewRef}>
            <Box 
                display={{ base: "block", md: "flex" }}
                flexDirection={{ base: "column", md: "row" }}
                justifyContent="space-between" 
                alignItems="center"
                p={{ base: 4, md: 8 }}
                maxWidth="1200px" 
                margin="0 auto"
            >
                {/* Left Content */}
                <Box 
                    flex="1" 
                    pr={{ base: 0, md: 6 }}
                    mb={{ base: 4, md: 0 }}
                    transform={animated ? 'translateX(0)' : 'translateX(-100px)'}
                    opacity={animated ? 1 : 0}
                    transition="transform 0.8s, opacity 0.8s"
                >
                    <Heading mb={3} size={{ base: "xl", md: "2xl" }}>
                        Crafting Beautiful Smiles at {companyName}.
                    </Heading>

                    {/* Blue Bar */}
                    <Box 
                        width="100px" 
                        height="4px" 
                        backgroundColor="blue.500" 
                        marginBottom="3"
                    />

                    <Text mb={3} fontSize={{ base: "md", md: "xl" }} fontFamily="Open Sans, sans-serif">
                        {companyName} merges advanced technology with deep expertise, offering personalized care that highlights your smile's beauty. Our team values more than just dentistry; we treasure the lasting relationships we build with our patients.
                    </Text>
                    <Text fontSize={{ base: "md", md: "xl" }} fontFamily="Open Sans, sans-serif">
                        Our modern facilities represent a commitment to excellence in the dental world. Continuously advancing, we ensure our patients experience the pinnacle of dental care and comfort.
                    </Text>
                </Box>

                {/* Divider */}
                { 
                    // Only show the divider for larger screens.
                    window.innerWidth >= 768 && <Divider orientation="vertical" height="100%" /> 
                }

                {/* Right Content - Image */}
                <Box 
                    flex="1" 
                    pl={{ base: 0, md: 6 }}
                    mt={{ base: 4, md: 0 }}
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                    opacity={animated ? 1 : 0}
                    transition="opacity 1s 0.5s"
                >
                    <Image 
                        src={AboutImage} 
                        alt="About" 
                        height="auto" 
                        width="auto" 
                        maxH="100%" 
                        maxW="100%" 
                        borderRadius="lg"
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default About;
