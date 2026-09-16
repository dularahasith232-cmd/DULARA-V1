const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/dularahasith232-cmd/DULARA-V1/blob/main/images/1789556194012.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Wassup, G 💸 DULARA-MD Is Alive Now💀*",
BOT_OWNER: '94740270014',  // Replace with the owner's phone number



};
