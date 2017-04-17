# Loading svg for ReactJS
[Document](https://ppeerit.github.io/ppeerit-react-loading/)

[中文文档](https://ppeerit.github.io/ppeerit-react-loading/README_ZH.html)
## Installation
use npm 
```sh
npm install ppeerit-react-loading --save
```
## Import into your project
```js
// ES6
import Loading from 'ppeerit-react-loading';
```
## Add Loading Component to render function
```jsx
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
## Options
`Loading` Component has `size`, `type`, `color` props:

- `size`:`number` is the Loading Component's `width` and `height`
- `type`:`string` is the style for Loading Component:
    * `spin`
    * `spinAround`
    * `spinLong`
    * `bars`
    * `barsTop`
    * `barsBottom`
    * `barsStagger`
    * `barsTransparent`
    * `barsRoundTransparent`
- `color`:`string` is the Loading Component's color