# mk-test-tool-convert-values

## Install

```
npm install mk-test-tool-convert-values
```

## Usage
This package changes the Type of test data required for unit testing of anomalous systems, and provides support for testing to determine whether the target function is capable of handling anomalous systems.

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


### jest

####  test function 
```js
function demoFunc(obj){
  return typeof obj.name === 'string' ? true : false
}
```

#### jest
```js
import converValues from 'mk-test-tool-convert-values'
import demoFunc from '..'

const testCasesTrue = [
  {
    testData:[
      {
        name:'john'
      },
    ],
    keys:['name'],
    type:'string',
    expected:true
  }
]
describe('test demoFunc true', () => {
  test.each(testCases)('「$type」',({testData,type,keys,expected}) =>{
    expect(demoFunc(convertValues(testData,keys,type))).toBe(expected)
  })
});

const testCasesFalse = [
  {
    testData:[
      {
        name:'john'
      },
    ],
    keys:['name'],
    type:'number',
    expected:false
  }
]
describe('test demoFunc false', () => {
  test.each(testCases)('「$type」',({testData,type,keys,expected}) =>{
    expect(demoFunc(convertValues(testData,keys,type))).toBe(expected)
  })
});

```

## Licence
`MIT`