import {router, Stack} from 'expo-router';
import {Text, TouchableOpacity, View} from 'react-native';

import {useSession} from '@/provider/ctx';

export default function SignIn() {
  const {signIn} = useSession();
  return (
    <>
      <Stack.Screen options={{headerShown: false, animation: 'slide_from_bottom'}}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{borderWidth: 1, paddingVertical: 10, paddingHorizontal: 30}}
          onPress={() => {
            signIn();
            router.replace('/');
          }}
        >
          <Text style={{fontSize: 20}}>
            登录
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
