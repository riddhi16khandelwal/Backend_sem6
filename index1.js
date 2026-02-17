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

// fs.cpSync("./abes.text","./a1.text");

// fs.unlinkSync("./abes.text"); // to delete file 

const os = require('os');
console.log("system platform", os.platform());
console.log("user info",os.userInfo());
console.log("cpu",os.arch());
console.log("free memory",os.freemem());
console.log("total memory",os.totalmem());
console.log("uptime",os.uptime());
console.log("homedir",os.homedir());
console.log("hostname",os.hostname());