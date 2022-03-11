// Make only some properties optional
// Optional<Test, "bar" | "baz">
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;
