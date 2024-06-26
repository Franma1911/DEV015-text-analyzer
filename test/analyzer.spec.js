//const analyzer = require('../analyzer');
import analyzer from '../src/analyzer.js';

describe('analyzer', () => {
  const TEST_TEXT_NO_NUMBERS = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const TEST_TEXT_NUMBERS = 'If I have 8 apples and I buy 2 more, how many apples do I have in total?';
  const TEST_TEXT_DECIMALS = 'Calculate the sum of 1.65 plus 0.15 plus 1.10.';
  const TEST_TEXT_NOT_A_NUMBER = 'This is not a number: 41u0003jot';

  describe('getWordCount', () => {
    it('should return 19 for "' + TEST_TEXT_NO_NUMBERS + '"', () => {
      expect(analyzer.getWordCount(TEST_TEXT_NO_NUMBERS)).toBe(19);
    });
  });

  describe('getCharacterCount', () => {
    it('should return 123 for "' + TEST_TEXT_NO_NUMBERS + '"', () => {
      expect(analyzer.getCharacterCount(TEST_TEXT_NO_NUMBERS)).toBe(123);
    });
  });

  describe('getCharacterCountExcludingSpaces', () => {
    it('should return 102 for "' + TEST_TEXT_NO_NUMBERS + '"', () => {
      expect(analyzer.getCharacterCountExcludingSpaces(TEST_TEXT_NO_NUMBERS)).toBe(102);
    });
  });
  describe('getAverageWordLength', () => {
    it('should return 5.53 for "' + TEST_TEXT_NO_NUMBERS + '"', () => {
      expect(analyzer.getAverageWordLength(TEST_TEXT_NO_NUMBERS)).toBe('5.5');
    });
  });
  
  describe('getNumberCount', () => {
    it('should return 0 for "' + TEST_TEXT_NOT_A_NUMBER + '"', () => {
      expect(analyzer.getNumberCount(TEST_TEXT_NOT_A_NUMBER)).toBe(0);
    });

    it('should return 3 for "' + TEST_TEXT_DECIMALS + '"', () => {
      expect(analyzer.getNumberCount(TEST_TEXT_DECIMALS)).toBe(3);
    });

    it('should return 2 for "' + TEST_TEXT_NUMBERS + '"', () => {
      expect(analyzer.getNumberCount(TEST_TEXT_NUMBERS)).toBe(2);
    });
  });

  describe('getNumberSum', () => {
    it('should return 0 for "' + TEST_TEXT_NO_NUMBERS + '"', () => {
      expect(analyzer.getNumberSum(TEST_TEXT_NO_NUMBERS)).toBe(0);
    });

    it('should return 0 for "' + TEST_TEXT_NOT_A_NUMBER + '"', () => {
      expect(analyzer.getNumberSum(TEST_TEXT_NOT_A_NUMBER)).toBe(0);
    });

    it('should return 2.9 for "' + TEST_TEXT_DECIMALS + '"', () => {
      expect(analyzer.getNumberSum(TEST_TEXT_DECIMALS)).toBe(2.9);
    });

    it('should return 10 for "' + TEST_TEXT_NUMBERS + '"', () => {
      expect(analyzer.getNumberSum(TEST_TEXT_NUMBERS)).toBe(10);
    });    
  });

});