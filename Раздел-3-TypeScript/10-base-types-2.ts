let a1: number = 4;
let c1: boolean = true;

let b1 = 'asdasdas'; //если нет конкретного типа, ts попробует догадаться какой тип в переменной и присвоит его
// b = 5; // Тип "число" не может быть присвоен типу "строка"
// b = 'blablabla' // так переменная перезапишется без ошибок

// const d = a + c; // Оператор '+' нельзя применять к типам 'number' и 'boolean'.
// const d: string[] = ['asda', 1, 'asdasda']; // Тип "число" не может быть присвоен типу "строка".

let e1: any = 3; // крайне не рекомендуеться использовать тип any, так мы теряем всю защиту от типизации
e = 'kadabra'; // всё хорошо, ошибок не будет

//                         ↓↓↓↓ выходящий тип данных из функции
function test1(a: string): string {
  // Параметр 'a' неявно имеет тип 'any' будет ошибка
  return '';
}

//                         ↓↓↓↓ варианты выходящий типов данных из функции
function test2(a: string): string | string {
  // Параметр 'a' неявно имеет тип 'any' будет ошибка
  return '';
}

function getSum(a: number | number[]) {
  if (Array.isArray(a)) {
  }
}

//                         ↓↓↓↓ функция ничего не вернет
function test3(a: number): void {
  // Параметр 'a' неявно имеет тип 'any' будет ошибка
}

//                                          ↓↓↓↓↓↓ ? в этом случае позволяет указать не обязательный параметр функции
function countCoord(coord: { lat: number; long?: number }) {}

function printIt(id: number | string) {
  if (typeof id === 'number') {
    console.log(id.toString());
    return;
  }

  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  }

  // без проверки типов typeof console.log(id.toString()); будет выдавать ошибку
}
