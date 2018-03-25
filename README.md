 es6-7-8
---

### nodejs下成功运行的方式

- bebel plugin list - package.json
- check the .babelrc file
- run as $ `../../../node_modules/.bin/babel-node index.js`
- everything works fine!

### 浏览器下项目部署的方式

- 在项目目录中执行，$ `npm init -y` 初始化操作
- 安装jspm依赖：$ `sudo yarn add jspm --dev`
- jspm初始化操作：$ ` ./node_modules/.bin/jspm init` 