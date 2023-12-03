const buffer =  Buffer.from('Buffer Demo');
console.log('buffer = ',buffer)
console.log('buffer json = ',buffer.toJSON())
console.log('buffer tostring before = ',buffer.toString())

buffer.write('hello')//since buffers have limited memory ,the character set is overwritten

console.log('buffer tostring after = ',buffer.toString())
