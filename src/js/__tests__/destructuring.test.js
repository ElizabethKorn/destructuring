import getSpecialAttacks from "../destructuring";

test("should return correct attacks array with descriptions", () => {
  const character = {
    name: "Лучник",
    type: "Bowman",
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: "Двойной выстрел",
        icon: "http://...",
        description: "Двойной выстрел наносит двойной урон",
      },
      {
        id: 9,
        name: "Нокаутирующий удар",
        icon: "http://...",
      },
    ],
  };

  const functionResult = getSpecialAttacks(character);
  const result = [
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http://...",
      description: "Двойной выстрел наносит двойной урон",
    },
    {
      id: 9,
      name: "Нокаутирующий удар",
      icon: "http://...",
      description: "Описание недоступно",
    },
  ];

  expect(functionResult).toEqual(result);
});

test("should return default description if it is missing", () => {
  const character = {
    special: [
      {
        id: 10,
        name: "Теневой удар",
        icon: "http://...",
      },
    ],
  };

  const functionResult = getSpecialAttacks(character);
  const result = [
    {
      id: 10,
      name: "Теневой удар",
      icon: "http://...",
      description: "Описание недоступно",
    },
  ];
  expect(functionResult).toEqual(result);
});

test("should handle empty special array", () => {
  const character = {
    special: [],
  };
  const functionResult = getSpecialAttacks(character);
  expect(functionResult).toEqual([]);
});
