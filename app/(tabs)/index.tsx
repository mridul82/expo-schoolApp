// app/(tabs)/index.tsx
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Cover Photo */}
      <View className="relative">
        <Image
          source={{ uri: 'https://example.com/cover-photo.jpg' }}
          style={{ width: '100%', height: 200 }}
          className="rounded-b-xl"
        />
        <Text className="absolute bottom-4 left-4 text-3xl font-bold text-white shadow-lg">
          Welcome to School App
        </Text>
      </View>

      {/* Quick Links Section */}
      <View className="m-4 bg-white rounded-xl shadow-md p-4">
        <Text className="text-lg font-bold text-gray-800 mb-4">Quick Links</Text>
        <View className="flex-row flex-wrap justify-between">
          {[
            { name: 'Academic Calendar', icon: 'add' },
            { name: 'Time Table', icon: 'schedule' },
            { name: 'Attendance', icon: 'check-circle' },
            { name: 'Assignments', icon: 'assignment' },
          ].map((link) => (
            <TouchableOpacity
              key={link.name}
              className="w-[48%] bg-gray-50 rounded-lg p-3 mb-3 items-center"
            >
              <MaterialIcons name={link.icon} size={30} color="#3b82f6" />
              <Text className="text-center text-gray-700 mt-2">{link.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Upcoming Events Section */}
      <View className="m-4 bg-white rounded-xl shadow-md p-4">
        <Text className="text-lg font-bold text-gray-800 mb-4">Upcoming Events</Text>
        {[
          'Annual Day - Dec 15',
          'Parents Meeting - Dec 20',
          'Sports Day - Dec 25',
        ].map((event) => (
          <View key={event} className="py-3 border-b border-gray-100 flex-row items-center">
            <FontAwesome name="calendar" size={20} color="#3b82f6" className="mr-3" />
            <Text className="text-gray-700">{event}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
