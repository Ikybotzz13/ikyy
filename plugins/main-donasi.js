const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
Hallo mypren ð
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
ââââã Ä±ll *DONATE* llÄ± ãââã¿
â¬¡ *DANA:* ${dana}
â¬¡ *GOPAY:* ${gopay}
â¬¡ *OVO:* ${pulsa}
âââââââââââââââââââã¿
âââã Ä±ll *THANKS TO* llÄ± ãâã¿
â¬¡ team creator-creator
â¬¡ team yang sudah berdonasi
âââââââââââã¿
Berapapun donasi kalian akan sangat berarti ð
Terimakasih yang sudah mendonasikan untuk bot
Contact person Owner:
wa.me/${numberowner} (Owner)
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(donasi)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: 'ð® Silahkan pilih Command Dibawah ini',
           hydratedButtons: [{
             urlButton: {
               displayText: 'GroupBot',
               url: 'https://chat.whatsapp.com/BelumBuatGroupBot'
             }

           },
                {
               urlButton: {
               displayText: 'Myweb',
               url: 'https://istagram.com/kokopangeran_'
             }

           },
               {
             quickReplyButton: {
               displayText: 'sewa',
               id: '.sewazifa',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Runtime',
               id: '.runtime',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.command = /^(donasi|donate)$/i
handler.help = ['donasi']
module.exports = handler
