// app/(tabs)/news.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
}

export default function NewsScreen() {
  const news: NewsItem[] = [
    {
      id: '1',
      title: 'School Wins National Award',
      summary: 'Our school received the Best Institution Award 2024',
      date: '2024-11-05',
    },
    {
      id: '2',
      title: 'Students Excel in Science Fair',
      summary: 'Five students selected for national level competition',
      date: '2024-11-04',
    },
    {
      id: '3',
      title: 'New Library Wing Inaugurated',
      summary: 'State-of-the-art facility now open for students',
      date: '2024-11-03',
    },
  ];

  const renderItem = ({ item }: { item: NewsItem }) => (
    <TouchableOpacity className="bg-white rounded-lg shadow-md p-4 mb-3">
      {/* Icon with Title */}
      <View className="flex-row items-center mb-2">
        <FontAwesome name="newspaper-o" size={28} color="#3b82f6" className="mr-3" />
        <Text className="text-xl font-bold text-gray-800">{item.title}</Text>
      </View>
      {/* Summary and Date */}
      <Text className="text-gray-600">{item.summary}</Text>
      <Text className="text-sm text-gray-400 mt-2">Published on: {item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-100 p-4">
      
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
