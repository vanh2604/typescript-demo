const a: number = 1;

const b: string[] = ['red', 'avca'];

const logA = (i: number): number => {
  return i;
};

const d: string[] = b.map((e: string): string => {
  return e.toLowerCase();
});

interface Vehicle {
  name: string;
  type: string;
}

const Car = {
  name: 'Viet Anh',
  type: 'car',
};
