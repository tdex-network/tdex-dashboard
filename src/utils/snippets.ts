export function snippets(str: string): string {
  return str.replace(str[0], str[0].toUpperCase());
}

// Help Typescript filtering undefined values
export function filterUndef<T>(ts: (T | undefined)[]): T[] {
  return ts.filter((t: T | undefined): t is T => !!t);
}
