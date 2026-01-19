import React from 'react';
import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  Image,
  Link,
  Circle
} from '@chakra-ui/react';
import { useColorModeValue } from './ui/color-mode';

const Sidebar: React.FC<{ setCurrentPage: (page: string) => void; currentPage: string }> = ({ setCurrentPage, currentPage }) => {
  const bg = 'card';
  const borderColor = { _light: 'gray.100', _dark: 'gray.800' };
  const navHoverBg = { _light: 'gray.50', _dark: 'gray.800' };
  const textColor = 'gray.400';
  const activeBg = { _light: 'rgba(62, 129, 142, 0.1)', _dark: 'rgba(62, 129, 142, 0.2)' };
  const headingColor = { _light: 'gray.900', _dark: 'white' };

  return (
    <Box 
      as="aside" 
      display={{ base: 'none', md: 'flex' }}
      flexDirection="column"
      w="64"
      bg={bg}
      borderRight="1px solid"
      borderColor={borderColor}
      h="100dvh"
      p="6"
      justifyContent="space-between"
      flexShrink={0}
      zIndex={20}
      boxShadow="4px 0 24px rgba(0,0,0,0.02)"
      overflow="hidden"
      position="sticky"
      top="0"
    >
      <Box>
        <Flex align="center" gap="3" mb="10" px="2">
          <Flex 
            w="8" 
            h="8" 
            bg="primary.500" 
            rounded="lg" 
            align="center" 
            justify="center" 
            color="white"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>check</span>
          </Flex>
          <Heading size="md" fontWeight="bold" letterSpacing="tight" color={headingColor}>
            TaskMaster
          </Heading>
        </Flex>

        <VStack align="stretch" gap="1">
          <Link 
            href="#" 
            display="flex" 
            alignItems="center" 
            gap="3" 
            px="3" 
            py="2.5" 
            rounded="lg" 
            color={textColor} 
            bg={currentPage === 'Inbox' ? activeBg : undefined}
            _hover={{ bg: navHoverBg, color: useColorModeValue('gray.900', 'gray.100'), textDecoration: 'none' }}
            _focus={{ boxShadow: 'none', outline: 'none' }}
            _active={{ boxShadow: 'none', outline: 'none' }}
            transition="colors 0.2s"
            role="group"
            onClick={() => setCurrentPage('Inbox')}
          >
            <Box as="span" className="material-symbols-outlined" color="gray.400" _groupHover={{ color: 'primary.500' }}>inbox</Box>
            <Text fontSize="sm" fontWeight="medium">Inbox</Text>
            <Text ml="auto" fontSize="xs" fontWeight="semibold" color="gray.400">4</Text>
          </Link>
          
          <Link 
            href="#" 
            display="flex" 
            alignItems="center" 
            gap="3" 
            px="3" py="2.5" rounded="lg" bg={currentPage === 'Today' ? activeBg : undefined} color={currentPage === 'Today' ? 'primary.500' : textColor} _hover={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none', outline: 'none' }} _active={{ boxShadow: 'none', outline: 'none' }} onClick={() => setCurrentPage('Today')}>
            <Box as="span" className="material-symbols-outlined fill">today</Box>
            <Text fontSize="sm" fontWeight={currentPage === 'Today' ? 'bold' : 'medium'}>Today</Text>
            <Text ml="auto" fontSize="xs" fontWeight={currentPage === 'Today' ? 'bold' : 'semibold'}>12</Text>
          </Link>

          {['Upcoming', 'Completed', 'Trash'].map((item) => (
            <Link 
              key={item}
              href="#" 
              display="flex" 
              alignItems="center" 
              gap="3" 
              px="3" 
              py="2.5" 
              rounded="lg" 
              color={currentPage === item ? 'primary.500' : textColor} 
              bg={currentPage === item ? activeBg : undefined}
              _hover={{ bg: navHoverBg, color: { _light: 'gray.900', _dark: 'gray.100' }, textDecoration: 'none' }}
              _focus={{ boxShadow: 'none', outline: 'none' }}
              _active={{ boxShadow: 'none', outline: 'none' }}
              transition="colors 0.2s"
              role="group"
              onClick={() => setCurrentPage(item)}
            >
              <Box as="span" className="material-symbols-outlined" color="gray.400" _groupHover={{ color: 'primary.500' }}>
                {item === 'Upcoming' ? 'calendar_month' : item === 'Completed' ? 'check_circle' : 'delete'}
              </Box>
              <Text fontSize="sm" fontWeight="medium">{item}</Text>
            </Link>
          ))}
        </VStack>

        <Box mt="8">
          <Text px="3" fontSize="xs" fontWeight="bold" color="gray.400" textTransform="uppercase" letterSpacing="wider" mb="2">
            Projects
          </Text>
          <VStack align="stretch" gap="1">
            <Link 
              href="#" 
              display="flex" 
              alignItems="center" 
              gap="3" 
              px="3" 
              py="2" 
              rounded="lg" 
              color={textColor} 
              _hover={{ bg: navHoverBg, textDecoration: 'none' }}
            >
              <Circle size="2" bg="#EBCF8A" />
              <Text fontSize="sm" fontWeight="medium">Website Redesign</Text>
            </Link>
            <Link 
              href="#" 
              display="flex" 
              alignItems="center" 
              gap="3" 
              px="3" 
              py="2" 
              rounded="lg" 
              color={textColor} 
              _hover={{ bg: navHoverBg, textDecoration: 'none' }}
            >
              <Circle size="2" bg="indigo.400" />
              <Text fontSize="sm" fontWeight="medium">Q4 Marketing</Text>
            </Link>
          </VStack>
        </Box>
      </Box>

      {/* Bottom Actions */}
      <Box pt="4" borderTop="1px solid" borderColor={borderColor}>
        <VStack align="stretch" gap="1">
          <Link 
            href="#" 
            display="flex" 
            alignItems="center" 
            gap="3" 
            px="3" 
            py="2.5" 
            rounded="lg" 
            color={textColor} 
            _hover={{ bg: navHoverBg, color: useColorModeValue('gray.900', 'gray.100'), textDecoration: 'none' }}
            role="group"
          >
            <Box as="span" className="material-symbols-outlined" color="gray.400" _groupHover={{ color: 'primary.500' }}>settings</Box>
            <Text fontSize="sm" fontWeight="medium">Settings</Text>
          </Link>
          <Link 
            href="#" 
            display="flex" 
            alignItems="center" 
            gap="3" 
            px="3" 
            py="2.5" 
            rounded="lg" 
            color={textColor} 
            _hover={{ bg: navHoverBg, color: useColorModeValue('gray.900', 'gray.100'), textDecoration: 'none' }}
            role="group"
          >
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArembTD65XGMimr0KjsmE5bp-EF-OJ3s8SdYJcgx0jhpGR405aU3SZslHFJdX-ce0OFWKU1FSU25rsSbnUbH1BRUPd0aKGAOMJa56gZpdbCNpYi4oOqDNUnry4o_lbAT8ldSYNQbKzpwGhqFl5GU1hC7w9nAK-Qm6cJeR7XVmOiycqltQgTSPsJpDUcs1e_FhHRlRRuC9BaImf04Z3EAIXUcK4kLn3Ip4Bt3maAlO2gfFDuhfODnsTY7atqC1ToKrTbWWkgnvhvWT6" 
              w="6" 
              h="6" 
              rounded="full" 
              filter="grayscale(100%)" 
              _groupHover={{ filter: 'none' }}
              transition="all 0.2s"
            />
            <Text fontSize="sm" fontWeight="medium">Profile</Text>
          </Link>
        </VStack>
      </Box>
    </Box>
  );
};

export default Sidebar;
