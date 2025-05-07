// Input = 2
// Output = 1,9

// Input = 3
// Output = 1,9,36

// Input = 4
// Output = 1,9,36,100

// Pattern = Math.pow((n(n+1)/2),2)

const n: number = 4;
for (let i =1; i<= n; i++){
   console.log((i*(i+1)/2)**2)
}
