const { Sticker } = require('wa-sticker-formatter')
module.exports = async (Slash, m, store) => {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//========== DATABASE ===========//
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const premium = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const owner2 = JSON.parse(fs.readFileSync("./all/database/owner.json"))
const teksjpm = fs.readFileSync("./list/teksjpm.js").toString()
const isPremium = premium.includes(m.sender)

//========= CONFIGURASI ==========//
const budy = (typeof m.text == 'string' ? m.text : '')
const isOwner = owner2.includes(m.sender) ? true : m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : isOwner && !m.isBaileys ? '' : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
var crypto = require("crypto")
const moment = require('moment-timezone');
const time = moment().format("HH:mm:ss DD/MM");
let { randomBytes } = require("crypto")
const makeid = randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await Slash.decodeJid(Slash.user.id)
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Slash.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : {}
const groupName = isGroup ? groupMetadata.subject : "";
let participant_sender = isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { sleep } = require("./all/myfunc.js")  
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
//=========== MESSAGE ===========//
if (isCmd) {
console.log(chalk.green.bold("《 ") +
                        chalk.magenta.bold("Console By Jonathan") +
                        chalk.green.bold(" 》 ") +
                        chalk.blue(time) +
                        " from " +
                        chalk.magenta.bold(pushname) +
                        " in " +
                        chalk.yellow.bold(groupName))
};

//========= FAKE QUOTED =========//
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Powered By ${namaowner}`, jpegThumbnail: ""}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot JPM By ${namaowner}`,jpegThumbnail: ""}}}

