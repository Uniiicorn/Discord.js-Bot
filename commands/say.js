const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();

      let embed = new Discord.RichEmbed()
      .setColor("#f20000")
      .setTitle("~**IMPORTANT**~")
      .setDescription(sayMessage);

      message.channel.send(embed);

}

module.exports.help = {
  name: "say"
}
