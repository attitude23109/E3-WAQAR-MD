const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT09tZFQ4SU9kdTUzYjRtLy94N1BGNWx5bXRZZGFWV2VCa3JmaUZySittST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEtaRS82T0FOMFExOVh6dmdvcEwyQjRTN3djbDExNnlsSVI3N29wV1dWbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRUHhDWGIzM2tBa3ZZZE82Q1JiT09zai9OdmI3SkEzNWRTY2FGSTBneEVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxRE9UY3lnZXovdTFKOUEwb0V3eFVoWmtNK2FZWitaWGJkYUY3Z0VVSTBnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFMdEgyVWIxMUpFNWU0ZXZhek1KV2htV3NQVHVlejlXdldiSzdud25CV1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik8vZHFjVFpWZHBoYVAvdVJQTTZSOGxsYkJpeXlsemNQMm9NVzNRUmJnQlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0Nwb0ZhbEVmKzdQZzlaK3VGbHRwWGlsbmNudFNjOEl2VFRSdWVld3FVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTlNRGMwenpwTjBZWDU5U0d0Nnl3SkpuMnVOM0xkNTJpeGZrYmhLZmsxWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjUwQTZraC9uVklCeTlod1JLbmFEN3l5M3VWdDQvMkNnZWtTZDdwM2dydWZzT1BnZEdrY2wxV2h3ZUwwZXgwdlAwQ2ZPYkJKV082U2lBZkhRVG4rb2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI2LCJhZHZTZWNyZXRLZXkiOiJOTk52NnZDY2g5YUlxYTRXQUgxaG9GYXRueWRQaDlqVmNSODNQdVkvZkFFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk4OTE5Nzc2MTI2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzg0NjkxRDIxMjY1OTZDOEZFQkZDNTVDRDQ3MTM5QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4NTM0NTY4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5ODkxOTc3NjEyNjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMxMkNFOTAzRjI2OTBEREFCMTNBMjc5NUFDNzA4NzcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODUzNDU2OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUjhGM0c3M1AiLCJtZSI6eyJpZCI6Ijk4OTE5Nzc2MTI2MDo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjM4OTc2ODc5MzUzOTc4OjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNORys5cXdERUtDM3hNWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2Nnl6bUMxd2ZPNlpPemZYc0FGODRNTEcxRHN2dUxRUTA1UkppcDEvcW1zPSIsImFjY291bnRTaWduYXR1cmUiOiJncnJkTStRd2o2azJSWjBsRjlrS0VEMkp1TzFqVUcxRjhaRFJxbUU5dWhWMDhOdUU3cXRlMjNadTI1VnFlU2V5M2s4WkdVSUE0U0prNGpOSm9iYStCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSkpodFJhT2tRWFM0aU14V3JlNmVpMWZVNjloZjFwWmZaNlBvVm0reHdjVGFJeFlzT2xpY3lCTUV6bmxIUDFMdGhvRU9zeUFiZWRZY3daRUZLTzM1aHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5ODkxOTc3NjEyNjA6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJldXNzNWd0Y0h6dW1UczMxN0FCZk9EQ3h0UTdMN2kwRU5PVVNZcWRmNnByIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTg1MzQ1NjQsImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT1AvIn0=
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Attitude boy_m-d♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yoie7u.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3-WAQAR-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "E3-WAQAR-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3-WAQAR-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3-WAQAR-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yoie7u.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923495178663",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