const qcall = {
key: {
participant: "0@s.whatsapp.net",
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": `${namabot} Project`,
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot Pushkontak By ${namaowner}`,jpegThumbnail: ""}}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6282226769163:+62 856-2429-7893\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363145886073504@g.us`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By ${namaowner2}`,
inviteExpiration: Date.now() + 1814400000
}
}}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `${namaowner2} - Marketplace`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "999999999999999",
"retailerId": `Powered By FALL STORE`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}


//========== CASE ===========//
async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}


//========== FUNCTION ===========//
let ppuser
try {
ppuser = await Slash.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/d1688cff04f816713f8aa.jpg'
}

async function SendSlide(jid, img, txt = []) {
let anu = new Array()
let imgsc = await prepareWAMessageMedia({ image: img}, { upload: Slash.waUploadToServer })
for (let ii of txt) {
anu.push({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `${ii}`
}),
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"🔥Beli Produk🔥\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All TRX Open ✅*\n\n*FALL STORE* *Menyediakan Produk & Jasa Dibawah Ini*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: anu
})
})}
}}, {userJid: m.sender, quoted: qtoko})
return Slash.relayMessage(jid, msgii.message, {
messageId: msgii.key.id
})}

let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}


//========= SETTING EVENT ========//
if (global.owneroff && !isCmd) {
if (!isGroup && !isOwner) {
let teks = `*Hai Kak* @${m.sender.split('@')[0]}

Maaf *Ownerku Sedang Offline*, Silahkan Tunggu Owner Kembali Online & Jangan Spam Chat`
return Slash.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnail: fs.readFileSync("./media/ownermode.jpg"), renderLargerThumbnail: false, title: "｢ OWNER OFFLINE MODE ｣", mediaUrl: linkgc, sourceUrl: linkyt, previewType: "PHOTO"}}}, {quoted: null})
}}

/*if (global.antibug) {
if (!isGroup && m.isBaileys && !m.fromMe) {
await Slash.sendMessage(m.chat, {
delete: {
remoteJid: m.chat, fromMe: true, id: m.key.id
}})
await Slash.sendMessage(`${global.owner}@s.whatsapp.net`, {text: `*Terdeteksi Pesan Bug*
*Nomor :* ${m.sender.split("@")[0]}`}, {quoted: null})
}}*/

if (antilink.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Slash.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Slash.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await Slash.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await Slash.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Slash.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Slash.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await Slash.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}

switch (command) {
case "menu": case "p": case "pp": case "bokep": {
let teksmenu = `
┏─圓 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 𝑩𝑶𝑻𝒁 圓─㍐
┃ ㉿ *Botname :* ${global.namabot2}
┃ ㉿ *Mode :* ${Slash.public ? "Public": "Self"}
┃ ㉿ *Creator :* @${global.owner}
┃ ㉿ *Runtime Bot :* ${runtime(process.uptime())}
┃ ㉿ *Uptime Vps :* ${runtime(os.uptime())}
┗
┏─圓 𝑴𝒆𝒏𝒖 𝑮𝒓𝒐𝒖𝒑 圓─㍐
┃ 参 .hidetag teks
┃ 参 .tagall teks
┃ 参 .antilink
┃ 参 .antilinkv2
┃ 参 .addmember
┃ 参 .kick
┃ 参 .delete
┃ 参 .setppgc
┃ 参 .setnamagc
┃ 参 .open/close
┃ 参 .setppgc
┃ 参 .promote
┃ 参 .demote
┃ 参 .welcome
┃ 参 .cekkhodam
┃ 参 .cekkontol
┗

┏─圓 𝑵𝒆𝒘 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔 圓─㍐
┃ 参 .brat
┃ 参 .bratvid
┃ 参 .inspect <getidgc>
┃ 参 .pushkontak
┃ 参 .pushkontakid
┗
┏─圓 𝑴𝒆𝒏𝒖 𝑶𝒘𝒏𝒆𝒓 圓─㍐
┃ 参 .addowner
┃ 参 .delowner
┃ 参 .addpremium
┃ 参 .delpremium
┃ 参 .setppbot
┃ 参 .setppbotpanjang
┃ 参 .autoread
┃ 参 .autoreadsw
┃ 参 .setnamabot
┃ 参 .getcase
┃ 参 .listowner
┃ 参 .listpremium
┃ 参 .setbiobot
┃ 参 .joingc
┃ 参 .danapay
┃ 参 .ovopay
┃ 参 .gopaypay
┃ 参 .qris 
┗
┏─圓 𝐌𝐲 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐡𝐚𝐧𝐞𝐥𝐥 圓─㍐
┃ https://whatsapp.com/channel/0029Vaj528i3GJP3P9WLH03D
┃ ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
┃    『 *© 𝙅𝙤𝙣𝙖𝙩𝙝𝙖𝙣-𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡⚡* 』
┗──────────────────────༓ ⳹`
Slash.sendMessage(m.chat, {                
text: teksmenu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: '𝙅𝙤𝙣𝙖𝙩𝙝𝙖𝙣-𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡',
                            body: `𝑱𝒂𝒈𝒂 𝑮𝒓𝒐𝒖𝒑`,
                            thumbnailUrl: 'https://i.ibb.co.com/Vc7MzHf8/20250425-181321.jpg',
                            sourceUrl: global.linksaluran,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })                             
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
break
case "brat": {
          if (!text) return m.reply(`*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ\`*:\n${prefix+command} halo suki`) 
                                               try {
                                                       await Slash.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
                                                               const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=false`;
                                                                       const response = await axios.get(url, { responseType: "arraybuffer" });
                                                                               const sticker = new Sticker(response.data, {
                                                                                           pack: "Stiker By",
                                                                                                       author: "Slash 444+",
                                                                                                                   type: "image/png",
                                                                                                                           });
                                                                                                                                   const stikerBuffer = await sticker.toBuffer();
                                                                                                                                           await Slash.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });
                                                                                                                                               } catch (err) {
                                                                                                                                                       console.error("Error:", err);
                                                                                                                                                               await Slash.sendMessage(m.chat, {
                                                                                                                                                                           text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
                                                                                                                                                                                   }, { quoted: m });
                                                                                                                                                                                       }
                                                                                                                                                                                      
                                                                                                                                                                                      }
                                                                                          break
case "bratvid": {
          if (!text) return m.reply(`*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ\`*:\n${prefix+command} halo suki`) 
                                               try {
                                                       await Slash.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
                                                               const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=true`;
                                                                       const response = await axios.get(url, { responseType: "arraybuffer" });
                                                                               const sticker = new Sticker(response.data, {
                                                                                           pack: "Stiker By",
                                                                                                       author: "Slash 444+",
                                                                                                                   type: "image/png",
                                                                                                                           });
                                                                                                                                   const stikerBuffer = await sticker.toBuffer();
                                                                                                                                           await Slash.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });
                                                                                                                                               } catch (err) {
                                                                                                                                                       console.error("Error:", err);
                                                                                                                                                               await Slash.sendMessage(m.chat, {
                                                                                                                                                                           text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
                                                                                                                                                                                   }, { quoted: m });
                                                                                                                                                                                       }
                                                                                                                                                                                      
                                                                                                                                                                                      }                                                                                   
break
case "addowner": case "addown": {
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (owner2.includes(orang) || orang == global.owner) return m.reply(`Nomor ${orang.split("@")[0]} Sudah Ada Di Database Owner`)
if (orang == botNumber) return m.reply("Tidak Bisa Menambahkan Nomor Bot Kedalam Database Owner Tambahan!")
let check = await Slash.onWhatsApp(`${orang.split("@")[0]}`)
if (check.length < 1) return m.reply(`Nomor ${orang.split("@")[0]} Tidak Terdaftar Di WhatsApp`)
await owner2.push(orang)
await fs.writeFileSync("./all/database/owner.json", JSON.stringify(owner2, null, 2))
m.reply(`*Berhasil Menambah Owner ✅*
Nomor ${orang.split("@")[0]} Berhasil Ditambahkan Kedalam Database Owner`)
} else {
m.reply(example("@tag/6283XXX"))
}
}
break
case "delowner": case "delown": {
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
if (text == "all") {
await fs.writeFileSync("./all/database/owner.json", "[]")
return m.reply(`*Berhasil Menghapus Semua Owner Tambahan ✅*`)
}
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!owner2.includes(orang) || orang == global.owner) return m.reply(`Nomor ${orang.split("@")[0]} Tidak Ada Di Database Owner`)
if (orang == botNumber) return m.reply("Tidak Bisa Menghapus Nomor Bot!")
let pos = owner2.indexOf(orang)
await owner2.splice(pos, 1)
await fs.writeFileSync("./all/database/owner.json", JSON.stringify(owner2, null, 2))
m.reply(`*Berhasil Menghapus Owner ✅*
Nomor ${orang.split("@")[0]} Berhasil Dihapus Dari Database Owner`)
} else {
m.reply(example("@tag/6283XXX"))
}
}
break
case "addprem": case "addpremium": {
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (premium.includes(orang)) return m.reply(`*Gagal Menambah User Premium!*\n${orang.split('@')[0]} Sudah Terdaftar Di Database *User Premium*`)
await premium.push(orang)
await fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium))
m.reply(`*Berhasil Menambah Premium ✅*\n${orang.split('@')[0]} Sekarang Terdaftar Di Database *User Premium*`)
} else {
return m.reply(example("@tag/62838XXX"))
}}
break
case "delprem": case "delpremium": {
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!premium.includes(orang)) return m.reply(`*Gagal Menghapus User Premium!*\n${orang.split('@')[0]} Tidak Terdaftar Di Database *User Premium*`)
let indx = premium.indexOf(orang)
await premium.splice(indx, 1)
await fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium))
m.reply(`*Berhasil Menghapus Premium ✅*\n${orang.split('@')[0]} Sekarang Terhapus Dari Database *User Premium*`)
} else {
return m.reply(example("@tag/62838XXX"))
}}
break
case "listown": case "listowner": {
if (owner2.length < 1) return m.reply("Tidak Ada Owner Tambahan")
let teksnya = `*LIST OWNER BOT⚡*\n\n`
owner2.forEach(e => teksnya += `*Tag :* @${e.split("@")[0]}
*WhatsApp :* ${e.split("@")[0]}\n\n`)
Slash.sendMessage(m.chat, {text: teksnya, mentions: [...owner2]}, {quoted: qtoko})
}
break
case "listprem": case "listpremium": {
if (premium.length < 1) return m.reply("Tidak Ada User Premium")
let teksnya = `*LIST USER PREMIUM⚡*\n\n`
premium.forEach(e => teksnya += `*Tag :* @${e.split("@")[0]}
*WhatsApp :* ${e.split("@")[0]}\n\n`)
Slash.sendMessage(m.chat, {text: teksnya, mentions: [...premium]}, {quoted: qtoko})
}
break
case "setppbot": case "setpp": {
if (!isOwner) return m.reply(msg.owner)
if (/image/g.test(mime)) {
let media = await Slash.downloadAndSaveMediaMessage(qmsg)
await Slash.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
m.reply("*Berhasil Mengganti Profil ✅*")
} else return m.reply(example('dengan mengirim foto'))}
break
case "setppbotpanjang": case "setpppanjang": {
if (!isOwner) return m.reply(msg.owner)
if (/image/g.test(mime)) {
var medis = await Slash.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await Slash.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("*Berhasil Mengganti Profil ✅*")
} else return m.reply(example('dengan mengirim foto'))
}
break
case "setnamabot": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example('teksnya'))
Slash.updateProfileName(text)
m.reply("*Berhasil Mengganti Nama Bot ✅*")
}
break
case "setbio": case "setbiobot": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example('teksnya'))
Slash.updateProfileStatus(text)
m.reply("*Berhasil Mengganti Bio Bot ✅*")
}
break
case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
m.reply(msg.wait)
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": reswarna,
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./all/tmp/"+makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await Slash.sendStimg(m.chat, tempnya, m, {packname: namabot})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break
case "public": {
if (!isOwner) return m.reply(msg.owner)
Slash.public = true
m.reply("*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Public*")
}
break
case "self": {
if (!isOwner) return m.reply(msg.owner)
Slash.public = false
m.reply("*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Self*")
}
break
case "getcase": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./Slash.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* Tidak Ditemukan`)
}
}
        break
            case 'bcgc':
            case 'bcgroup': {
                if (!isOwner) return m.reply(msg.admin)
                if (!text) return m.reply(`Text mana?\n\nContoh : ${prefix + command} Besok Libur `)
                let getGroups = await Slash.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    Slash.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Owner',
                                body: `Telah Terkirim ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/aa76cce9a61dc6f91f55a.jpg',
                                sourceUrl: global.linksaluran,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break;
            case 'pushkontak': {

    if (!isGroup) return m.reply('Fitur ini hanya dapat digunakan di grup.');

    if (!isOwner) return m.reply('Hanya owner yang dapat menggunakan fitur ini.');

    const groupMetadata = await Slash.groupMetadata(from);
    const participants = groupMetadata.participants;

    if (!text) return m.reply('Silakan masukkan pesan yang ingin dikirim.');

    const pesan = text.trim(); 
    let success = 0;
    let failed = 0;

    for (let member of participants) {
        const memberId = member.id; 
        try {
            // Kirim pesan ke anggota grup
            await Slash.sendMessage(memberId, { text: pesan });
            console.log(`Pesan berhasil dikirim ke: ${memberId}`);
            success++;
        } catch (error) {
            console.error(`Gagal mengirim pesan ke: ${memberId}`, error);
            failed++;
        }
        await sleep(1000); // Delay 1 detik 
    }

    reply(`Push pesan selesai.\nBerhasil: ${success}\nGagal: ${failed}`);
    break;
}
break
case 'pushkontakid': {

    if (!isOwner) return m.reply('Fitur ini hanya dapat digunakan oleh owner.');


    const args = text.split('|');
    if (args.length < 2) return m.reply(`Gunakan format:\n${prefix}pushkontakid <id_grup>|<pesan>\n\nContoh:\n${prefix}pushkontakid 1234567890-123456789@g.us|Woi Jawir`);

    const groupId = args[0].trim(); 
    const pesan = args[1].trim(); 
    try {
        const groupMetadata = await Slash.groupMetadata(groupId);
        const participants = groupMetadata.participants;

        let success = 0;
        let failed = 0;

        for (let member of participants) {
            const memberId = member.id; 
            try {
                await Slash.sendMessage(memberId, { text: pesan });
                console.log(`Pesan berhasil dikirim ke: ${memberId}`);
                success++;
            } catch (error) {
                console.error(`Gagal mengirim pesan ke: ${memberId}`, error);
                failed++;
            }
            await sleep(1000); // Delay 1 detik
        }

        reply(`Push pesan selesai.\nBerhasil: ${success}\nGagal: ${failed}`);
    } catch (error) {
        console.error(error);
        reply('Gagal mendapatkan metadata grup. Pastikan ID grup benar dan bot ada di dalam grup tersebut.');
    }
}
break

// FITUR BUG V1

case 'inspect': case 'getidgrup': {
if (!isOwner) return m.reply(msg.owner)
if (!q) return m.reply(`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ:\n\nʟɪɴᴋ ɢʀᴜᴘɴʏᴀ.`)
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
Slash.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
let tekse = `${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}`
m.reply(tekse)
})}
break

case "antilink": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner && !isAdmin) return m.reply(msg.admin)
if (!args[0]) return m.reply(example("on/off\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink.includes(m.chat)) return m.reply("*Antilink Grup* Di Grup Ini Sudah Aktif!")
if (antilink2.includes(m.chat)) {
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
}
antilink.push(m.chat)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
m.reply("*Berhasil Menyalakan Antilink Grup ✅*\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink.includes(m.chat)) return m.reply("*Antilink Grup* Di Grup Ini Belum Aktif!")
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
m.reply("*Berhasil Mematikan Antilink Grup ✅*\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else {
return m.reply(example("on/off"))
}}
break
case "antilinkV2": case "antilinkv2": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner && !isAdmin) return m.reply(msg.owner)
if (!args[0]) return m.reply(example("on/off\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink2.includes(m.chat)) return m.reply("*Antilink Grup V2* Di Grup Ini Sudah Aktif!")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
}
antilink2.push(m.chat)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("*Berhasil Menyalakan Antilink Grup V2 ✅*\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink2.includes(m.chat)) return m.reply("*Antilink Grup V2* Di Grup Ini Belum Aktif!")
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("*Berhasil Mematikan Antilink Grup V2 ✅*\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else {
return m.reply(example("on/off"))
}}
break
case "welcome": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
if (text.toLowerCase() == "on") {
if (welcome) return m.reply("*Welcome* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
welcome = true
m.reply("*Berhasil Menyalakan Welcome ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!welcome) return m.reply("*Welcome* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
welcome = false
m.reply("*Berhasil Mematikan Welcome ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
}}
break
case "autoread": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
if (text.toLowerCase() == "on") {
if (autoread) return m.reply("*Autoread* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoread = true
m.reply("*Berhasil Menyalakan Autoread ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!autoread) return m.reply("*Autoread* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoread = false
m.reply("*Berhasil Mematikan Autoread ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "autoreadsw": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
if (text.toLowerCase() == "on") {
if (autoreadsw) return m.reply("*Autoreadsw* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoreadsw = true
m.reply("*Berhasil Menyalakan Autoreadsw ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!autoreadsw) return m.reply("*Autoread* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoreadsw = false
m.reply("*Berhasil Mematikan Autoreadsw ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "anticall": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
if (text.toLowerCase() == "on") {
if (anticall) return m.reply("*Anticall* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
anticall = true
m.reply("*Berhasil Menyalakan Anticall ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!anticall) return m.reply("*Anticall* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
anticall = false
m.reply("*Berhasil Mematikan Anticall ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return m.reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
}}
break
case "setting": case "settingbot": case "option": case "statusbot": {
if (!isOwner) return m.reply(msg.owner)
var teks = `
*List Status Setting Bot :*

* Autoread : ${global.autoread ? "*Aktif*" : "*Tidak Aktif*"}
* Autoreadsw : ${global.autoreadsw ? "*Aktif*" : "*Tidak Aktif*"}
* Anticall : ${global.anticall ? "*Aktif*" : "*Tidak Aktif*"}
* Welcome : ${global.welcome ? "*Aktif*" : "*Tidak Aktif*"}

*Contoh Penggunaan :*
Ketik *.autoread* on/off`
m.reply(teks)
}
break
case "statusgc": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner && !isAdmin) return m.reply(msg.admin)
var anti1 = "*Aktif*"
var anti2 = "*Aktif*"
if (!antilink2.includes(m.chat)) anti2 = "*Tidak Aktif*"
if (!antilink.includes(m.chat)) anti1 = "*Tidak Aktif*"
var teks = `
*List Status Grup Settings :*

* Antilink : ${anti1}
* AntilinkV2 : ${anti2}

*Contoh Penggunaan :*
Ketik *.antilink* on/off
`
Slash.sendText(m.chat, teks, qchanel)
}
break
case "setppgc": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (/image/g.test(mime)) {
let media = await Slash.downloadAndSaveMediaMessage(qmsg)
await Slash.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
m.reply("*Berhasil Mengganti Foto Grup ✅*")
} else return m.reply(example('dengan mengirim foto'))
}
break
case "setnamegc": case "setnamagc": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example('teksnya'))
const gcname = metadata.subject
await Slash.groupUpdateSubject(m.chat, text)
m.reply(`*Berhasil Mengganti Nama Grup ✅*\n*${gcname}* Menjadi *${text}*`)
}
break
case "setdesc": case "setdesk": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example('teksnya'))
await Slash.groupUpdateDescription(m.chat, text)
m.reply(`*Berhasil Mengganti Deskripsi Grup ✅*`)
}
break
case "open": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
await Slash.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("*Berhasil Mengganti Setelan Grup ✅*\nMenjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
await Slash.groupSettingUpdate(m.chat, 'announcement')
m.reply("*Berhasil Mengganti Setelan Grup ✅*\nMenjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
case "del": case "delete": {
if (isGroup) {
if (!isOwner && !isAdmin) return m.reply(msg.admin)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
Slash.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return m.reply(msg.adminbot)
Slash.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return m.reply(msg.owner)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
Slash.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case "demote": case "demote": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Slash.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`Berhasil Memberhentikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "promote": case "promot": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Slash.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('6283XXX/@tag'))}
break
case "add": case "addmember": {
if (!isGroup) return m.reply(msg.group)
if (!args[0]) return m.reply(example("62838XXX"))
var teks = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await Slash.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
if (!isBotAdmin || !groupMetadata.memberAddMode) return m.reply("Gagal Menambahkan Member, Karna Admin Tidak Mengizinkam Peserta Dapat Add Member")
var a = await Slash.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) return m.reply(`Berhasil Menambahkan ${teks.split("@")[0]} Kedalam Grup Ini`)
if (a[0].status == 408) return m.reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
if (a[0].status == 409) return m.reply(`Dia Sudah Ada Di Dalam Grup Ini!`)
if (a[0].status == 403) return m.reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
}
break
case "kik": case "kick": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Slash.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => Slash.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} else return m.reply(example('nomornya/@tag'))}
break
case "hidetag": case "z": case "h": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
Slash.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "tagall": case "tag": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example("Pesannya"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
Slash.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "joingc": case "join": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return m.reply(example('linknya'))
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return m.reply("Link Tautan Tidak Valid!")
let result = teks.split('https://chat.whatsapp.com/')[1]
await Slash.groupAcceptInvite(result).then(respon => m.reply("Berhasil Bergabung Ke Dalam Grup ✅")).catch(error => m.reply(error.toString()))
}
break
case "leave": case "leavegc": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
await m.reply("Otw Bosss")
await sleep(3000)
await Slash.groupLeave(m.chat)
}
break
case "leavegc2": case "leave2": {
if (!isOwner) return m.reply(msg.owner)
let gcall = await Object.values(await Slash.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Contoh Cara Penggunaan :*\nKetik *${cmd}* Nomor Grup\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
Slash.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return m.reply("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await m.reply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await Slash.groupLeave(`${gcall[leav].id}`)
}}
break
case'cekkhodam': 
 if (!text) return m.reply('Nama nya mana yang mau di cek khodam nya')
function pickRandom(list) {
 return list[Math.floor(Math.random() * list.length)]
}
 m.reply(`
╭━━━━°「 *Khodam ${text}* 」°
┃
┊• Nama : ${text}
┊• Khodam : ${pickRandom(['Macan Tutul', 'Gajah Sumatera', 'Orangutan', 'Harimau Putih', 'Badak Jawa', 'Pocong', 'Kuntilanak', 'Genderuwo', 'Wewe Gombel', 'Kuyang', 'Lembuswana', 'Anoa', 'Komodo', 'Elang Jawa', 'Burung Cendrawasih', 'Tuyul', 'Babi Ngepet', 'Sundel Bolong', 'Jenglot', 'Lele Sangkuriang', 'Kucing Hutan', 'Ayam Cemani', 'Cicak', 'Burung Merak', 'Kuda Lumping', 'Buaya Muara', 'Banteng Jawa', 'Monyet Ekor Panjang', 'Tarsius', 'Cenderawasih Biru', 'Setan Merah', 'Kolor Ijo', 'Palasik', 'Nyi Roro Kidul', 'Siluman Ular', 'Kelabang', 'Beruang Madu', 'Serigala', 'Hiu Karang', 'Rajawali', 'Lutung Kasarung', 'Kuda Sumba', 'Ikan Arwana', 'Jalak Bali', 'Kambing Etawa', 'Kelelawar', 'Burung Hantu', 'Ikan Cupang'])}
┊• Mendampingi dari : ${pickRandom(['1 tahun lalu','2 tahun lalu','3 tahun lalu','4 tahun lalu','dari lahir'])}
┃• Expired : ${pickRandom(['2024','2025','2026','2027','2028','2029','2030','2031','2032','2033','2034','2035'])}
╰═┅═━––––––๑`)
break

case'cekkontol': 
 if (!text) return m.reply('Nama nya mana yang mau di cek kontol nya')
function pickRandom(list) {
 return list[Math.floor(Math.random() * list.length)]
}

	
 m.reply(`
╭━━━━°「 *Kontol ${text}* 」°
┃
┊• Nama : ${text}
┃• Kontol : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
┊• True : ${pickRandom(['perjaka','ga perjaka','udah pernah dimasukin','masih ori','jumbo'])}
┃• jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
┃• ukuran : ${pickRandom(['1cm','2cm','3cm','4cm','5cm','20cm','45cm','50cm','90meter','150meter','5km','gak normal'])}
╰═┅═━––––––๑`)
break
case "ambilq": {
let jsonData = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2)
m.reply(jsonData)
}
break
case "danapay": {
if (global.dana == false) return m.reply('Payment Dana Tidak Tersedia')
let teks = `
*Nomor Dana :*
${global.dana}
*A/N :* ${global.namadana}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
Slash.sendText(m.chat, teks, qchanel)
}
break
case "ovopay": {
if (global.ovo == false) return m.reply('Payment Ovo Tidak Tersedia')
let teks = `
*Nomor Ovo :*
${global.ovo}
*A/N :* ${global.namaovo}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
Slash.sendText(m.chat, teks, qchanel)
}
break
case "gopaypay": {
if (global.gopay == false) return m.reply('Payment Gopay Tidak Tersedia')
let teks = `
*Nomor Gopay :*
${global.gopay}
*A/N :* ${global.namagopay}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
Slash.sendText(m.chat, teks, qchanel)
}
break
case "qrispay": {
if (global.qris == false) return m.reply('Payment Qris Tidak Tersedia')
m.reply('Memproses Mengambil QRIS, Tunggu Sebentar . . .')
let teks = `
*Untuk Pembayaran Melalui QRIS All Payment, Silahkan Scan Foto QRIS Diatas Ini*
_WAJIB TAMBAH 500P KALAU PAKAI QRIS_
*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
Slash.sendMessage(m.chat, {image: global.qris, caption: teks}, {quoted: qchanel})
}
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return Slash.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return Slash.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
Slash.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
Slash.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return Slash.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return Slash.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}}
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})