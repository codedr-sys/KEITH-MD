/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0pDRitDQ1JGQmlNdzIyM1BMdDFsWlBta2JlbkpnSlhpdUQ1S1hlS2cyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnlrUWtvQjVBRHNxc0RBb0FqS0RyZnVzekRSenMvL1dCd2g0SnpsTm15cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Qkl0RXgyUTJPU1ZBNmNqQjY0KzYwbG1yN0tLeVlsc1V0cFpITSthNFhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQWXNOYldvUVVmSzUrYzZiRmlwRW1Nc0hXNWNaQ0g4L1dMWVUvNU1Uc0dRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitQd3ZmMzBZOFBIdndHdzJRRmNaTmhXdVNMUEZFT2s2cno3ZlJ5YzZDRXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNJcUpPeEk2ejZaYXdWVnIvQXVPRm1XTXNPL29lc1B4VFg4VTFCZDA4WEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZ2NWxNTmtNN0R2UWZZWUs5b00rRnFid1BjcmVOLzBQcDk1YXpJSU0wVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicitrM09OQ0tkRGpQV1RUK0VJcHFZZkpvVXl0ZVF1Qml3MEI4Z0gwUU16QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNYclFmWTh0Y0twbnZNcXdGb0dzSHVkVk5qR2tua0l3NmUxd1pXU2RMVm9DQ2ZnYitIdU1wTWZCNDU3VVZrbmFOYlJhL211T3M5R2NCQ2FvWlloOUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJzbFN1QXlkWXUvRXEvNTI1L3VZNVI4VGZQNXZqRHFVWXJCdnBGLzFuYUNJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNWnRFVGwtS1NieVctM0FvVXRIZ0N3IiwicGhvbmVJZCI6ImZiYTQwNTQ3LTAwNTctNDVlZC05YjUzLTIzYWJlODZmYTNkYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuY2xwSWFLY09GelVHMTZvYUkwUXRlbDBaM1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFFDS2Noblc1V3Q1NFJTZXhTMEd1Q09raHUwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJGRFdKUVRDIiwibWUiOnsiaWQiOiIyNjM3MTQzMjA4MDA6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPdGhlciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVh2bjlnQ0VKbkk4Ym9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZ1dxandtMXZmcWJCTUxJMHl3bS9VV3EvRitnRGloaThRTE5sU1RQc0NTdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiODlEbk5XQ3F2eXJ4R0x0RmhmSnhzelA5SmorOWlvdndZWXBjZEFBdEgzVzk4K21lWitMeG91cllrSSt4ZE5FWmo4TlNkSHk5M0VMWllBbUxrblBmQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IkpLN1F1YTFjZUsyM3Q3THIyRlVoNlNQcjVTbkpyT1RoaFRoZkx2RXFJNXRlL2llWTFvMGdqWDg0NkQ0L2FTV3YxY1BldU5KZWM0dXRSRy83UHJaWURBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE0MzIwODAwOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWUZxbzhKdGIzNm13VEN5Tk1zSnYxRnF2eGZvQTRvWXZFQ3paVWt6N0FrcyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDEwODE5OX0=';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '263714320800';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'FIGO-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
