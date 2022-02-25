var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
;
var backgroundColor = Color.Red;
//type assertion
var message;
message = 'abc';
var endsWithC = message.endsWith('c');
var alternativeWay = message.endsWith('c');
//arror function
var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
//custom type
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        //....
    };
    Point.prototype.getDistance = function (another) {
        //.....
    };
    return Point;
}());
var drawPoint = function (point) {
    //....
};
var getDistance = function (pointA, pointB) {
    //....
};
// class
var point = /** @class */ (function () {
    function point() {
    }
    point.prototype.draw = function () {
        console.log('X: ' + this.x + ',Y:' + this.y);
    };
    point.prototype.getDistance = function (another) {
        //.....
    };
    return point;
}());
var Ppoint = new point();
Ppoint.draw();
