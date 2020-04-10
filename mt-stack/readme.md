## 问题集锦

### 1. 域名 cp-tools.cn 不可访问

如果 cp-tools.cn 不可访问，请使用 ip 117.51.155.165 直接访问，如：http://117.51.155.165/sign

### 2. 样式错乱

课程没有带着大家敲样式，所有的样式都在源码中，大家自行下载并引入到对应的文件中。

最近大家反馈样式引入有问题，在这里提醒大家：

1. 页面 pages 下的文件和样式 assets/css 下的文件都是一一对应的，看下源码的组织结构就非常清楚了
2. 如果自己是一行行敲的 HTML 代码，DOM结构一定要和源码一致，不然样式会出问题
3. 源码一定要从 git.imooc.com 拉取最新的


### 3. Nuxt基础教程报错

课程在录制的时候，nuxt.js还是1.4.2。录制实战之后，nuxt低调升级到2.0.0，为了保证我们的技术教程都使用最新版本，把已经录制的实战内容进行了代码重构、视频重录
所以基础教程部分是1.4.2，实战部分是2.0.0。在基础教程部分也是使用对应的脚手架（需要nuxt@1.4.2），只有当nuxt降级到1.4.2才可以。具体步骤：

```
npm uninstall nuxt
npm install nuxt@1.4.2
```

### 4. 获取不到线上数据

大家下载源码之后一定要修改自己的 sign，把 server/utils/sign.js 中的sign变量填写自己的签名

为了保证正版用户的权益，必须用签名才能使用我们线上数据，获取签名地址：http://cp-tools.cn/sign

### 5. 离线数据库

考虑到大家想多练习本地数据库操作的练习，课程提供了部分离线数据。在源码找那个的dbs.zip，先解压然后导入到数据库中。

```
mongoimport -d dbs -c pois pois.dat
```

其中 dbs 是你的数据库名称，pois是集合名，pois.dat是对应的数据源文件。离线数据文件夹中共9个文件，需要逐个导入。

### 6. 下载源码报错

下载源码之后，直接运行会报错，是因为需要启动 mongodb、redis服务之后才可以。

### 7. 安装错误

为了防止各个包的升级导致各种错误问题，咱们的代码中把安装包的版本都锁住了，不过近期 node-sass 对 node 的限制比较多，大家根据本机的 node 版本选择对应的 node-sass版本，手动修改下package.json中 node-sass 的版本重新安装即可。

https://www.npmjs.com/package/node-sass

### 8. 关于 MacOS 安装 mongodb 失败的原因

mongodb 不再开源导致 ```brew install mongodb``` 失效了，请使用最新的命令安装，[官方地址](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

```
brew tap mongodb/brew
brew install mongodb-community
```
安装成功之后用下面命令启动 mongodb 服务:

```
brew services start mongodb-community
```