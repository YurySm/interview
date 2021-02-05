// Какое будет выведено значение: let x = 5; alert( x++ ); ?
let x = 5; alert( x++ );
//5
 
// Чему равно такое выражение: [ ] + false - null + true ?
console.log([ ] + false);
//пустой массив [] как пустая строка, происходит конкатенация
//"false" -- string
console.log([ ] + false - null);
// [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// NaN
console.log([ ] + false - null + true);
// [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// NaN
 
// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1; 
let f = y = 2; 
alert(f); //2
 
// Чему равна сумма [ ] + 1 + 2?
console.log([ ] + 1 + 2);
// "12"
 
// Что выведет этот код: alert( "1"[0] )?
alert( "1"[0] );
// 1 к строке можно обратиться как к массиву -- в данном случае первый элемент строки
 
// Чему равно 2 && 1 && null && 0 && undefined ?\
console.log(2 && 1 && null && 0 && undefined);
// && запинается на ложном выражении, код дальше не идет, возвращает то на чем остановился
// null
 
// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
console.log(!!( 1 && 2 ) === (1 && 2));
// [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// false -- первая часть булиновая
 
// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
alert( null || 2 && 3 || 4 );
// 3 -- по табл приор. срабатывает && и возвращает 3
// || - ломается на правде  -- вернется 3 
// при сравнении 3 || 4 -- вернется 3
// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
const a = [1, 2, 3]; 
const b = [1, 2, 3];
console.log(a == b);
// [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// false -- несмотря на одинаковое содержание это разные объекты, как ящики с яблоками
 
// Что выведет этот код: alert( +"Infinity" ); ?
alert( +"Infinity" );
// Infinity -- тип данных число
 
// Верно ли сравнение: "Ёжик" > "яблоко"?
console.log("Ёжик" > "яблоко");
// [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// false
 
// Чему равно 0 || "" || 2 || undefined || true || falsе ?
console.log(0 || "" || 2 || undefined || true || falsе );
// 2 -- или остановился на правде
