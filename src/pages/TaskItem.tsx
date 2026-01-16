import React from 'react';
import { 
  Box, 
  Flex, 
  Text, 
  IconButton, 
  HStack
} from '@chakra-ui/react';
import { useColorModeValue } from '../components/ui/color-mode';
import { Tag } from '../components/ui/tag';

interface TaskItemProps {
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  time?: string;
  category?: string;
  isRoutine?: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ title, priority, time, category, isRoutine }) => {
  const normalBg = 'item';
  const routineBg = { _light: 'gray.50', _dark: '#202429' };
  const borderColor = { _light: 'gray.100', _dark: 'gray.700' };
  const textColor = { _light: 'gray.800', _dark: 'gray.100' };
  const routineTextColor = { _light: 'gray.800', _dark: 'gray.200' };

  const getPriorityStyles = () => {
    switch (priority) {
      case 'High':
        return {
          bg: { _light: 'red.50', _dark: 'rgba(254, 178, 178, 0.1)' },
          color: { _light: 'red.600', _dark: 'red.400' },
          border: '1px solid',
          borderColor: { _light: 'red.100', _dark: 'rgba(254, 178, 178, 0.2)' }
        };
      case 'Medium':
        return {
          bg: { _light: 'orange.50', _dark: 'rgba(251, 211, 141, 0.1)' },
          color: { _light: 'orange.600', _dark: 'orange.400' },
          border: '1px solid',
          borderColor: { _light: 'orange.100', _dark: 'rgba(251, 211, 141, 0.2)' }
        };
      case 'Low':
        return {
          bg: { _light: 'rgba(235, 207, 138, 0.2)', _dark: 'rgba(235, 207, 138, 0.1)' },
          color: { _light: 'yellow.700', _dark: 'secondary.300' },
          border: '1px solid',
          borderColor: { _light: 'rgba(235, 207, 138, 0.2)', _dark: 'rgba(235, 207, 138, 0.1)' }
        };
    }
  };

  const priorityStyles = getPriorityStyles();

  return (
    <Flex 
      align="start" 
      gap="4" 
      p="4" 
      rounded="xl" 
      border="1px solid"
      borderColor={isRoutine ? 'transparent' : borderColor}
      bg={isRoutine ? routineBg : normalBg}
      _hover={{ 
        shadow: isRoutine ? 'sm' : 'md', 
        borderColor: isRoutine ? borderColor : 'primary.400',
        bg: isRoutine ? { _light: 'white', _dark: 'item' } : undefined
      }}
      transition="all 0.2s"
      cursor="pointer"
      role="group"
    >
      <Box pt="1">
        <Box 
          as="label" 
          position="relative" 
          display="flex" 
          alignItems="center" 
          justifyContent="center" 
          w="6" 
          h="6" 
          cursor="pointer"
        >
          <input 
            type="checkbox" 
            className="task-checkbox" 
            style={{ 
              appearance: 'none', 
              width: '100%', 
              height: '100%', 
              borderRadius: '50%', 
              border: '2px solid', 
              borderColor: useColorModeValue('#CBD5E0', '#4A5568'), 
              transition: 'all 0.2s', 
              cursor: 'pointer',
              zIndex: 10
            }} 
          />
          <Box 
            position="absolute" 
            inset="0" 
            rounded="full" 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            pointerEvents="none" 
            transition="all 0.2s"
          >
            <Box 
              as="span" 
              className="material-symbols-outlined" 
              color="white" 
              fontSize="sm" 
              opacity="0" 
              transform="scale(0.5)" 
              transition="all 0.2s"
            >
              check
            </Box>
          </Box>
        </Box>
      </Box>

      <Flex flex="1" direction="column" gap="1">
        <Text 
          fontSize="base" 
          fontWeight="medium" 
          color={isRoutine ? routineTextColor : textColor}
          _groupHover={{ color: 'primary.500' }}
          transition="colors 0.2s"
        >
          {title}
        </Text>
        <HStack gap="2">
          <Tag 
            size="sm" 
            variant="subtle" 
            fontSize="xs" 
            fontWeight="bold" 
            px="2" 
            py="0.5" 
            {...priorityStyles}
          >
            {priority}
          </Tag>
          {time && (
            <HStack gap="1" color="gray.400">
              <Box as="span" className="material-symbols-outlined" fontSize="14px">schedule</Box>
              <Text fontSize="xs">{time}</Text>
            </HStack>
          )}
          {category && (
            <HStack gap="1" color="gray.400">
              <Box as="span" className="material-symbols-outlined" fontSize="14px">local_cafe</Box>
              <Text fontSize="xs">{category}</Text>
            </HStack>
          )}
        </HStack>
      </Flex>

      <HStack gap="1" opacity="0" _groupHover={{ opacity: 1 }} transition="opacity 0.2s">
        <IconButton
          aria-label="Edit task"
          variant="ghost"
          size="sm"
          color="gray.400"
          _hover={{ color: 'primary.500', bg: 'primary.50' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit</span>
        </IconButton>
        <IconButton
          aria-label="Delete task"
          variant="ghost"
          size="sm"
          color="gray.400"
          _hover={{ color: 'red.500', bg: { _light: 'red.50', _dark: 'rgba(254, 178, 178, 0.1)' } }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
        </IconButton>
      </HStack>
    </Flex>
  );
};

export default TaskItem;
