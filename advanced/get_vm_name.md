## 获取调用者VM名称
代码：
test.js:
```JavaScript
var vm = require("vm");
var sbox = new vm.SandBox({
	e: () => {
		return () => {
			var a={};
			Error.captureStackTrace(a);
			console.log(a.stack);
		};
	}
}, "myvm");
sbox.require("./test2.js");
```
test2.js:
```JavaScript
//...
//... Comment paddings.
require("e")();
```
运行：
```Shell
fibjs test.js
```
结果（所有文件位于`L:\akisora\dev\akis\`下）：
```
Error
    at vm.SandBox.e (L:\akisora\dev\akis\test.js:5:9)
    at Object.<anonymous> (myvm:L:\akisora\dev\akis\test2.js:3:13)
    at Object.<anonymous> (L:\akisora\dev\akis\test.js:9:6)
```