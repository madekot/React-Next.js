// типы
type Point = {
  // тип можно вынести отдельно
  x: number;
  y: number;
};

type D3Point = Point & {
  // наследование типа
  z: number;
};

type stringOrNumber = string | number;

// интерфейсы
interface IPoint {
  // в ts рекомендуется максимально использовать интерфейсы
  x: number;
  y: number;
}

interface I3DPoint extends IPoint {
  // наследование интерфейса
  z: number;
}

function print(coord: Point) {}
function print2(coord: stringOrNumber) {}
function print3(coord: IPoint) {}

interface Test {
  a: number;
}

interface Test {
  // отличие интерфейсов от типов: интерферы могут добавлять свойства
  b: number;
}

// как работает каст к типам
const z = (point: IPoint) => {
  const d: I3DPoint = point as I3DPoint;
};

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement;
