
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Flex, Image, Heading, List, ListItem, Link, VStack, Container, useBreakpointValue } from '@chakra-ui/react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    const logo = useSelector((state) => state.logo);
    const direction = useBreakpointValue({ base: "column", md: "row" });

    return (
        <Box p="12">
            <Container maxW="1200px">
                <Flex direction={direction} justify="space-between" align="center" py={20}>
                    {/* Logo and Company Info Section */}
                    <VStack spacing={12} align="center" mb={direction === "column" ? "12" : "0"}>
                        <Image src={logo} alt="Company Logo" maxW="300px" />
                    </VStack>

                    {/* Resources Section */}
                    <VStack spacing={12} align="left" mb={direction === "column" ? "12" : "0"}>
                        <Heading size="xl">RESOURCES</Heading>
                        <Flex direction={direction} justify="space-between" wrap="wrap">
                            <List spacing={6} mr={10}>
                                <ListItem>
                                    <Link href="/about" fontSize="2xl" >About Us</Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="/patients" fontSize="2xl" >New Patients</Link>
                                </ListItem>
                            </List>
                            <List spacing={6}>
                                <ListItem>
                                    <Link href="/team" fontSize="2xl" >Medical Team</Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="/contact" fontSize="2xl" >Contact Us</Link>
                                </ListItem>
                            </List>
                        </Flex>
                    </VStack>

                    {/* Follow Us Section */}
                    <VStack spacing={12} align="left">
                        <Heading size="xl">FOLLOW US</Heading>
                        <List spacing={6}>
                            <ListItem>
                                <Link href="#" fontSize="2xl">
                                    <Flex align="center">
                                        <FaInstagram size={30} style={{ marginRight: '8px' }} />
                                        Instagram
                                    </Flex>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#" fontSize="2xl">
                                    <Flex align="center">
                                        <FaFacebook size={30} style={{ marginRight: '8px' }} />
                                        Facebook
                                    </Flex>
                                </Link>
                            </ListItem>
                        </List>
                    </VStack>
                </Flex>
            </Container>
        </Box>
    );
};

export default Footer;
