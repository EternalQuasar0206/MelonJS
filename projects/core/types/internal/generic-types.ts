type UUID = `${string}-${string}-${string}-${string}-${string}`;
type MimeType = `${string}/${string}`;
type Primitive = string | number | boolean | bigint | null | symbol | Primitive[];

interface OutputFriendly {
    toLoggableOutput(): Record<string, Primitive> | Primitive;
}

interface Prototype<T> {
    constructor: new (...args: any) => T
}

interface ScopedValue {
    dispose: Function; 
}

export { ScopedValue, Prototype, Primitive, OutputFriendly, UUID, MimeType }