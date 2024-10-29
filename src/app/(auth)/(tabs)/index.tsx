import {StyleSheet, Text} from 'react-native';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import Config from "@/config";

export default function HomeScreen() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">👋首页👋</ThemedText>
      <Text>环境变量.env：{apiUrl}</Text>
      <Text>环境变量config：{Config.apiUrl}</Text>
      <Text>updatesChannel：{Config.updatesChannel}</Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
