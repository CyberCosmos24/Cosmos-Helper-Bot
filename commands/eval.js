module.exports = {
	name: 'eval',
	execute(client, message, args) {
		if (message.author.id !== '809837115500134410') return;
		const embed = new MessageEmbed()
			.setTitle('Evaluating...');
		const msg = message.channel.send(embed);
		try {
			const data = eval(args.join(' ').replace(/```/g, ''));
			embed
				.setTitle('Output: ')
				.setDescription(data);
			msg.edit(embed);
			msg.react('✅');
			msg.react('❌');
			const filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '✅') && (user.id === message.author.id);
			msg.awaitReactions(filter, { max: 1 })
				.then((collected) => {
					collected.forEach((emoji) => {
						switch (emoji._emoji.name) {
						case '✅':
							msg.reactions.removeAll();
							break;
						case '❌':
							msg.delete();
							break;
						}
					});
				});
		} catch (e) {
			embed
				.setTitle('An Error has occured');
			return msg.edit(embed);
		}
	},
};