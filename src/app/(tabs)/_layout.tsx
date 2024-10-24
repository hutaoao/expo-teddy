import {Tabs} from 'expo-router';
import React from 'react';

import {TabBarIcon} from '@/components/navigation/TabBarIcon';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#a2b759',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color}/>
          ),
          headerTitle: '佩奇的泰迪'
        }}
      />
      <Tabs.Screen
        name="workbench"
        options={{
          title: '工作台',
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon name={focused ? 'apps' : 'apps-outline'} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="personal"
        options={{
          title: '我的',
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color}/>
          ),
          headerShown: false
        }}
      />
    </Tabs>
  );
}
