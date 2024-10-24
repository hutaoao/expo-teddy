import {StyleSheet} from 'react-native';

import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {Stack, useLocalSearchParams} from 'expo-router';
import {AntdIcon} from "@/components/AntdIcon";

export default function AboutScreen() {
  const params = useLocalSearchParams();
  const title: any = params?.title || '';

  return (
    <>
      <Stack.Screen
        options={{
          title: title,
          headerLeft: () => <AntdIcon name='left' color='red'/>
        }}
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">反馈和建议</ThemedText>
        <ThemedText type="title" style={styles.word}>使用params.title配置</ThemedText>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  word: {
    fontSize: 16,
  }
});
