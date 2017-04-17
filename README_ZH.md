# reactjs的loading库
[Document](https://ppeerit.github.io/ppeerit-react-loading/)

[中文文档](https://ppeerit.github.io/ppeerit-react-loading/README_ZH.html)
## 安装
使用 npm 
```sh
npm install ppeerit-react-loading --save
```
## 引入组件到你的项目
```js
// ES6
import Loading from 'ppeerit-react-loading';
```
## 现在可以将组件在你的render函数中使用了
```js
//...
render() {
    return (
        <div>
            <Loading size="32" type="spin" color="#0099FF"/>
        </div>
    )
}
//...
```
## 参数
`Loading` 组件有 `size`, `type`, `color` 属性:

- `size`:`number` 为组件的 `width` 和 `height`
- `type`:`string` 选择loading的样式:
    * `spin`
    * `spinAround`
    * `spinLong`
    * `bars`
    * `barsTop`
    * `barsBottom`
    * `barsStagger`
    * `barsTransparent`
    * `barsRoundTransparent`
- `color`:`string` 为组件的颜色