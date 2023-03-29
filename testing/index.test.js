import convertValues from "../index";

const keys = ['id','name','date']
const testCases = [
  {
    testData:[{
      id:'1',
      name:'john',
      date:'1997-02-14'
    }],
    type:'string',
    expected:[{
      id:'1',
      name:'john',
      date:'1997-02-14'
    }]
  },
  {
    testData:[{
      id:'1',
      name:'john',
      date:'1997-02-14'
    }],
    type:'number',
    expected:[{
      id:1,
      name:NaN,
      date:NaN,
    }]
  },
  {
    testData:[{
      id:'1',
      name:'john',
      date:'1997-02-14'
    }],
    type:'boolean',
    expected:[{
      id: true,
      name:true,
      date:true ,
    }]
  },
  {
    testData:[{
      id:'1',
      name:'john',
      date:'1997-02-14'
    }],
    type:'null',
    expected:[{
      id: null,
      name:null,
      date:null ,
    }]
  },
  {
    testData:[{
      id:'1',
      name:'john',
      date:'1997-02-14'
    }],
    type:'undefined',
    expected:[{
      id: undefined,
      name:undefined,
      date:undefined ,
    }]
  },
  {
    testData:[{
      id:'1',
      name:'john',
      date:'1997-02-14'
    }],
    type:'regexp',
    expected:[{
      id:RegExp('1'),
      name:RegExp('john'),
      date:RegExp('1997-02-14')
    }]
  },
  {
    testData:[{
      id:'1',
      name:'john',
      date:'1997-02-14'
    }],
    type:'',
    expected:[{
      id:'1',
      name:'john',
      date:'1997-02-14'
    }]
  },
]

describe('convertValuesのテスト', () => {
  test.each(testCases)('「$type」型で変換',({testData,type,expected}) =>{
    expect(convertValues(testData,keys,type)).toStrictEqual(expected)
  })
});
