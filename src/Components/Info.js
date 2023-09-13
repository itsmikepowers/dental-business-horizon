import { Center, Text, Box, HStack, VStack, Link, useBreakpointValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const CustomDivider = () => <Box width="2px" height="1.5rem" bg="white" />;
const CustomDividerVertical = () => <Box height="2px" width="100%" bg="white" mt="1rem" mb="1rem" />;

export function Info() {
  const companyName = useSelector((state) => state.companyName);
  const stackDirection = useBreakpointValue({ base: 'column', md: 'row' });

  const Divider = stackDirection === 'column' ? CustomDividerVertical : CustomDivider;

  return (
    <Center bg="blue.500" py="5">
      {stackDirection === 'column' ? (
        <VStack spacing="24px" color="white" alignItems="center">
          <Text fontSize="16px">© 2023 {companyName}, All Rights Reserved.</Text>
          <Text fontSize="16px">Privacy Policy</Text>
          <Text fontSize="16px">View Accessibility Menu</Text>
          <Text fontSize="16px">Accessibility Statement</Text>
          <Text fontSize="16px">
            Developed by{" "}
            <Link href="https://horizonlabsai.com" isExternal _hover={{ color: 'gray.300' }}>
              Horizon Labs
            </Link>
          </Text>
        </VStack>
      ) : (
        <HStack spacing="24px" color="white">
          <Text fontSize="16px">© 2023 {companyName}, All Rights Reserved.</Text>
          <Divider />
          <Text fontSize="16px">Privacy Policy</Text>
          <Divider />
          <Text fontSize="16px">View Accessibility Menu</Text>
          <Divider />
          <Text fontSize="16px">Accessibility Statement</Text>
          <Divider />
          <Text fontSize="16px">
            Developed by{" "}
            <Link href="https://horizonlabsai.com" isExternal _hover={{ color: 'gray.300' }}>
              Horizon Labs
            </Link>
          </Text>
        </HStack>
      )}
    </Center>
  );
}
