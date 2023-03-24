import { FormPage } from '../pages/FormPage';

describe('FormPage', () => {
  let formPage: FormPage;
  beforeEach(() => {
    formPage = new FormPage({});
  });

  describe('handleNameChange', () => {
    test('undefined', () => {
      expect(formPage.handleNameChange()).toBe(undefined);
    });
  });

  describe('handlePictureChange', () => {
    test('undefined', () => {
      expect(formPage.handlePictureChange()).toBe(undefined);
    });
  });

  describe('handleGenderChange', () => {
    test('undefined', () => {
      expect(formPage.handleGenderChange()).toBe(undefined);
    });
  });

  describe('handleTextChange', () => {
    test('undefined', () => {
      expect(formPage.handleTextChange()).toBe(undefined);
    });
  });
});

describe('FormPage', () => {
  let formPage: FormPage;
  beforeEach(() => {
    formPage = new FormPage({});
    formPage.state.name = '123';
  });

  describe('handleNameChange', () => {
    test('undefined', () => {
      expect(formPage.handleNameChange()).toBe(undefined);
    });
  });
});
