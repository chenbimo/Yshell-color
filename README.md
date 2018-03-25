## Yshell-color
Terminal shell prompt color

## 控制字符
* F == 字体标记
* B == 背景标记
* L == 浅色标记
* H == 黑色 (以免和Blue冲突,使用单词Hard)
* R == 红色
* G == 绿色
* Y == 黄色
* B == 蓝色
* P == 紫色
* C == 青色
* W == 白色
* E == 结束
* END == 结束

## 使用
1. 首先，把 Yshell-color.js 引入到 nodejs 项目中
2. 其次，调用函数 参数依次为 v 输出字符串 x 左定界符 y 右定界符 返回值为处理后的字符串

## 示例
```javascript
// test.js 文件
// 引入 YConsole-colors 包
const YshellColor = require('./Yshell-color');

// 生成颜色代码
let a = YshellColor('<-FB->沉鱼<-BW->落雁<-END-><-FH->闭月<-END-><-FP-><-BY->羞花<-END->','<-','->');
let b = YshellColor('<-FC->沉鱼<-LBC->落雁<-END-><-FR->闭月<-END-><-FC->羞花<-END->','<-','->');
let c = YshellColor('<-FP->沉鱼<-BC->落雁<-END-><-FG->闭月<-END-><-FW->羞花<-END->','<-','->');
let d = YshellColor('<-FG->沉鱼<-FB->落雁<-END-><-FY->闭月<-END-><-FY->羞花<-END->','<-','->');
let e = YshellColor('<-LFC->沉鱼<-BP->落雁<-END-><-FB->闭月<-END-><-FY->羞花<-END->','<-','->');

// 输出结果
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// 执行
node test.js
```

![控制台显示结果](https://github.com/chenbimo/Yshell-color/blob/master/screenshot/1.png)