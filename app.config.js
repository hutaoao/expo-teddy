module.exports = ({config}) => {
  // config读取的是 app.json
  // 该文件优先级高/可选的
  console.log(config.name); // prints 'My App'

  // 可以根据环境切换配置
  /*
  if (process.env.MY_ENVIRONMENT === 'production') {
    return {
      // your production config
    };
  } else {
    return {
      // your development config
    };
  }
  */

  return {
    ...config,
  };
};
