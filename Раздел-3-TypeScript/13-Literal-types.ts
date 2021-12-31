type actionType = 'down' | 'up';

function performAction(action: actionType): 1 | -1 {
  switch (action) {
    case 'down':
      return 1;
    case 'up':
      return -1;
  }
}

interface ComplexAction {
  s: string;
}

// комбинация обычных типов с обычными интерфейсами
function performAction2(action: actionType | ComplexAction) {
  switch (action) {
    case 'down':
      return 1;
    case 'up':
      return -1;
  }
}
