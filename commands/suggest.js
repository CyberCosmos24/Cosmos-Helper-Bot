const Discord = require('discord.js')

module.exports = {
    name: 'suggest', // The name of the command
    description: 'Allows a user to suggest something for the server/bot', //The description of what the command does
    execute(message, args) {
        let { member, channel, client } = message
        const content = args.join(' ')
        if (channel != '842997421662535680') {
            message.channel.send(':x: It\'s important that you message in <#842997421662535680> to send your suggestion. :x:') //replace this with your bot commands channel
            return}
        if (!content) {
            message.channel.send(':x: Your suggestion was too short, maybe suggest something. :x:')
            return}
        message.delete()
        message.channel.send('🚀 Thank you for your suggestion, i have sent it to be voted on. 🚀') // change this with your suggestions channel 
        const cOck = new Discord.MessageEmbed()
        .setAuthor("Test")
        .setFooter(`Suggestion from ${member.user.tag}`)
        .setTitle(`👾  ${content} 👾 `)
        .setDescription('Type c!suggest` in <#842997421662535680>') // suggestions channel
        .setColor('#ff3333') 
        .setTimestamp()
        const channelId = '842997421662535680' // suggestions channel
        channel = member.guild.channels.cache.get(channelId)
        channel.send(cOck)
        .then(message => {
            message.react('👍')
            .then(() => {
                message.react('👎') 
            })
        }) 
    }
};