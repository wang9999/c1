/**
 * Created by Administrator on 2017/12/21.
 */
// function Point(x, y){
//     this.x = x;
//     this.y = y;
//     this.moveTo = function(x, y){
//         this.x = x;
//         this.y = y;
//     }
// }
// var p1 = new Point(0, 0);
// console.log(p1);
// var p2 = {x: 0, y: 0};
// p1.moveTo(1, 1);
// console.log(p1);
// p1.moveTo.apply(p2, [10, 10]);
// console.log(p2);
// console.log(p1);

// var obj = {
//     name: 'qiutc',
//     foo: function() {
//         console.log(this);
//     },
//     foo2: function() {
//         console.log(this);
//         var _this = this;
//         setTimeout(function() {
//             console.log(this);  // Window
//             console.log(_this);  // Object {name: "qiutc"}
//         }, 1000);
//     }
// };
// obj.foo2();
//、、、、、、、、、、、
// var obj = {
//     name: 'qiutc',
//     foo: function() {
//         console.log(this);
//     },
//     foo2: function() {
//         console.log(this);
//         setTimeout(this.foo, 1000);
//     }
// };
// obj.foo2();
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// window.val = 1;
// var obj = {
//     val: 2,
//     dbl: function () {
//         this.val *= 2;
//         val *= 2;
//         console.log(val);
//         console.log(this.val);
//     }
// };
// // 说出下面的输出结果
// obj.dbl();
// var func = obj.dbl;
// func()
var point = {
    x : 0,
    y : 0,
    moveTo : function(x, y) {
        console.log(this);
        this.x = this.x + x;
        this.y = this.y + y;
    }
};
point.moveTo(1, 1);
console.log(point.x);