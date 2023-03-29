# mk-test-tool-convertvalues

## install

```
npm install mk-test-tool-convertvalues
```

## Usage

JavaScript 
```js
import converValues from 'mk-test-tool-convertvalues'


const myAry = [
  {
    id:1,
    name:'hoge',
    date:'2020-03-04'
  }
]
const keys = ['id','name','date']
const type = 'string'
const convertAry = converValues(myAry,keys,type)
```

## Licence
`MIT`