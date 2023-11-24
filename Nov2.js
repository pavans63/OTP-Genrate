let t = ["HTML","CSS","JS"]
console.log(t)

t.pop()
console.log(t)

t.push("Python")
console.log(t)

t.shift()
console.log(t)

t.unshift("C")
console.log(t)

for(i=0; i<t.length; i++){
console.log(i,t[i])
}

s = document.getElementById('p1')
s.textContent = t[1]

e = Math.random()
console.log(e * 10)

f = Math.floor(6.99)
c = Math.ceil(8.01)

console.log(6.99558878787)
console.log(c)

console.log(Math.floor(3.99))


console.log(Math.floor(Math.random() * 10))

let d =document.getElementById('pass')

function Otp(){
    let Otp =""

    for(i=0;i<6;i++){
        Otp += Math.floor(Math.random()*10)
        }
      d.textContent = Otp
}
 