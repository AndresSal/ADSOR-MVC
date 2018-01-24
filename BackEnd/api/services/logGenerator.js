module.exports = {
  generateLog:function(operacion)
  {
    var fs = require('fs');
    var child = require('child_process');

    fs.writeFileSync('log.txt',"Operation "+operacion+" started at "+moment().format() + "\n", "UTF-8",{'flags':'a+'});

    child.exec('uptime', function(error, stdout, stderr){
      fs.writeFileSync('log.txt',stdout,"UTF-8",{'flags':'a+'});
    });
    child.exec('free', function(error, stdout, stderr){
      fs.writeFileSync('log.txt',stdout,"UTF-8",{'flags':'a+'});
    });

    var hrTime = process.hrTime();
    var tFinal = (hrTime[0] * 100000 + hrTime[1] /1000);
    fs.writeFileSync('log.txt',"Total time "+tFinal+" microseconds \n","UTF-8",{'flags':'a+'});
  }
}
