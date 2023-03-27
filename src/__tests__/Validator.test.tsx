import { Validator } from '../components/ValidationService';

describe('Validator', () => {
  let validator: Validator;

  beforeEach(() => {
    validator = new Validator();
  });

  describe('validateText', () => {
    test('text length is less than 5', () => {
      expect(validator.validateText('abcd')).toBe(true);
    });

    test('text length is greater than or equal to 5', () => {
      expect(validator.validateText('abcde')).toBe(false);
      expect(validator.validateText('abcdef')).toBe(false);
    });
  });

  describe('validateDate', () => {
    test('input date is greater than current date', () => {
      expect(validator.validateDate('2025-03-25')).toBe(
        'Your date of birth should be less than today'
      );
    });

    test('input date is less than or equal to current date', () => {
      expect(validator.validateDate('2023-03-24')).toBe(true);
      expect(validator.validateDate('2022-03-24')).toBe(true);
    });
  });
});
