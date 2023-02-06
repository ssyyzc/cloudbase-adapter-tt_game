# cloudbase-adapter-tt_game
腾讯云服务（tcb-js-sdk ）字节跳动小游戏适配器


## 安装
### npm
```bash
npm i cloudbase-adapter-tt_game -S
```

## 使用
### ES Module
```javascript
import tcb from 'tcb-js-sdk';
import adapter from 'cloudbase-adapter-tt_game';

// 以下两种方式二选一
// 1.单参数传入
tcb.useAdapters(adapter);
// 2.数组形式传参
tcb.useAdapters([adapter]);
// adapter必须在init之前传入
tcb.init();
```

### CommonJS
```javascript
const tcb = require('tcb-js-sdk');
const {adapter} = require('cloudbase-adapter-tt_game');

// 以下两种方式二选一
// 1.单参数传入
tcb.useAdapters(adapter);
// 2.数组形式传参
tcb.useAdapters([adapter]);
// adapter必须在init之前传入
tcb.init();
```

# 注意
代码参考： https://github.com/chaostack/cloudbase-adapter-wx_game
主要用于学习 npm打包流程
