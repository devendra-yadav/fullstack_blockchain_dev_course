//f(x)=x^b +x* (e^(b*m))
//f'(x)=b*x + x*b*m*e;
//if x =m; f'(x) = b*m + b*e*m^2
//f''(x)=b*m + 2*b*e*m;
function getSecondDerivative(b, m){
    //x=m, //f''(x)=b*m + 2*b*e*m;
    let e=2.718;
    let secDerivative = b*m + 2*b*e*m;

    return secDerivative;
    
}

let b=5;
let m=3;

let secondDerivative = getSecondDerivative(b, m);
console.log("Second derivate : "+secondDerivative);