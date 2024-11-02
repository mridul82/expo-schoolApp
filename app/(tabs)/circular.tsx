// app/(tabs)/circular.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

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
    <TouchableOpacity className="bg-white rounded-lg shadow-md p-4 mb-3 flex-row items-center">
      {/* Icon */}
      <FontAwesome name="file-text-o" size={28} color="#3b82f6" className="mr-4" />
      {/* Content */}
      <View>
        <Text className="text-lg font-semibold text-gray-800">{item.title}</Text>
        <Text className="text-sm text-gray-500 mt-1">Date: {item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-100 p-4">
      
      <FlatList
        data={circulars}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
