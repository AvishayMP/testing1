import { describe, expect, expectTypeOf, test } from 'vitest';
import { fetchUserData, isPolyStr, sortUpper, sqrt, stringLength, sumArray, User } from './funcs';


describe("testings:", () => {
  // Task 1:
  test('string-length', () => {
    expect(stringLength('aaa')).toBe(3);
    expect(stringLength('')).toBe(0);
  });
  // Task 2:
  test('polindrom string', () => {
    expect(isPolyStr('aabbaa')).toBe(true);
    expect(isPolyStr('abcbca')).toBe(false);
  });
  // Task 3:
  test('sorting array low to heigh', () => {
    expect(sortUpper([1, 2, 3, 7, 4, 3])).toEqual([1, 2, 3, 3, 4, 7]);
    expect(sortUpper([1, 2, 3, -7, -4, 3])).toEqual([-7, -4, 1, 2, 3, 3]);
  });
  // Task 4:
  test('sqrt', () => {
    expect(sqrt(4)).toBe(2);
    expect(() => sqrt(-1)).toThrowError('there is no sqrt to negetive number');
  });
  // Task 5:
  test('sumArray', () => {
    const testArr = [1, 2, 3, 4, 5];
    expect(sumArray(testArr)).toBe(testArr.reduce((a, b) => a + b, 0));
    expect(sumArray(testArr)).greaterThan(9);
    expect(testArr.includes(2)).toBe(true);
  });

  // Test 6:
  test('Fetch user:', async () => {
    const user = await fetchUserData(3);
    expect(user).toMatchObject<User>({
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    });
  });
  
  test('Fetch invalid user:', async () => {
    await expect(fetchUserData(80)).rejects.toThrow();
  });
  
  test('Fetch invalid user ID format:', async () => {
    await expect(fetchUserData('not currect input')).rejects.toThrow();
  });

  // Test 7:
  
});