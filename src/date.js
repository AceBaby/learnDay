
const regExp = new RegExp(/(\d{4})(\d{2})(\d{2})/);
const pattern = /(\d{2})(\d{2})/;
const str = '0123'
console.log(str.replace(pattern, '$1月$2日'));