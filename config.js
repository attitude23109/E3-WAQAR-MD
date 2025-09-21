const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0NrOEtWR2RzR21ickQxQmU0cFFhSWUwd1BTMFFWN2dXNFJYZm9FSlczYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDZUZWFtU21jZTFvdzg3Tjc3MGo1TVhJWDRzaDVNVlBZK2dEeHNuWk16MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QzJzZlhTaDcwaGNmMEdJTFdxK0YxNTMvNlhNbWo0Y2VZMGdhTk9YNlZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0ZUcwTU9BTHRCMUdkczdadDJtRnF2TFNQR0hOdlN0dHhBRVNzQ0E1WVNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRETm4zc0FlbDJYVWczc1VEOUp0SVhwYkpIZ0FNL21UNmFBMnVsK2Z4blU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFreC9CVzVMUkx2bHVoTUZoWFJ1Qm1GTy8yNENvRG9ZSnFzRmJHMExVVzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUpOU0dkcCt6ckd2OTB2eE9XcGkxQS9vcCtNdEIzeUpPNTgvYjQ0aUFrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHlhUW1MVmhxcnFPcmV2SEp0NzVxb2pnR09mM1pXWTBBTFJXTCt3NmZFZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ1NDE4bGpSK253QVhDTFBIblI3T1ZZL1lSNlpkMVdYWnBBYkxKR3gzOStNZVlPOThobzdnbjJsOTFDOUR5Qlc0OVlvZlhsd3NVYm1qditybnNGS2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI5LCJhZHZTZWNyZXRLZXkiOiJob1JVbm9XcllDL2w2SkNBRUhqQWpINWF4ODZZM3hrNDhOdDRnS2xWRC9VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk4OTE5Nzc2MTI2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzIxQTc2RUJDMjQxQ0M3RDI1NzNENkZGNEY0MjkxNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4NDc3NzUwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5ODkxOTc3NjEyNjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMxMjFFRTEyOTk1MDVGNjgyNjM0QTM4OTU0RjBDNkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODQ3Nzc1MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTg5MTk3NzYxMjYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNzg0MkU2MERCOUNFNTdBOTE4NDQ2REI5QkM4MEYzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTg0Nzc3NTJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjZNU1RDVEdTIiwibWUiOnsiaWQiOiI5ODkxOTc3NjEyNjA6M0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIzODk3Njg3OTM1Mzk3ODozQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkMrOXF3REVLNzd3TVlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNjZ5em1DMXdmTzZaT3pmWHNBRjg0TUxHMURzdnVMUVEwNVJKaXAxL3Ftcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVDErMG9IVXludHlybEp1MjFJYVBFV200WERSc2M1b3lQcHQyd0V5YUJpMVdvVDhJN0g3MFR6eUdYWEpGRDQyL1RZcEkzQ0N1WUUxeXVhM0RQOHFjQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IjBGMG84cUVMY3Nlc0Z6MFZPejFsS1JQNnZoMFZURFp0b2loS0l0eFcwZjJmTFlwUi9xUHEwaVI2ZWpEL0RQS3JiTzZtZmJzOWpGK3ovUTNwS0NzNGlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTg5MTk3NzYxMjYwOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZXVzczVndGNIenVtVHMzMTdBQmZPREN4dFE3TDdpMEVOT1VTWXFkZjZwciJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4NDc3NzQ3LCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5SUyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3-WAQAR-𝙈𝘿 ♥️☺️*",
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
