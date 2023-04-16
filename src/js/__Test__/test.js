import Character from '../app';

test('Character type test', () => {
  const obj = new Character('name', 'parent', 15, 20);
  expect(obj.name).toBe('name');
});

test('Character test error name', () => {
  function setName() {
    return new Character('n', 'parent', 15, 20);
  }
  expect(setName).toThrow('Имя должно состоять от 2 до 11 символов');
});

test('Character test error type', () => {
  function setName() {
    return new Character('name', 1, 15, 20);
  }
  expect(setName).toThrow('Тип должен быть строчным значением');
});

test('Character type damage()', () => {
  const obj = new Character('name', 'parent', 15, 20);
  obj.damage(20);
  expect(obj.health).toBe(84);
});

test('Character type damage()', () => {
  const obj = new Character('name', 'parent', 15, 20);
  obj.health = 10;
  obj.damage(20);
  expect(obj.health).toBe(0);
});

test('Character type levelUp()', () => {
  const obj = new Character('name', 'parent', 15, 20);
  obj.health = 20;
  obj.levelUp();
  expect(obj.health).toBe(100);
});

test('Character test error levelUp()', () => {
  function setName() {
    const obj = new Character('name', 'parent', 15, 20);
    obj.health = 0;
    obj.levelUp();
  }
  expect(setName).toThrow('Нельзя повысить левел умершего');
});
