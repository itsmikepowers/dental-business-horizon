import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import {
  Flex, IconButton, Image, Button, Text, Icon, Drawer, 
  DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, VStack, useBreakpointValue
} from "@chakra-ui/react";
import { HamburgerIcon, PhoneIcon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const btnRef = useRef();

  const logo = useSelector(state => state.logo); 
  const locationPhonePairs = useSelector(state => state.locationPhonePairs);

  const breakpoint = useBreakpointValue({ base: "base", sm: "sm", md: "md", lg: "lg", xl: "xl" });
  
  const renderedPairs = breakpoint === "xl" ? locationPhonePairs.map(pair => (
    <Flex 
      align="center" 
      mr={10} 
      key={pair.location} 
    >
      <Icon color="black" as={MdLocationOn} mr={3} fontSize="lg"/>
      <a href={pair.mapsLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <Text color="black" fontSize="1xl">{pair.location}</Text>
      </a>
      <Icon color="black" as={PhoneIcon} mx={3} fontSize="md"/>
      <a href={`tel:${pair.phone}`} style={{ textDecoration: 'none' }}>
        <Text color="black" fontSize="1xl">{pair.phone}</Text>
      </a>
    </Flex>
  )) : null;

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      height="80px"
      color="white"
      position="sticky" 
      top={0} 
      zIndex={15}
      background="white"
      boxShadow="0px 1px 30px rgba(0, 0, 0, 0.2)"
    >
      {/* Logo */}
      <Flex as={Link} to="/" align="center" mx={2} height="100%">
        <Image
          src={logo}
          alt="Logo"
          height="100%" 
        />
      </Flex>

      {/* Right side */}
      <Flex align="center" height="100%">
        {renderedPairs}

        {/* Free Consultation Button */}
        <Button
          px={10}
          colorScheme="orange"
          variant="solid"
          height="100%"
          borderRadius="0"
          fontSize="3xl"
          display={["none", "none", "inline-flex"]} 
        >
          Free Consultation
        </Button>

        {/* Hamburger Menu */}
        <IconButton
          ref={btnRef}
          onClick={() => setIsOpen(!isOpen)}
          icon={<HamburgerIcon w="40x" h="40px" />}
          variant="solid"
          bg="blue.500"
          color="white"
          aria-label="Open Menu"
          borderRadius="0"
          size="lg"
          width="80px"
          height="100%" 
        />

        {/* Drawer (Slide-out menu) */}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xs"
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton 
                  size="lg" 
                  style={{ 
                      fontSize: '20px', 
                      position: 'absolute', 
                      top: '20px',   // Adjust as needed to move it up or down
                      right: '40px'  // Adjust as needed to move it left or right
                  }} 
              />
              <DrawerBody>
                <VStack spacing="24px" align="start" w="100%" mt="80px">
                  <Link to="/about">
                    <Button variant="ghost" w="100%" justifyContent="flex-start" onClick={onClose} fontSize="3xl">
                      About Us
                    </Button>
                  </Link>
                  <Link to="/patients">
                    <Button variant="ghost" w="100%" justifyContent="flex-start" onClick={onClose} fontSize="3xl">
                      New Patients
                    </Button>
                  </Link>
                  <Link to="/team">
                    <Button variant="ghost" w="100%" justifyContent="flex-start" onClick={onClose} fontSize="3xl">
                      Medical Team
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="ghost" w="100%" justifyContent="flex-start" onClick={onClose} fontSize="3xl">
                      Contact Us
                    </Button>
                  </Link>
                </VStack>
                <VStack pl={5} align="start" spacing="8px" mt="60px">
                  {locationPhonePairs.map(pair => (
                    <React.Fragment key={pair.location}>
                      <a href={pair.mapsLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Text fontSize="xl" fontWeight="bold">{pair.location}</Text>
                      </a>
                      <a href={`tel:${pair.phone}`} style={{ textDecoration: 'none' }}>
                        <Text fontSize="xl">{pair.phone}</Text>
                      </a>
                    </React.Fragment>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Flex>
  );
}

export default Header;

