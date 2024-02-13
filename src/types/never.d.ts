declare function generateError(message: string): never;
declare function dumpError(): never;
type paymentAction = 'refund' | 'checkout';
declare function processAction(action: paymentAction): void;
declare function isString(x: string | number): boolean;
