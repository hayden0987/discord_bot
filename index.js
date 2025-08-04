// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Load environment variables from .env file
require('dotenv').config();

// Get the token from the environment
const token = process.env.DISCORD_TOKEN;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);
