type valueOf<T> = T[keyof T];

function mapObject<T, K extends keyof T, R>(obj: T, fn: (v: valueOf<T>, k: K, i: number) => R): { [key in K]: R } {
  return Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k as any, fn(v, <K>k, i)]));
}

export { mapObject };
