import React from 'react';
import { Box, VStack, Text, HStack } from '@chakra-ui/react';
import { Tag } from '../components/ui/tag';
import TaskItem from './TaskItem';
import type { Task } from '../types/task';

interface CompletedProps {
  tasks: Task[];
}

const Completed: React.FC<CompletedProps> = ({ tasks }) => {
  const sectionTitleColor = 'gray.400';

  return (
    <Box flex="1" overflowY="auto" px="8" pb="8">
      <Box mb="8">
        <HStack gap="2" mb="4">
          <Text fontSize="xs" fontWeight="bold" color={sectionTitleColor} textTransform="uppercase" letterSpacing="wider">
            Recently Completed
          </Text>
          <Tag size="sm" rounded="md" bg={{ _light: 'green.100', _dark: 'rgba(154, 230, 180, 0.1)' }} color={{ _light: 'green.600', _dark: 'green.400' }} fontSize="10px">
            3
          </Tag>
        </HStack>
        <VStack align="stretch" gap="2" opacity="0.6">
          {tasks.filter(t => t.status === 'COMPLETED').length > 0 ? (
            tasks.filter(t => t.status === 'COMPLETED').map(task => (
              <TaskItem 
                key={task.id}
                title={task.title} 
                priority={task.priority} 
                category={task.category}
                isRoutine={task.routine}
              />
            ))
          ) : (
            <Text color="gray.400" fontSize="sm">No completed tasks yet</Text>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default Completed;