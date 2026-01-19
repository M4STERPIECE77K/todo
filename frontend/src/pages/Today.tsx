import React from 'react';
import { 
  Box, 
  VStack, 
  HStack, 
  Text,
  Button
} from '@chakra-ui/react';
import { useColorModeValue } from '../components/ui/color-mode';
import { Tag } from '../components/ui/tag';
import TaskItem from './TaskItem';
import type { Task } from '../types/task';

interface TodayProps {
  tasks: Task[];
}

const Today: React.FC<TodayProps> = ({ tasks }) => {
  const sectionTitleColor = 'gray.400';

  return (
    <Box flex="1" overflowY="auto" px="8" pb="8">
      <Box mb="8">
        <HStack gap="2" mb="4">
          <Text fontSize="xs" fontWeight="bold" color={sectionTitleColor} textTransform="uppercase" letterSpacing="wider">
            High Priority
          </Text>
          <Tag size="sm" rounded="md" bg={{ _light: 'red.100', _dark: 'rgba(254, 178, 178, 0.1)' }} color={{ _light: 'red.600', _dark: 'red.400' }} fontSize="10px">
            {tasks.filter(t => t.priority === 'High').length}
          </Tag>
        </HStack>
        <VStack align="stretch" gap="2">
          {tasks.filter(t => t.priority === 'High').length > 0 ? (
            tasks.filter(t => t.priority === 'High').map(task => (
              <TaskItem 
                key={task.id}
                title={task.title} 
                priority={task.priority} 
                category={task.category}
                isRoutine={task.routine}
              />
            ))
          ) : (
            <Text color="gray.400" fontSize="sm">No high priority tasks</Text>
          )}
        </VStack>
      </Box>
      <Box mb="8">
        <Text fontSize="xs" fontWeight="bold" color={sectionTitleColor} textTransform="uppercase" letterSpacing="wider" mb="4">
          Routine
        </Text>
        <VStack align="stretch" gap="2">
          {tasks.filter(t => t.routine).length > 0 ? (
            tasks.filter(t => t.routine).map(task => (
              <TaskItem 
                key={task.id}
                title={task.title} 
                priority={task.priority} 
                category={task.category}
                isRoutine={task.routine}
              />
            ))
          ) : (
            <Text color="gray.400" fontSize="sm">No routine tasks</Text>
          )}
        </VStack>
      </Box>
      <Box 
        mt="12" 
        p="8" border="2px dashed" borderColor={useColorModeValue('gray.200', 'gray.700')} rounded="2xl" display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" opacity="0.6"  _hover={{ opacity: 1 }} transition="opacity 0.2s">
        <Box bg={useColorModeValue('gray.50', 'gray.800')} p="4" rounded="full" mb="4">
          <Box as="span" className="material-symbols-outlined" color="primary.500" fontSize="3xl">lightbulb</Box>
        </Box>
        <Text color={useColorModeValue('gray.900', 'white')} fontWeight="medium" mb="1">
          Cleared for takeoff?
        </Text>
        <Text fontSize="sm" color="gray.500">
          You have no more tasks scheduled for today. Time to relax or plan ahead.
        </Text>
        <Button variant="ghost" mt="4" color="primary.500" fontSize="sm" fontWeight="bold" px="0" _hover={{ textDecoration: 'underline', bg: 'transparent' }}>
          View Upcoming Tasks
        </Button>
      </Box>
    </Box>
  );
};

export default Today;