const { readFile, writeFile } = require('fs')

//utf8 es requerido para que no nos tire buffer
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt', 
            `Here is the result : ${first}, ${second}`
        ,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
        })
    })
})


