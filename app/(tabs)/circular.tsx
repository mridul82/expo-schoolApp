// app/(tabs)/circular.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

interface Circular {
  id: string;
  title: string;
  date: string;
}

export default function CircularScreen() {
  const circulars: Circular[] = [
    { id: '1', title: 'Holiday Notice', date: '2024-11-05' },
    { id: '2', title: 'Exam Schedule', date: '2024-11-04' },
    { id: '3', title: 'Fee Payment Reminder', date: '2024-11-03' },
    { id: '4', title: 'Sports Day Information', date: '2024-11-02' },
  ];

  const renderItem = ({ item }: { item: Circular }) => (
    <TouchableOpacity className="bg-white rounded-lg shadow-sm p-4 mb-3">
      <Text className="text-lg font-semibold text-gray-800">
        {item.title}
      </Text>
      <Text className="text-sm text-gray-500 mt-1">
        {item.date}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-100">
      <FlatList
        data={circulars}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerClassName="p-4"
      />
    </View>
  );
}
