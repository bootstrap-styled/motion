/**
 * Testing our styled Filter utils
 */

import {
  makeBlur,
  makeContrast,
  makeBrightness,
  makeGrayscale,
  makeHueRotate,
  makeInvert,
  makeOpacity,
  makeSaturate,
  makeSepia,
  makeDropShadow,
} from '../styledFilter';

describe('styledFilter', () => {
  const distance = '10px';
  const amplification = '1';
  const rotation = '45deg';
  describe('makeBlur', () => {
    it('should returns an object', () => {
      expect(typeof makeBlur({ distance })).toBe('object');
    });
  });
  describe('makeContrast', () => {
    it('should returns an object', () => {
      expect(typeof makeContrast({ amplification })).toBe('object');
    });
  });
  describe('makeBrightness', () => {
    it('should returns an object', () => {
      expect(typeof makeBrightness({ amplification })).toBe('object');
    });
  });
  describe('makeGrayscale', () => {
    it('should returns an object', () => {
      expect(typeof makeGrayscale({ amplification })).toBe('object');
    });
  });
  describe('makeHueRotate', () => {
    it('should returns an object', () => {
      expect(typeof makeHueRotate({ rotation })).toBe('object');
    });
  });
  describe('makeInvert', () => {
    it('should returns an object', () => {
      expect(typeof makeInvert({ amplification })).toBe('object');
    });
  });
  describe('makeOpacity', () => {
    it('should returns an object', () => {
      expect(typeof makeOpacity({ amplification })).toBe('object');
    });
  });
  describe('makeSepia', () => {
    it('should returns an object', () => {
      expect(typeof makeSepia({ amplification })).toBe('object');
    });
  });
  describe('makeSaturate', () => {
    it('should returns an object', () => {
      expect(typeof makeSaturate({ amplification })).toBe('object');
    });
  });
  describe('makeDropShadow', () => {
    it('should returns an object', () => {
      expect(typeof makeDropShadow({ amplification })).toBe('object');
    });
  });
});
