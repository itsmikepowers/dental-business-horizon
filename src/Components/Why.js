import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Box, Heading, Divider, Image, List, ListItem, ListIcon, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import WhyImage from "../Assets/why.png";
import { AiOutlineSmile, AiOutlineSafety, AiOutlineBulb } from "react-icons/ai";

function Why() {
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

    const companyName = useSelector(state => state.companyName);

    const flexDirection = useBreakpointValue({ base: "column", md: "row" });
    const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });
    const fontSize = useBreakpointValue({ base: "md", md: "xl" });
    const dividerVisibility = useBreakpointValue({ base: "hidden", md: "visible" });

    return (
        <Box bg="gray.100" ref={inViewRef}>
            <Box 
                display="flex" 
                flexDirection={flexDirection}
                justifyContent="center"
                alignItems="center"
                p={8}
                maxWidth="1200px" 
                margin="0 auto"
            >
                {/* Left Content - Image */}
                <Box 
                    flex="1" 
                    pr={{ base: 0, md: 6 }}
                    mb={{ base: 6, md: 0 }}
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                    opacity={animated ? 1 : 0}
                    transition="opacity 1s 0.5s"
                >
                    <Image 
                        src={WhyImage} 
                        alt="Why" 
                        height="auto" 
                        width="auto" 
                        maxH="100%" 
                        maxW="100%" 
                        borderRadius="lg"
                    />
                </Box>

                {/* Divider */}
                <Divider orientation="vertical" height="100%" visibility={dividerVisibility} />

                {/* Right Content */}
                <Box 
                    flex="1" 
                    pl={{ base: 0, md: 6 }}
                    transform={animated ? 'translateX(0)' : 'translateX(100px)'}
                    opacity={animated ? 1 : 0}
                    transition="transform 0.8s, opacity 0.8s"
                >
                    <Heading mb={3} size={headingSize}>Why Choose {companyName}?</Heading>

                    {/* Blue Bar */}
                    <Box 
                        width="100px" 
                        height="4px" 
                        backgroundColor="blue.500" 
                        marginBottom="3"
                    />

                    {/* Bullet Points */}
                    <List spacing={5} mb={3}>
                        <ListItem fontSize={fontSize} fontFamily="Open Sans, sans-serif">
                            <HStack spacing={2}>
                                <ListIcon as={AiOutlineSmile} fontSize="32px" color="blue.500" />
                                <Text>
                                    Personalized Care: We don't just treat teeth, we treat people. Every smile is unique, and so is our approach.
                                </Text>
                            </HStack>
                        </ListItem>
                        <ListItem fontSize={fontSize} fontFamily="Open Sans, sans-serif">
                            <HStack spacing={2}>
                                <ListIcon as={AiOutlineSafety} fontSize="32px" color="blue.500" />
                                <Text>
                                    Unparalleled Safety: Your safety is our utmost priority. Experience dental care with the highest health standards.
                                </Text>
                            </HStack>
                        </ListItem>
                        <ListItem fontSize={fontSize} fontFamily="Open Sans, sans-serif">
                            <HStack spacing={2}>
                                <ListIcon as={AiOutlineBulb} fontSize="32px" color="blue.500" />
                                <Text>
                                    Pioneering Technology: At the forefront of dental innovation, we utilize the latest tools to ensure top-tier treatment.
                                </Text>
                            </HStack>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    );
}

export default Why;
