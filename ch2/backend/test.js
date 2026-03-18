console.log('first')
setTimeout(() => {
  console.log('second')
}, 10)
setTimeout(() => {
  console.log('third')
}, 0)
console.log('fourth')
