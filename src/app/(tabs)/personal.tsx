import {Image, Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {AntdIcon} from '@/components/AntdIcon';
import {router} from 'expo-router';

export default function UpdatesDemo() {
  const {top} = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={[styles.headerView, {paddingTop: top + (30)}]}>
          <Image style={styles.headPortrait} source={require('@/assets/images/icon.png')}/>
          <View style={styles.userView}>
            <Text style={styles.userNameLab}>张三</Text>
            <Text style={styles.phoneLab}>18612345678</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.itemView}
          onPress={() => {
            router.navigate('/about');
          }}
        >
          <AntdIcon name="setting" size={20} color="#878F9B"/>
          <Text style={styles.itemView_title}>关于我</Text>
          <AntdIcon name="right" size={20} color="#878F9B"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemView}
          onPress={() => {
            router.navigate('/check-update');
          }}
        >
          <AntdIcon name="clouddownloado" size={20} color="#878F9B"/>
          <Text style={styles.itemView_title}>检查更新</Text>
          <Text style={styles.proLab}>v1.0.1</Text>
          <AntdIcon name="right" size={20} color="#878F9B"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemView}
          onPress={() => {
            router.navigate({pathname: 'feedback', params: {title: '123'}})
          }}
        >
          <AntdIcon name="clouddownloado" size={20} color="#878F9B"/>
          <Text style={styles.itemView_title}>反馈和建议</Text>
          <Text style={styles.proLab}>v1.0.1</Text>
          <AntdIcon name="right" size={20} color="#878F9B"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemView}
          onPress={() => {
            router.navigate('/error');
          }}
        >
          <AntdIcon name="paperclip" size={20} color="#878F9B"/>
          <Text style={styles.itemView_title}>404页面测试</Text>
          <Text style={styles.proLab}>10KB</Text>
          <AntdIcon name="right" size={20} color="#878F9B"/>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headPortrait: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  userView: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
  },
  headerView: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 30,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameLab: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#333',
  },
  phoneLab: {
    fontSize: 20,
    color: '#666666',
    marginTop: 10,
  },
  itemView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F3F5',
  },
  itemView_title: {
    fontSize: 18,
    color: '#333',
    marginLeft: 5,
    flex: 1,
  },
  proLab: {
    fontSize: 16,
    color: '#c3c1c1',
    marginRight: 10
  },
})
