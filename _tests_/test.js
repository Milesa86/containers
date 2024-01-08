import Validator from "../src/js/nickname";

test('имя не должно начинаться с цифр', () => {
    const nickName = new Validator('1username');
    expect(nickName.validateUsername()).toBe(false);
});

test('имя не должно заканчиваться на цифру', () => {
    const nickName = new Validator('username1');
    expect(nickName.validateUsername()).toBe(false);
});

test('имя не должно заканчиваться на символ подчеркивания', () => {
    const nickName = new Validator('username_');
    expect(nickName.validateUsername()).toBe(false);
});

test('имя не должно начинаться с символа подчеркивания', () => {
    const nickName = new Validator('_username');
    expect(nickName.validateUsername()).toBe(false);
});

test('имя не должно начинаться с тире', () => {
    const nickName = new Validator('-username');
    expect(nickName.validateUsername()).toBe(false);
});

test('имя не должно заканчиваться на тире', () => {
    const nickName = new Validator('username-');
    expect(nickName.validateUsername()).toBe(false);
});

test('имя не должно содержать более трех цифр подряд', () => {
    const nickName = new Validator('username111');
    expect(nickName.validateUsername()).toBe(false);
});

test('имя должно состоять из латинских букв, цифр, тире и нижнего подчеркивания', () => {
    const nickName = new Validator('Username');
    expect(nickName.validateUsername()).toBe(true);
});
