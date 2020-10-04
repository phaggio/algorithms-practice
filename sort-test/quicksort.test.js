import quicksort from '../sort/quicksort';

describe('quicksort()', () => {
  it('should return a sorted array', () => {
    const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const actual = quicksort(arr, 0, arr.length - 1);

    expect(actual).toEqual(expected);
  });

  it('should return a sorted array', () => {
    const arr = [1, 3, 2, 5, 9, 8, 1, 3, 2, 5, 9, 8, 7, 10, 6, 4, 7, 10, 6, 4];
    const expected = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]
    const actual = quicksort(arr, 0, arr.length - 1);

    expect(actual).toEqual(expected);
  });

  it('should return a sorted array', () => {
    const arr = [2, 1];
    const expected = [1, 2]
    const actual = quicksort(arr, 0, arr.length - 1);

    expect(actual).toEqual(expected);
  });

  it('should return a sorted array', () => {
    const arr = [1];
    const expected = [1]
    const actual = quicksort(arr, 0, arr.length - 1);

    expect(actual).toEqual(expected);
  });

  it('should return a sorted array', () => {
    const arr = [3, 2, 1];
    const expected = [1, 2, 3]
    const actual = quicksort(arr, 0, arr.length - 1);

    expect(actual).toEqual(expected);
  });

  it('should return a sorted array', () => {
    const arr = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5]
    const actual = quicksort(arr, 0, arr.length - 1);

    expect(actual).toEqual(expected);
  });

  it('should return a sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5]
    const actual = quicksort(arr, 0, arr.length - 1);

    expect(actual).toEqual(expected);
  });

})