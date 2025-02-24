let handler = async m => m.reply(`𝙁𝙊𝙇𝙇𝙊𝙒 𝙏𝙃𝙀 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 𝙏𝙊 𝙂𝙀𝙏 𝙇𝘼𝙏𝙀𝙎𝙏 𝙋𝙍𝙄𝙉𝘾𝙀 𝙈𝘿 𝙐𝙋𝘿𝘼𝙏𝙀𝙎 

*${mssg.link}*: 

*𝙊𝙒𝙉𝙀𝙍*
${developer}
`.trim())
handler.help = ['channel']
handler.tags = ['main']
handler.command = ['channel', 'ch'] 

export default handler
