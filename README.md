# mk-test-tool-convert-values

## install

```
npm install mk-test-tool-convert-values
```

## Usage

This package converts the `Object[]` set in the first argument to any type.
The second argument is a `String[]` with the key you want to convert from the object you put in the first argument
The third argument is set to the type you want to convert as a `String`.

The types that can be specified for the third argument are as follows

|  string  |  type  |
| ---- | ---- |
|  `'string'`  |  `String`  |
|  `'number'`  |  `Number`  |
|  `'boolean'`  |  `Boolean`  |
|  `'null'`  |  `null`  |
|  `'date'`  |  `Date`  |
|  `'undefined'`  |  `undefined`  |
|  `'regexp'`  |  `Regexp`  |


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