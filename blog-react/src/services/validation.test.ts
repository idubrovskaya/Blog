import { validationService } from './validation';

describe('Validation', () => {
  test('ввод email irina.dubrovskaya95@gmail.com, функция возвращает пустую строку', () => {
    expect(
      validationService.validateEmail('irina.dubrovskaya95@gmail.com')
    ).toBe('');
  });
});

describe('Validation Password', () => {
  test('Ввод пароля 1234567Qq, функция возвращает пустую строку', () => {
    expect(validationService.validatePassword('1234567Qq')).toBe('');
  });
  test('Пароль использует только цифры и латинские буквы 1234567Qq', () => {
    expect(validationService.validatePassword('1234567Qq')).toBe('');
  });
  test('Пароль должен содержать не менее 1 цифры, 1 прописной и 1 строчной буквы 1234567Qq', () => {
    expect(validationService.validatePassword('1234567Qq')).toBe('');
  });
});
