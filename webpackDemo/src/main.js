import sum from "./js/sum";
// import { mul } from "./js/math";
import "./css/iconfont.css";
import "./css/index.css";
import "./less/index.less";
import "./sass/index.sass";
import "./sass/index.scss";
import "./stylus/index.styl";

console.log(sum(1, 2, 3));
console.log(1111);
// console.log(mul(3, 3));

if (module.hot) {
    module.hot.accept("./js/sum");
}

document.getElementById('btn').onclick = function() {
    import(/* webpackChunkName: "math" */'./js/math').then(({mul}) => {
        console.log(mul(3, 3));
    }).catch((err) =>{
        console.log('error')
    })
}