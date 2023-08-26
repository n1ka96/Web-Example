export default function sum(...args) {
    return args.reduce((t, c) => t + c, 0);
}