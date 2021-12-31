let a: number = 4;
let c: boolean = true;

let b = 'asdasdas'; //если нет конкретного типа, ts попробует догадаться какой тип в переменной и присвоит его
// b = 5; // Тип "число" не может быть присвоен типу "строка"
// b = 'blablabla' // так переменная перезапишется без ошибок

// const d = a + c; // Оператор '+' нельзя применять к типам 'number' и 'boolean'.
// const d: string[] = ['asda', 1, 'asdasda']; // Тип "число" не может быть присвоен типу "строка".

let e: any = 3; // крайне не рекомендуеться использовать тип any, так мы теряем всю защиту от типизации
e = 'kadabra'; // всё хорошо, ошибок не будет

//                         ↓↓↓↓ выходящий тип данных из функции
function test11(a: string): string {
  // Параметр 'a' неявно имеет тип 'any' будет ошибка
  return '';
}

//                         ↓↓↓↓ варианты выходящий типов данных из функции
function test22(a: string): string | string {
  // Параметр 'a' неявно имеет тип 'any' будет ошибка
  return '';
}

function getSum1(a: number | number[]) {
  if (Array.isArray(a)) {
  }
}

//                         ↓↓↓↓ функция ничего не вернет
function test33(a: number): void {
  // Параметр 'a' неявно имеет тип 'any' будет ошибка
}

//                                          ↓↓↓↓↓↓ ? в этом случае позволяет указать не обязательный параметр функции
function countCoord1(coord: { lat: number; long?: number }) {}

function printIt1(id: number | string) {
  if (typeof id === 'number') {
    console.log(id.toString());
    return;
  }

  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  }

  // без проверки типов typeof console.log(id.toString()); будет выдавать ошибку
}
