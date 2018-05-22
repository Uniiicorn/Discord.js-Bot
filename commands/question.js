const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[2]) return message.reply("Dude, please ask an full question. Ok? Thank you.");
    if(args.toUpperCase()) return;
    let replies = ["Yes.", "No.", "Maybe.", "Idk.", "Idc.", "Kys.", "Subscribe *Skill.exeTM on YouTubee. NOW.", 
    "Dude, why the hell are you asking me something like that?", "Hell no.", "Hell yeah!", "Just do it!", 
    "I like cocks.", "What did you just say?", "Nope.", "Maybe later.", "No. Faggot.", "I told ya, ask an full question.", 
    "...", "?", "Please, kys. Nub.exe", "sfhsfjkh?", "You're a heartless faggot. Go and kill your self.", "YEEEAAAAHHH!", "Yes, of course"]

    
    let result = Math.floor((Math.random() * replies.length));


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", replies[result], false)

    message.channel.send(embed);

}

module.exports.help = {
    name: "?"
}
