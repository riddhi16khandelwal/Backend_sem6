const fs = require('fs');
// fs.writeFileSync("./ds-b.text","hello ABES COLLEGE STUDENT");
// fs.writeFile("./abes.text","we are codeing in node js",()=>{ });

// const result = fs.readFileSync("./abes.text","utf-8")
//  console.log(result);

// fs.readFile("./abes.text","utf-8",(err,data)=>{
//     if(err){
//     console.log("Error",err);
// }
// else{
//     console.log(data);
// }
// });
// fs.appendFileSync("./abes.text",` PHD`);

fs.cpSync("./abes.text","./a1.text");