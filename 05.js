// var fn = [];
// for (var i = 0; i < 10; i++) {
//     fn[i] = function() {
//         console.log(i)
//     }
// }
// fn[1]() //10
//可用let定义局部变量实现与闭包相同的效果
var fn = [];
for (let i = 0; i < 10; i++) {
    fn[i] = function() {
        console.log(i)
    }
}
fn[1]() //1