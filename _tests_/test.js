import Team from "../src/js/set-container";
import ErrorRepository from "../src/js/map-container";

let errorRepository = new ErrorRepository();
errorRepository.setError(100, "ошибка подключения");

test("не находит ошибку и показывает текст", () => {
  expect(errorRepository.translate(222)).toBe("Unknown error");
});

test("находит ошибку и показывает текст ошибки", () => {
  expect(errorRepository.translate(100)).toBe("ошибка подключения");
});

let team = new Team();

let character = 'мечник';

const characters = [
'мечник', 'маг', 'лучник'
];

test("добавление игрока в команду", () => {
  team.add(character);
  expect(team.members.has(character)).toBe(true);
});

test("ошибка при добавлении такого же персонажа", () => {
    const team = new Team();
    const character = {name: "Sam", type: "Bowman"};

    team.add(character);

    expect(() => team.add(character)).toThrowError(new Error('Такой игрок уже есть в команде'));
});

test("добавление нескольких персонажей", () => {
  team.addAll(...characters);
  expect(team.members.has(characters[0])).toBe(true);
  expect(team.members.has(characters[2])).toBe(true);
});

test("массив из коллекции", () => {
  team.toArray();
  expect(Array.isArray(team.members)).toBe(true);
});
