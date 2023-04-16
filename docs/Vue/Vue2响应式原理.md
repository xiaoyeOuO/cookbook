# Vue2响应式原理

## 80分的回答
1. 先利用Object.defineProperty以及遍历，将对象中的每一个属性都设置getter和setter
2. 当页面使用render函数渲染虚拟DOM时，会触发属性中的getter，此时getter中的会有一个watcher来收集依赖，也就是说这个watcher会记录下当前时哪个render函数调用的该属性。
3. 当修改该属性时，会调用该属性的setter，此时watcher会将之前记录下来的具体的调用render函数方，并且重新触发render函数，以更新页面。