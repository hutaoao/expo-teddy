import {StyleSheet} from 'react-native';

import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {useNavigation} from 'expo-router';
import {useEffect} from 'react';

export default function AboutScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({headerShown: true, title: '关于我'});
  }, [navigation]);

  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">关于我</ThemedText>
      <ThemedText type="title" style={styles.word}>使用navigation.setOptions配置</ThemedText>
    </ThemedView>
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
