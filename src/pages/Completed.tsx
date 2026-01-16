import React from 'react';
import { Box, VStack, Text, HStack } from '@chakra-ui/react';
import { Tag } from '../components/ui/tag';
import TaskItem from './TaskItem';

const Completed: React.FC = () => {
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
          <TaskItem title="Send invoice to client" priority="Low" />
          <TaskItem title="Book flight for conference" priority="Medium" />
          <TaskItem title="Fix bug in payment gateway" priority="High" />
        </VStack>
      </Box>
    </Box>
  );
};

export default Completed;