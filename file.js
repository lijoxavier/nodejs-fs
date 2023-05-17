const fs=require('fs')
fs.readFile('test.txt','utf8',(err,data)=>{
    if (err) throw err
    console.log(data);

})

fs.appendFile('test.txt','hai',(err)=>{
    if (err) throw err
    console.log("appended");
})

fs.open('one.txt','w',(err,fd)=>{
    console.log("file opened",fd);
})

//deleting file 
// fs.unlink('one.txt',(err)=>{
//     if (err) throw err
//     console.log("file deleted");
// })