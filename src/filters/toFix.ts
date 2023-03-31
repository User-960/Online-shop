export default function toFix(value: number): string {
  value.toFixed(2);
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}