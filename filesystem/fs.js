const fs=require('fs')
fs.writeFile("write.txt","hi welcome to write file",(err)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log("write file created successfully")
    }
})
fs.readFile("write.txt","utf8",(err,data)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})