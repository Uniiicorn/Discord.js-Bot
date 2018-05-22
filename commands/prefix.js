const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You are not allowed to do that.");
    if(!args[0] || args [0 == "help"]) return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    
    let embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("~**Prefix updated!**~")
    .setDescription(`Prefix has been set to **${args[0]}**.`)

    message.channel.send(embed);

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {

        if(err) console.log(err);

    });
    return;

}

module.exports.help = {
    name: "prefix"
}
