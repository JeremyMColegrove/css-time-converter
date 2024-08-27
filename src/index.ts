export default function convert(cssTime: string): number {
    return parseFloat(cssTime) * (/\ds$/.test(cssTime) ? 1000 : 1);
}