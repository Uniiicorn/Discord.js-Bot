        const Discord = require("discord.js");

        module.exports.run = async (bot, message, args) => {
            let icon = bot.user.displayAvatarURL;

            let embed = new Discord.RichEmbed()
            .setDescription("**About this Bot**")
            .setColor("#15f153")
            .addField("Name", bot.user.username, true)
            .addField("Added on", bot.user.createdAt, true)
            .addField("Help", "Use the help command!")
            .setThumbnail(icon);
            
            
            return message.channel.send(embed);
        }
        
        module.exports.help = {
            name: "about"
        }
