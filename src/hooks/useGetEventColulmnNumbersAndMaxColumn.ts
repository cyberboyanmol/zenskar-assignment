export type Interval = [number, number];

class MinHeap<T> {
  private data: T[];
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.data = [];
    this.comparator = comparator;
  }

  push(item: T) {
    this.data.push(item);
    this.data.sort(this.comparator);
  }

  pop(): T | undefined {
    return this.data.shift();
  }

  top(): T | undefined {
    return this.data[0];
  }

  size(): number {
    return this.data.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  clear() {
    this.data = [];
  }
}

export const useGetEventColulmnNumbersAndMaxColumn = (a: Interval[]) => {
  const n = a.length;
  const pq = new MinHeap<number>((x, y) => x - y);
  let maxc = 0;
  const colNo: number[] = new Array(n);

  for (let i = 0; i < n; i++) {
    while (!pq.isEmpty() && pq.top()! <= a[i][0]) {
      pq.pop();
    }
    pq.push(a[i][1]);
    maxc = Math.max(maxc, pq.size());
  }

  pq.clear();
  for (let i = 1; i <= maxc; i++) {
    pq.push(i);
  }

  const pp = new MinHeap<Interval>((x, y) => x[0] - y[0]);
  for (let i = 0; i < n; i++) {
    while (!pp.isEmpty() && pp.top()![0] <= a[i][0]) {
      pq.push(pp.top()![1]);
      pp.pop();
    }
    colNo[i] = pq.top()!;
    pp.push([a[i][1], pq.top()!]);
    pq.pop();
  }

  return {
    EventColumnNumbers: colNo,
    MaxColumn: maxc,
  };
};
