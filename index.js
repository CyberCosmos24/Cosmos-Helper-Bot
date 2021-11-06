const Discord = require('discord.js');
const  Intents  = require('discord.js');
const {token, prefix} = require('./config.json');
const client = new Discord.Client();
const fs = require('fs');
const version = "1.0";
const logger = require("discordjs-logger");
logger.all(client);
const Crimson = require('crimson');
const crimson = new Crimson({
  debug: true, 

  keep: true,
  prefix: 'c!'
});
client.commands = new Discord.Collection(); 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}



client.once('ready', () => {
    console.log(`Cosmos Helper Ready!\n\ \nVersion: ` + version);
    console.log(``);
    client.user.setStatus('dnd') 
     setInterval(() => {
        const statuses = ['Cosmos owns me','Made by: Cosmos#2424','We all love Cosmos','Cossy is daddy']
        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING" })
        }, 12000)
    });
 client.on('message', message =>{
        if(!message.content.startsWith(prefix) || message.author.bot) return;
     
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
     
        if(command === 'ping'){
            client.commands.get('ping').execute(message, args);
        }else
        if(command === 'help'){
            client.commands.get('help').execute(message,args);
        }else 
        if(command === 'cosmos'){
            client.commands.get('cosmos').execute(message,args);
        }else
        if(command === 'user'){
            client.commands.get('user').execute(message,args);
        }else
        if(command === 'suggest'){
            client.commands.get('suggest').execute(message,args);
        }else
        if(command === 'evel'){
            client.commands.get('eval').execute(message ,args,client);
        }
    
        
    });
    client.on('message', message => {
        if (message.content.toLowerCase().startsWith(prefix + 'stats')) {
            if (message.author.bot) return;
            const ToTalSeconds = (client.uptime / 1000);
            const Days = Math.floor(ToTalSeconds / 86400);
            const Hours = Math.floor(ToTalSeconds / 3600);
            const Minutes = Math.floor(ToTalSeconds / 60);
            const Seconds = Math.floor(ToTalSeconds % 60);
            const Uptime = `${Days} Days, ${Hours} Hours, ${Minutes} Minutes & ${Seconds} Seconds`;
            const MemoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;
            const RamUsed = Math.round(process.cpuUsage().system) / 1024;
            const RamUsage = Math.trunc(RamUsed);
            const BotPlatform = process.platform;
            const MemoryUsed = Math.trunc(MemoryUsage);
            const Os = require('os');
            const OsHostName = Os.hostname();
            const SystemPing = Math.round(client.ws.ping);
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#b700ff')
                .setTitle("Bot's Live Status")
                .addField(" \u200B ", "**Bot Uptime** : ` " + `${Uptime}` + " `")
                .addField(" \u200B ", "** Bot's Hot Name** :  ` " + OsHostName + " `")
                .addField(" \u200B ", "**Global Bot Prefix** : ` " + prefix + " `")
                .addField(" \u200B ", "**CPU Usage** :  ` " + RamUsage + "Mb `")
                .addField(" \u200B ", "**Memory Usage** :  ` " + MemoryUsed + "Mb `")
                .addField(" \u200B ", "**Bot Platform** :  ` " + BotPlatform + " `")
                .addField(" \u200B ", "**System Ping** :  ` " + SystemPing + " `")
                .addField(" \u200B ", "**Channels** : ` " + `${client.channels.cache.size}` + " `")
                .addField(" \u200B ", "**Servers** : ` " + `${client.guilds.cache.size}` + " `")
                .addField(" \u200B ", "**Users** : ` " + `${client.users.cache.size}` + " `")
            message.channel.send(exampleEmbed);
        }
    })


client.login(token);