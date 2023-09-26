
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};

export const stringLength = (str: string): number => {
    return str.length;
}

export const isPolyStr = (str: string): boolean => {
    let isPoly = true;
    for (let i = 0; isPoly && (i < str.length / 2); i++) {
        isPoly = isPoly && str[i] === str[str.length - i - 1];
    }
    return isPoly;
}

export const sortUpper = (arr: Array<number>): Array<number> => {
    return arr.sort((a, b) => a - b);
}

export const sqrt = (num: number): number | Error => {
    if (num >= 0) {
        return Math.sqrt(num);
    }
    else {
        throw new Error('there is no sqrt to negetive number');
    }
}

export const sumArray = (arr: Array<number>): number => {
    return arr.reduce((a, b) => a + b, 0);
}

export const fetchUserData = async (userId: number | string): Promise<User | null> => {
    if (typeof userId !== 'number' && typeof userId !== 'string') {
      throw new Error('Invalid user ID format');
    }
  
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      
      return data as User;
    } else {
      throw new Error('User ID not found');
    }
  };