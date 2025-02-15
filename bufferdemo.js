// objects ->handle binaryData
// file system operations, cryptography, image processing

const bufferOne = Buffer.alloc(10)  // allocate a buffer of 10 bytes -> zeros

console.log(bufferOne)

const bufferFromString = Buffer.from("Hello")
console.log(bufferFromString)

const bufferFromArrayofIntegers = Buffer.from([1,2,3,4,5])
console.log(bufferFromArrayofIntegers)

bufferOne.write("Node js")
console.log('After writing Node js to bufferOne',bufferOne.toString())

console.log(bufferFromString[0])
console.log(bufferFromString.slice(0,3))

const concatBuffers = Buffer.concat([bufferOne,bufferFromString])
console.log(concatBuffers)

console.log(concatBuffers.toJSON())