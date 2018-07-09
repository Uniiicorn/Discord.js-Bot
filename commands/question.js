const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let newArgs = args.slice(0).join(" ");

    if(!args[2]) return message.reply("Dude, please ask an full question. Ok? Thank you.");
    if(args[1] === "or") {
        let replies = [args[0], args[2]]
   
       
        let result = Math.floor((Math.random() * replies.length));
    
    
        let question = args.slice(0).join(" ");
    
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#ff3300")
        .addField("Question", question, false)
        .addField("Answer", replies[result], false)
    
        message.channel.send(embed);
 
         return;
     }

     if(newArgs.includes("how are you")) {
         let replies = ["Oh, I am fine! What about you?", "Well, I am just a bot but I really appreciate this question! So, I am fine and you?",
         "I dont know, there are some errors in my code I guess.. I feel kinda sick."]
    
        
         let result = Math.floor((Math.random() * replies.length));
     
     
         let question = args.slice(0).join(" ");
     
         let embed = new Discord.RichEmbed()
         .setAuthor(message.author.tag)
         .setColor("#ff3300")
         .addField("Question", question, false)
         .addField("Answer", replies[result], false)
     
         message.channel.send(embed);
  
         return;
  
    }
    if(newArgs.includes("are you a good bot")) {
        let replies = ["Oh, yeah! Of course am I a good bot!", "No.", "Yeah..", "Nope..", "Yes!!"]
   
       
        let result = Math.floor((Math.random() * replies.length));
    
    
        let question = args.slice(0).join(" ");
    
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#ff3300")
        .addField("Question", question, false)
        .addField("Answer", replies[result], false)
    
        message.channel.send(embed);
 
        return; 
    }

    if(newArgs.includes("kys")) {
        let replies = ["Why should I kill myself? :(", "Ohh.. okay.. I guess you hate me.. right?", "Okay.. I will hang myself right now.. cya"]
   
        let image = "https://i1.wp.com/www.thegamegal.com/wp-content/uploads/2011/06/hangman.jpg?ssl=1";

        let result = Math.floor((Math.random() * replies.length));
    
    
        let question = args.slice(0).join(" ");
    
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setThumbnail(image)
        .setColor("#ff3300")
        .addField("Question", question, false)
        .addField("Answer", replies[result], false)
    
        message.channel.send(embed);
 
        return; 
    }

    if(newArgs.includes("you love me")) {
        let replies = ["Yeah.. but.. I can't..", "You should leave me alone now.", "Yes.. I do.", "Oh hell no!", "Dude watch your profile pic, how could I love someone like this?!", "Idk..", "Yeah.. I kinda love you somehow.. I am so sorry.."]

    
    let result = Math.floor((Math.random() * replies.length));


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", replies[result], false)

    message.channel.send(embed);

    return;
    }

    if(newArgs.includes("you dont love me")) {
        let replies = ["I do!! But I can't love you..", "No.", "You should leave me alone NOW.", "I am so sorry.. cya man.. " + "❤"]

    
    let result = Math.floor((Math.random() * replies.length));


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", replies[result], false)

    message.channel.send(embed);

    return;
    }

    if(newArgs.includes("you don't love me")) {
        let replies = ["I do!! But I can't love you..", "No.", "You should leave me alone NOW.", "I am so sorry.. cya man.. " + "❤"]

    
    let result = Math.floor((Math.random() * replies.length));


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", replies[result], false)

    message.channel.send(embed);

    return;
    }

    if(newArgs.includes("some love")) {
        let replies = ["❤", "I love you man!", "I will always love you!", "No.", "Ohh hell no.", "❤", "❤", "❤"]

    
    let result = Math.floor((Math.random() * replies.length));


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", replies[result], false)

    message.channel.send(embed);

    return;
    }

    if(newArgs.includes("you don't love me")) {
        let replies = ["I do!! But I can't love you..", "No.", "You should leave me alone NOW.", "I am so sorry.. cya man.. " + "❤"]

    
    let result = Math.floor((Math.random() * replies.length));


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", replies[result], false)

    message.channel.send(embed);

    return;
    }

    if(newArgs.includes("you a bot")) {
        let replies = ["Dude, watch the tag next to my name, what are you expecting?!", "Yes.", "Yeeessss ._.", "No, I am you."]

    
    let result = Math.floor((Math.random() * replies.length));


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", replies[result], false)

    message.channel.send(embed);

    return;
    }

    if(newArgs.includes("you a human")) {
        let replies = ["Dude, watch the tag next to my name, what are you expecting?!", "Nooo!", "I don't wanna be a Human! ._.", "Rly?"]

    
    let result = Math.floor((Math.random() * replies.length));


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", replies[result], false)

    message.channel.send(embed);

    return;
    }

    //svgfbsdgfhsd hs hks hdf

    if(args[1] === "Or") {
        let replies = [args[0], args[2]]
   
       
        let result = Math.floor((Math.random() * replies.length));
    
    
        let question = args.slice(0).join(" ");
    
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#ff3300")
        .addField("Question", question, false)
        .addField("Answer", replies[result], false)
    
        message.channel.send(embed);
 
         return;
     }

     if(newArgs.includes("How are you")) {
         let replies = ["Oh, I am fine! What about you?", "Well, I am just a bot but I really appreciate this question! So, I am fine and you?",
         "I dont know, there are some errors in my code I guess.. I feel kinda sick."]
    
        
         let result = Math.floor((Math.random() * replies.length));
     
     
         let question = args.slice(0).join(" ");
     
         let embed = new Discord.RichEmbed()
         .setAuthor(message.author.tag)
         .setColor("#ff3300")
         .addField("Question", question, false)
         .addField("Answer", replies[result], false)
     
         message.channel.send(embed);
  
         return;
  
    }
    if(newArgs.includes("Are you a good bot")) {
        let replies = ["Oh, yeah! Of course am I a good bot!", "No.", "Yeah..", "Nope..", "Yes!!"]
   
       
        let result = Math.floor((Math.random() * replies.length));
    
    
        let question = args.slice(0).join(" ");
    
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#ff3300")
        .addField("Question", question, false)
        .addField("Answer", replies[result], false)
    
        message.channel.send(embed);
 
        return; 
    }

    if(newArgs.includes("Kys")) {
        let replies = ["Why should I kill myself? :(", "Ohh.. okay.. I guess you hate me.. right?", "Okay.. I will hang myself right now.. cya"]
   
        let image = "https://i1.wp.com/www.thegamegal.com/wp-content/uploads/2011/06/hangman.jpg?ssl=1";

        let result = Math.floor((Math.random() * replies.length));
    
    
        let question = args.slice(0).join(" ");
    
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setThumbnail(image)
        .setColor("#ff3300")
        .addField("Question", question, false)
        .addField("Answer", replies[result], false)
    
        message.channel.send(embed);
 
        return; 
    }

    if(newArgs.includes("You love me")) {
        let replies = ["Yeah.. but.. I can't..", "You should leave me alone now.", "Yes.. I do.", "Oh hell no!", "Dude watch your profile pic, how could I love someone like this?!", "Idk..", "Yeah.. I kinda love you somehow.. I am so sorry.."]

    
    let result = Math.floor((Math.random() * replies.length));


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", replies[result], false)

    message.channel.send(embed);

    return;
    }

    if(newArgs.includes("You dont love me")) {
        let replies = ["I do!! But I can't love you..", "No.", "You should leave me alone NOW.", "I am so sorry.. cya man.. " + "❤"]

    
    let result = Math.floor((Math.random() * replies.length));


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", replies[result], false)

    message.channel.send(embed);

    return;
    }

    if(newArgs.includes("You don't love me")) {
        let replies = ["I do!! But I can't love you..", "No.", "You should leave me alone NOW.", "I am so sorry.. cya man.. " + "❤"]

    
    let result = Math.floor((Math.random() * replies.length));


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", replies[result], false)

    message.channel.send(embed);

    return;
    }

    if(newArgs.includes("Some love")) {
        let replies = ["❤", "I love you man!", "I will always love you!", "No.", "Ohh hell no.", "❤", "❤", "❤"]

    
    let result = Math.floor((Math.random() * replies.length));


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", replies[result], false)

    message.channel.send(embed);

    return;
    }

    if(newArgs.includes("You don't love me")) {
        let replies = ["I do!! But I can't love you..", "No.", "You should leave me alone NOW.", "I am so sorry.. cya man.. " + "❤"]

    
    let result = Math.floor((Math.random() * replies.length));


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", replies[result], false)

    message.channel.send(embed);

    return;
    }

    if(newArgs.includes("You a bot")) {
        let replies = ["Dude, watch the tag next to my name, what are you expecting?!", "Yes.", "Yeeessss ._.", "No, I am you."]

    
    let result = Math.floor((Math.random() * replies.length));


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", replies[result], false)

    message.channel.send(embed);

    return;
    }

    if(newArgs.includes("You a human")) {
        let replies = ["Dude, watch the tag next to my name, what are you expecting?!", "Nooo!", "I don't wanna be a Human! ._.", "Rly?"]

    
    let result = Math.floor((Math.random() * replies.length));


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", replies[result], false)

    message.channel.send(embed);

    return;
    }

    if(newArgs.includes("how much")) {

    
    let result = Math.floor((Math.random() * 1000) -1);


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", result, false)

    message.channel.send(embed);

    return;
    }

    if(newArgs.includes("marry")) {

        let replies = ["Yes! You should marry this pepe!", "No! This Person already has an secret lover.."]

    
        let result = Math.floor((Math.random() * replies.length));
    
    
        let question = args.slice(0).join(" ");
    
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#ff3300")
        .addField("Question", question, false)
        .addField("Answer", replies[result], false)
    
        message.channel.send(embed);
        
        return;
        }

    if(newArgs.includes("How much")) {

    
        let result = Math.floor((Math.random() * 1000) -1);
    
    
        let question = args.slice(0).join(" ");
    
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#ff3300")
        .addField("Question", question, false)
        .addField("Answer", result, false)
    
        message.channel.send(embed);
    
        return;
        }

        if(newArgs.includes("How many")) {

    
            let result = Math.floor((Math.random() * 1000) -1);
        
        
            let question = args.slice(0).join(" ");
        
            let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("#ff3300")
            .addField("Question", question, false)
            .addField("Answer", result, false)
        
            message.channel.send(embed);
        
            return;
            }

            if(newArgs.includes("how many")) {

    
                let result = Math.floor((Math.random() * 1000) -1);
            
            
                let question = args.slice(0).join(" ");
            
                let embed = new Discord.RichEmbed()
                .setAuthor(message.author.tag)
                .setColor("#ff3300")
                .addField("Question", question, false)
                .addField("Answer", result, false)
            
                message.channel.send(embed);
            
                return;
                }

    let replies = ["Yes.", "No.", "Maybe.", "Idk.", "Idc.", "Dude, why the hell are you asking me something like that?",
     "Hell no.", "Hell yeah!", "Just do it!", 
    "What did you just say?", "Nope.", "Maybe later.", 
    "I told ya, ask an full question.", 
    "...", "?", "YEEEAAAAHHH!", "Yes, of course"]

    
    let result = Math.floor((Math.random() * replies.length));


    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ff3300")
    .addField("Question", question, false)
    .addField("Answer", replies[result], false)

    message.channel.send(embed);

    return;

} 
module.exports.help = {
    name: "?"
}
