const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "Displays all the commands for Wxycz.",
        usage: "[command]",
        aliases: ["commands", "help me", "pls help"]
    },

    run: async function(client, message, args){
        var allcmds = "";

        client.commands.forEach(cmd => {
            let cmdinfo = cmd.info
            allcmds+="`"+client.config.prefix+cmdinfo.name+" "+cmdinfo.usage+"` ~ "+cmdinfo.description+"\n"
        })

        let embed = new MessageEmbed()
        .setAuthor("Wxycz's Commands", "https://cdn.discordapp.com/emojis/791034054434357263.gif?v=1")
        .setColor("BLACK")
        .setDescription("**w.help** - Displays all the commands for Wxycz.\n**w.invite** - Displays the bot invite.\n**w.leave** - Disconnects the bot from the VC.\n**w.loop** - Loops the current song or queue.\n**w.lyrics** - Displays the lyrics for any song.\n**w.nowplaying** - Displays the currently playing song.\n**w.pause** - Pauses the current song.\n**w.play** - Plays any song.\n**w.playlist** - Plays the requested youtube playlist by link.\n**w.queue** - Shows a list of every song in the queue.\n**w.remove** - Removes the requested song from the queue.\n**w.resume** - Resumes a paused song.\n**w.search** - Searches for any song on youtube.\n**w.shuffle** - Shuffles the queue around a bit.\n**w.skip** - Skips the current song.\n**w.skipto** - Skips to the requested song in the queue.\n**w.stop** - Stops the current song.\n**w.volume** - Configures the volume of the music.")
        .setFooter(`Made By Wxycz | (AKA Syko)#8888 | Join Syko's Community @ https://dsc.gg/syko! | To get info on each command type ${client.config.prefix}help [command]`)

        if(!args[0])return message.channel.send(embed)
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.channel.send("Unknown Command")
            let commandinfo = new MessageEmbed()
            .setTitle("Command: "+command.info.name+" info")
            .setColor("BLACK")
            .setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${client.config.prefix}${command.info.name} ${command.info.usage}\`\`
Aliases: ${command.info.aliases.join(", ")}
`)
            message.channel.send(commandinfo)
        }
    }
}
