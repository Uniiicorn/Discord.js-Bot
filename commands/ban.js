        const Discord = require("discord.js");

        module.exports.run = async (bot, message, args) => {
            let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!bUser) return message.channel.send("Can't find user!");
            let bReason = args.join(" ").slice(22);
            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You are not allowed to do that.");
            if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");
        
            let banEmbed = new Discord.RichEmbed()
            .setDescription("~**Ban**~")
            .setColor("#f20000")
            .addField("Banned User", `${bUser} ID: ${bUser.id}`)
            .addField("Banned by", `<@${message.author.id}> ID: ${message.author.id}`)
            .addField("In Channel", message.channel)
            .addField("Reason", bReason);
    
            let errorEmbed = new Discord.RichEmbed()
            .setDescription("Error! Couldn't find modlog channel!")
            .setColor("#f20000");
    
            message.guild.member(bUser).ban(bReason);
    
            let kickChannel = message.guild.channels.find(`name`, "modlog");
            if(!kickChannel) return message.channel.send(errorEmbed);
    
            kickChannel.send(banEmbed);
        
            return;
    
        
        }
        
        module.exports.help = {
            name: "ban"
        }
