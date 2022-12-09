const fs = require('fs');
if (fs.existsSync('./style/team.html')) {
  fs.unlinkSync('./style/team.html');
  console.log('/style/ folder reset!');
}
