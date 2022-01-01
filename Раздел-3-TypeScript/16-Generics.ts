// Generics позволяет использовать функции и другие объекты для разных типов данных
function logTime(num: number): number {
  console.log(new Date());
  return num;
}
// но что будет если такою же функцию
// мы хотим использовать с строковыми параметрами
// или дублирование кода тип any НО тут на помощь
// приходят дженерики

function logTime2<T>(num: T): T {
  console.log(new Date());
  return num;
}

logTime2<string>('asd');
