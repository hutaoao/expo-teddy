import {StyleSheet} from 'react-native';

import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';

export default function WorkbenchScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">工作台</ThemedText>
      <ThemedText type="title">敬请期待!</ThemedText>
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
