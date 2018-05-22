const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first());
        if(rUser) {       
        if(args.length >= 2) {
        let reason = args.join(" ").slice(22);

        let icon = rUser.displayAvatarURL;

        let embed = new Discord.RichEmbed()
        .setDescription("~**Report**~")
        .setColor("15f153")
        .addField("Reported User", `${rUser} ID: <${rUser.id}>`)
        .addField("Reported by", `${message.author} ID: <${message.author.id}>`)
        .addField("In Channel", message.channel)
        .addField("Reason", reason)
        ;

        message.delete().catch(O_o=>{});


        let errorEmbed = new Discord.RichEmbed()
        .setDescription("Error! Couldn't deliver report!")
        .setColor("#f20000");

        let reportChannel = message.guild.channels.find(`name`, "modlog");
        if(!reportChannel) return message.channel.send(errorEmbed);

        reportChannel.send(embed);

        let embedSELF = new Discord.RichEmbed()
        .setDescription("**Report delivered!**")
        .setColor("15f153")
        .addField("You've reported", `${rUser} ID: <${rUser.id}>`)
        .addField("Reason", reason);

        message.author.send(embedSELF);
        } else {
            message.delete().catch(O_o=>{});  
            return message.author.send(`Please use **${prefix}report <@user> <reason>** in order to report someone.`);
        }
        } else {
            message.delete().catch(O_o=>{});  
            return message.author.send(args[0] + " wasn't found!");
        }
        return;
    
}

module.exports.help = {
    name: "report"
}
