const convertValues = (arr,keys,type)=>{
  let result = arr.map(obj => {
    let converted = {};
    keys.forEach(key => {
      if (obj.hasOwnProperty(key)) {
        let value = obj[key];
        switch (type) {
          case 'number':
            converted[key] = typeof value === 'string' ? Number(value) : value;
            break;
          case 'string':
            converted[key] = typeof value === 'number' ? String(value) : value;
            break;
          case 'date':
            converted[key] = typeof value === 'string' ? new Date(value) : value;
            break;
          case 'boolean':
            converted[key] = Boolean(value);
            break;
          case 'null':
            converted[key] = null;
            break;
          case 'undefined':
            converted[key] = undefined;
            break;
          case 'regexp':
            converted[key] = RegExp(value);
            break;
          default:
            converted[key] = value;
            break;
        }
      } else {
        converted[key] = undefined;
      }
    });
    return converted;
  });
  return result;
}

module.exports = convertValues