import {Text, View} from 'react-native';
import {useSession} from '@/provider/ctx';
import {Stack, Redirect} from 'expo-router';
import {AntdIcon} from "@/components/AntdIcon";
import {useColorScheme} from '@/hooks/useColorScheme';
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";

export default function Root() {
  console.log('authentication');

  const colorScheme = useColorScheme();

  const {session, isLoading} = useSession();

  if (isLoading) {
    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Loading...</Text>
    </View>;
  }

  if (!session) {
    return <Redirect href="/login"/>;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3f829b',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
          headerLeft: () => <AntdIcon name='left' color='blue'/>
        }}
      >
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      </Stack>
    </ThemeProvider>
  );
}
