const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!kUser) return message.channel.send("Can't find user!");
let kReason = args.join(" ").slice(22);
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

let kickEmbed = new Discord.RichEmbed()
.setDescription("~**Kick**~")
.setColor("#e56b00")
.addField("Kicked User", `${kUser} ID: ${kUser.id}`)
.addField("Kicked by", `<@${message.author.id}> ID: ${message.author.id}`)
.addField("In Channel", message.channel)
.addField("Reason", kReason);

let errorEmbed = new Discord.RichEmbed()
.setDescription("Error! Couldn't find modlog channel!")
.setColor("#f20000");

message.guild.member(kUser).kick(kReason);

let kickChannel = message.guild.channels.find(`name`, "modlog");
if(!kickChannel) return message.channel.send(errorEmbed);

kickChannel.send(kickEmbed);

return;

}

module.exports.help = {
    name: "kick"
}
