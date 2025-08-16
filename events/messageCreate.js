const { Events, MessageFlags, Collection } = require('discord.js');

// Handles the creation of 
module.exports = {
    name: Events.MessageCreate,
    async execute(message, client, prefix) {
        if(message.author.bot || !message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName);
        if(!command) return;

        try {
            await command.execute(message, args);
        } catch(error) {
            console.error(error);
            message.reply({ content: 'There was an error while executing this command!', MessageFlags: MessageFlags.Ephemeral});
        }
    }
}