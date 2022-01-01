enum Direction {
  // по умолчанию присваиваеться тип number и порядок с 0
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  // можно присвоить и строковый тип, но в
  // таком случае необходимо присвоить конкретное значение каждому
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

enum Decision {
  // также enum может быть гетерагенные смешанные
  Yes = 1,
  No = 'No',
}

enum Decision2 {
  // также enum может быть гетерагенные смешанные
  Yes = 1,
  No = calcEnum(),
}

function calcEnum() {
  // есть расчетные enum мы используем в них функцию, они могут быть только числовыми!
  return 2;
}
