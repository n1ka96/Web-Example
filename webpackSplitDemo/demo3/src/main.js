import sum from "./math";

console.log(sum(1, 2, 3));
console.log('hello main');

document.getElementById('btn').onclick = function() {
    import("./count").then((res) => {
        console.log('success' + res);
    }).catch((err) => {
        console.log('error' + err);
    })
}