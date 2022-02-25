let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];

const colorRed= 0;
const colorGreen=1;
const colorBlue=2;

enum color {Red,Green,Blue};
let backgroundColor = Color.Red;

//type assertion

let message;
message='abc';
let endsWithC= (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

//arror function

let log = function(message){
    console.log(message);
    
}

let doLog = (message) => console.log(message);


//custom type

class Point{
    x:number;
    y:number;

    draw() {
        //....
    }

    getDistance(another: Point){
        //.....
    }
}

let drawPoint= (point: Point ) =>{
    //....
}

let getDistance = (pointA: Point, pointB: Point)=>{
    //....
}


// class

class point{
    x:number;
    y:number;

    draw() {
        console.log('X: '+ this.x + ',Y:'+ this.y);
    }

    getDistance(another: Point){
        //.....
    }
}

let Ppoint= new point();
Ppoint.draw();

