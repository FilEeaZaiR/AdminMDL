const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "/";

client.on("ready", () => {
    console.log("Connection en cours ...");
    client.user.setActivity("En maintenance ...");
});

client.login("NTE3NDEwNDE3MzI1MjQ0NDE2.DuB0Ag.RTtXNWg3kn62HhV690Sd983JU4k");
client.on(`message`, message =>{
    if (message.content.startsWith(prefix + "kick")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("`Tu ne peux pas faire cette commande !`");
        
        if(message.mentions.users.size === 0) {
            return message.channel.send(`Je veux bien @${message.author.username} mais vous devez mentionner un utilisateur`)
        }

        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("Je ne sais si l'utilisateur existe !")
        }

        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je n'ai pas la perm pour cette commande");
        }

        kick.kick().then(member => {
            message.channel.send(`${member.user.username} a été kick par ${message.author.username}`);
        });
    }

    if (message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("`Tu ne peux pas faire cette commande !`");
        
        if(message.mentions.users.size === 0) {
            return message.channel.send(`Je veux bien ${message.author.username} mais vous devez mentionner un utilisateur`)
        }

        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("Je ne sais si l'utilisateur existe !")
        }

        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Je n'ai pas la perm pour cette commande");
        }

        ban.ban().then(member => {
            message.channel.send(`${member.user.username} a été banni par ${message.author.username}`);
        });
    }

    if(message.content.startsWith(prefix + "help")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("Vous n'avez pas la permission requise pour faire cette commande !");

        if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGE")) return message.channel.send("Je ne pas la permission requise pour faire la commande !");
            var staff_embed = new Discord.RichEmbed()
            .setColor("18d67e")
            .setTitle("les commandes du staff")
            .setDescription("Je suis là pour aider le staff.")
            .addField("p!clearp", "clear le chat")
            .addField("p!mute", "mute un personne")
            .addField("p!unmute", "unmute une personne")
            .addField("p!kick", "kick une personne")
            .addField("p!ban", "Bannir une personne")
            .setFooter("PrétiNiumBot by Pamort58")
            message.channel.send(staff_embed);
            console.log("Un membre à utilisé la commande p!staff");
        }
});