const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send("You are not allowed to do that.")

    let age = "16 (nearly 17)";
    let location = "Germany";
    let icon = "https://yt3.ggpht.com/a-/AJLlDp0mnyH7ASY_97gniDq6tHuzonJ34RftL_fFwg=s88-mo-c-c0xffffffff-rj-k-no";
    let name = "Julian";
    let pet = "Yes, I have a dog.";
    let school = "I have finished my school.";
    let specs = "AMD Ryzen 5 1600x\nAsus B350 Plus\nNvidia GeForce GTX 970\nSSD 128GB\nHDD 1TB\n8GB ram DDR Ballistic ESports";
    let ingame = "Clan: -Style\nServer: Europe mainly\nIngame Name: *skill.exe (FriendList most times full) [Max Rank]\nExperience: Im playing Warface since 2013. I started at the russian server and went to european when it was released in october. Then I did a break 2014-2015 and started in march again with a new account. Now im max. rank and participating in nearly all esport events.";

    let embed = new Discord.RichEmbed()
    .setTitle("~**FAQ**~")
    .setColor("#ff3300")
    .addField("How old are you?", age, true)
    .addField("Where do you live?", location, true)
    .addField("What's your name?", name, true)
    .addField("Do you have some pets?", pet, true)
    .addField("What about school?", school, true)
    .addField("What are your PC specs?", specs, false)
    .addField("Random ingame Informations.", ingame, false)
    .setThumbnail(icon);    

    message.channel.send(embed);

}

module.exports.help = {
    name: "faq"
}
