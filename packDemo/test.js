const reader = new FileReader();
console.log(11111);
async function load() {
    const test = await import('./dist/main');
    return test;
    console.log(11112222);
}
console.log(22222);