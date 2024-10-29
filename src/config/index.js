import * as Updates from 'expo-updates';

let Config = {
  apiUrl: process.env.EXPO_PUBLIC_API_URL,
  enableHiddenFeatures: true,
  updatesChannel: Updates.channel || '-',
};

if (Updates.channel === 'production') {
  // 生产环境
  Config.apiUrl = 'https://api.production.com';
  Config.enableHiddenFeatures = false;
} else if (Updates.channel === 'preview') {
  // 预发环境
  Config.apiUrl = 'https://api.preview.com';
  Config.enableHiddenFeatures = true;
}

export default Config;
