module.exports={
    name:'ping',
    description: "Ping Command",
    execute(message, args){
      if (message.author.id === '809837115500134410') {
        message.channel.send(`HOST: ${Date.now() - message.createdTimestamp}ms`);
      } else{
        message.channel.send(`You do not have access to this command.`)
      }
        }
      };