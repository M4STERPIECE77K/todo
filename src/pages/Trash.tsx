import React from 'react';
import { Box, VStack, Text, HStack, Button, Flex } from '@chakra-ui/react';
import TaskItem from './TaskItem';

const Trash: React.FC = () => {
  const sectionTitleColor = 'gray.400';

  return (
    <Box flex="1" overflowY="auto" px="8" pb="8">
      <Flex justify="space-between" align="center" mb="4">
        <Text fontSize="xs" fontWeight="bold" color={sectionTitleColor} textTransform="uppercase" letterSpacing="wider">
          Deleted Tasks
        </Text>
        <Button size="xs" colorScheme="red" variant="ghost">Empty Trash</Button>
      </Flex>
      <Box mb="8">
        <VStack align="stretch" gap="2" opacity="0.5">
          <TaskItem title="Old meeting notes" priority="Low" />
          <TaskItem title="Unused assets" priority="Low" />
        </VStack>
      </Box>
    </Box>
  );
};

export default Trash;