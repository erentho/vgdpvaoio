const a = [1.1 , 2.2, -2, 3.3, -1, 5.5, 5.99, 7.49, 7.9999, -2.2]
let poscount = 0
for (let i = 0; i < a.length; i++) {if (a[i]>0){poscount++}}
let t = 0
for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] > 0) {t++;
        if (t > 3) {a[i] = Math.round(a[i]);}}}

console.log(a)