Create universal native apps with React that run on Android, iOS, and the web. Iterate with confidence.

> 使用React创建在Android、iOS和web上运行的通用原生应用。自信地迭代。
>

> 开发者可以无需考虑环境问题
>

<font style="color:rgb(42, 43, 46);"></font>

### 体验demo - <font style="color:#F38F39;">teddy</font>
该demo旨在打造全功能模版，包含一些基本功能的使用，如路由、热更新等

> teddy（泰迪）小猪佩奇里面佩奇的玩偶🧸🧸🧸
>

[GitHub - hutaoao/expo-teddy: react-native 框架 Expo demo项目，包含了 路由 热更新等基础功能示例！](https://github.com/hutaoao/expo-teddy)

<font style="color:rgb(42, 43, 46);"></font>

### 优势
+ **React Native集成：**Expo基于Facebook的React Native框架，允许开发者用JavaScript和React语法编写跨平台的应用。
+ **统一的SDK：**Expo有自己的SDK，其中包含了许多预封装的模块，如地图、推送通知、相机和音频等，使得添加这些常见功能变得简单易行。
+ **热更新（Hot Reloading）：**Expo支持实时重载，极大地提高了开发效率，开发者可以迅速看到代码更改的效果。
+ **原生模块支持：**虽然大部分功能可以通过SDK实现，但当需要自定义原生模块时，Expo的eject功能可以让应用脱离Expo环境，转为完全的React Native项目，从而可以直接进行原生代码的修改。
+ **即用型工具：**包括二维码扫描、设备检测、远程控制等功能，使得调试和分享应用程序变得更加简单。
+ **<font style="color:rgb(51, 51, 51);">基于文件系统的本机路由：</font>**`expo-router`



### 创建项目
> 保证node环境是好的就行
>

`npx create-expo-app@latest`



<font style="color:rgb(17, 24, 28);">可以使用</font>`<font style="color:#DF2A3F;">--template</font>`<font style="color:rgb(17, 24, 28);">选项选择以下模板之一，或将其作为参数传递给选项。例如，</font>`<font style="color:rgb(17, 24, 28);">--template default</font>`<font style="color:rgb(17, 24, 28);">。</font>

| **模板** | **描述** |
| :--- | :--- |
| [default](https://github.com/expo/expo/tree/main/templates/expo-template-default) | 默认模板。旨在构建跨屏应用。包括推荐工具，如 Expo CLI、Expo Router 库和启用的 TypeScript 配置。适用于大多数应用。 |
| [blank](https://github.com/expo/expo/tree/main/templates/expo-template-blank) | 无需配置导航即可安装所需的最低限度的 npm 依赖项。 |
| [blank-typescript](https://github.com/expo/expo/tree/main/templates/expo-template-blank-typescript) | 启用了 TypeScript 的空白模板。 |
| [tabs](https://github.com/expo/expo/tree/main/templates/expo-template-tabs) | 安装并配置基于文件的路由，并启用 Expo Router 和 TypeScript。 |
| [bare-minimum](https://github.com/expo/expo/tree/main/templates/expo-template-bare-minimum) | 生成带有本机目录（ **android**和**ios** ）的空白模板。[npx expo prebuild](https://docs.expo.dev/workflow/prebuild/)<br/>在安装期间运行。 |




### expo常用命令
| **命令** | **描述** |
| :--- | :--- |
| `npx expo start` | 启动开发服务器（无论您使用的是开发版本还是 Expo Go）。 |
| `npx expo prebuild` | [使用Prebuild](https://docs.expo.dev/workflow/prebuild/)生成原生 Android 和 iOS 目录。<font style="color:#DF2A3F;">(如修改app.json配置 需执行该命令重新输出 Android 和 iOS 目录才会体现出)</font> |
| `npx expo run:android` | 在本地编译原生 Android 应用程序。 |
| `npx expo run:ios` | 在本地编译原生 iOS 应用程序。 |
| `npx expo install package-name` | `--fix`通过向此命令添加选项，用于安装新库或验证和更新项目中的特定库。 |
| `npx expo lint` | [设置并配置](https://docs.expo.dev/guides/using-eslint/)ESLint。如果 ESLint 已配置，此命令将[检查你的项目文件](https://docs.expo.dev/guides/using-eslint/#usage)。 |




### 运行
#### 方式一：Expo Go
> <font style="color:rgb(42, 43, 46);">在没有自定义本地模块的有限沙箱中尝试应用程序开发。非常适合快速测试Expo。不适合长期项目。</font>
>

+ <font style="color:rgb(42, 43, 46);">手机安装 Expo Go</font>
+ <font style="color:#000000;">- </font>**<font style="color:#000000;">cd expo-demo</font>**
+ <font style="color:#000000;">- </font>**<font style="color:#000000;">npm run android  运行到Android</font>**
+ <font style="color:#000000;">- </font>**<font style="color:#000000;">npm run ios	     运行到iOS</font>**

**<font style="color:#000000;"></font>**

#### 方式二：Development build
> <font style="color:rgb(42, 43, 46);">使用开发工具构建自己的应用程序。支持自定义本地模块。用于生产项目。</font>
>

<font style="color:rgb(42, 43, 46);">以Android为例：</font>

+ 安装`EAS CLI`

`npm install -g eas-cli`



+ <font style="color:rgb(42, 43, 46);">创建一个Expo帐户并登录</font>

`<font style="color:rgb(42, 43, 46);">eas login</font>`

<font style="color:rgb(42, 43, 46);"></font>

+ <font style="color:rgb(42, 43, 46);">配置项目（在项目根目录运行）</font>

`<font style="color:rgb(42, 43, 46);">eas build:configure</font>`

<font style="color:rgb(42, 43, 46);"></font>

+ <font style="color:rgb(42, 43, 46);">打包</font>

`<font style="color:rgb(42, 43, 46);">eas build --platform android --profile development</font>`

<font style="color:rgb(42, 43, 46);"></font>

### 使用库（含第三方库）
[Use libraries](https://docs.expo.dev/workflow/using-libraries/)



### 使用Expo Router
#### 安装依赖
`npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar`



#### 设置入口
```json
{
  "main": "expo-router/entry"
}
```



### 热更新
#### 安装
`npx expo install expo-updates`



#### 配置项目
`eas update:configure`

> 先配置`<font style="color:rgb(42, 43, 46);">EAS Build</font>`<font style="color:rgb(42, 43, 46);"> > </font>`<font style="color:rgb(42, 43, 46);">eas build:configure</font>`
>

