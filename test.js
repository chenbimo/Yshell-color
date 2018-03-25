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