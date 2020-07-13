/***************************
 * CHANGE BACKGROUND COLOR
 */

var color = ["blue", "green", "brown", "red", "pink", "yellow", "purple"]
var i = 0;
const body = document.querySelector('body') //DOM a.k.a HTML si JS object
body.style.backgroundColor = 'pink'

var j = 0
document.querySelector("button").addEventListener("click", function(){
    j = i < color.length ? i++ : 0;

    // j = 1
    // i = 1

    // if ( i < color.length) {
    //     j = i++
    //     // j = 0
    //     // i = 1
    // } else {
    //     i = 0
    // }

    // condition ? true_value: false_value // ternary operation

    // if (condition ) {
    //     true_value
    // } else {
    //     false_value
    // }

    document.querySelector("body").style.background = color[j]
    
})
/* Duhet mu kon i=i se tana me ndrru me numer veq ni her i ndrron ngjyrat edhe bllokohet te njgyra vjollce!*/
