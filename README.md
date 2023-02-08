# cloudbase-adapter-tt_game
腾讯云服务（tcb-js-sdk ）字节跳动小游戏适配器


## 安装
### npm
```bash
npm i cloudbase-adapter-tt_game -S

//安装跨段开发sdk
npm i @cloudbase/js-sdk@1.7.2 -S
```

## 使用
### ES Module
```javascript
import tcb from '@cloudbase/js-sdk';
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
const tcb = require('@cloudbase/js-sdk');
const {adapter} = require('cloudbase-adapter-tt_game');

// 以下两种方式二选一
// 1.单参数传入
tcb.useAdapters(adapter);
// 2.数组形式传参
tcb.useAdapters([adapter]);
// adapter必须在init之前传入
tcb.init();
```

### 匿名登录
```javascript
let app = tcb.init({xxx})
const auth = app.auth();
await auth.anonymousAuthProvider().signIn()
```

### 函数调用
```javascript
app.callFunction({
    name : "name",
    data : {
    }
}).then((res) => {
    const result = res.result; //云函数执行结果
    console.log("res", result)
}).catch((err) => {
})
```

# 注意
代码参考： https://github.com/chaostack/cloudbase-adapter-wx_game
主要用于学习 npm打包流程
