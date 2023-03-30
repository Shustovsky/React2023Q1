import { Validator } from '../components/ValidationService';

describe('Validator', () => {
  let validator: Validator;

  beforeEach(() => {
    validator = new Validator();
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

  describe('validateRate', () => {
    test('return true if non-empty rate', () => {
      expect(validator.validateRate('5')).toBe(true);
    });
    test('return warning string if empty rate', () => {
      expect(validator.validateRate('Choose')).toBe('This field is required');
    });
  });

  describe('validatePicture', () => {
    test('return true if picture valid', () => {
      const file = new File(['file contents'], 'test.png', { type: 'image/png' });
      const fileList = {
        0: file,
        length: 1,
        item: () => file,
      } as unknown as FileList;
      expect(validator.validatePicture(fileList)).toBe(true);
    });

    test('return warning string if picture isn"t valid', () => {
      const file = new File(['file contents'], 'test.pdf', { type: 'image/png' });
      const fileList = {
        0: file,
        length: 1,
        item: () => file,
      } as unknown as FileList;
      expect(validator.validatePicture(fileList)).toBe(
        'Supported formats: png, jpg, jpeg, bmp, gif, svg'
      );
    });
  });
});
