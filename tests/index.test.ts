import convert from '../src/index';

describe('cssConverter test', () => {
  beforeEach(() => {
    // cleanup
  });

  it('should convert css time', () => {
    expect(convert('1s')).toBe(1000);
  });

  //write more tests for every edge case
  it('should convert css time with milliseconds', () => {
    expect(convert('100ms')).toBe(100);
  });

  it('should convert css time with seconds', () => {
    expect(convert('+2s')).toBe(2000);
  });
  it('should convert css time with seconds', () => {
    expect(convert('+2.5s')).toBe(2500);
  });
  it('should convert css time with seconds', () => {
    expect(convert('+200')).toBe(200);
  });
  it('should convert css time with seconds', () => {
    expect(convert('-1.5s')).toBe(-1500);
  });
  it('should convert css time with seconds', () => {
    expect(convert('-2000')).toBe(-2000);
  });
});