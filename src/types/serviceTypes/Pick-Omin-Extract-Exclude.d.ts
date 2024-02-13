interface PaymentPersistent {
    id: number;
    sum: number;
    from: string;
    to: string;
}
type PaymentWithoutId = Omit<PaymentPersistent, 'id'>;
type PaymentКequisites = Pick<PaymentPersistent, 'from' | 'to'>;
type ExtractExample = Extract<'from' | 'to' | PaymentWithoutId, string>;
type ExcludeExample = Exclude<'from' | 'to' | PaymentWithoutId, string>;
