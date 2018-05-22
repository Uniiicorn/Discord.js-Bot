const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let icon = message.guild.iconURL;
let embed = new Discord.RichEmbed()
.setDescription("**Server Informations**")
.setThumbnail(icon)
.setColor("#15f153")
.addField("Server name", message.guild.name, false)
.addField("Created on", message.guild.createdAt, false)
.addField("Your Join-Date", message.member.joinedAt, false)
.addField("Total Members", message.guild.memberCount, false);

return message.channel.send(embed);

}

module.exports.help = {
    name: "server"
}
