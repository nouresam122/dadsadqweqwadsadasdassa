const express = require("express");
const keep_alive = require("./keep_alive.js");
const app = express();

app.listen(() => console.log("Elite S"));
require('events').EventEmitter.defaultMaxListeners = 30;
app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');
const parse = require ("parse-ms");
const probot = require("probot-tax");
const db = require('quick.db');


/////////////////
///ممنوع السرقة youssefgames
const prefix = "$"//بيرفكس الى تبيه
const developers = "877187519387693097"//الايدي حقك

//play
client.on("ready", () => {
  client.user.setActivity(`Elite S`)//غير الحالة الي تريد
});


client.on("message", async (message) => {
if(message.content.startsWith(prefix + "come")) {
if(message.author.bot) return 
if(!message.member.roles.cache.has('1140914020698820668','1140914036377141318','1188981319963775046')) //ايدي رتبة الي تقدر تستعمل الامر
if(!message.member.hasPermission('ADMINISTRATOR')) return
let user = message.mentions.members.first()
if(!user) return message.reply(`**Usage: \`${prefix}come\` @user**`)
user.send(`**الرجاء سرعة التوجه إلى <#${message.channel.id}> \nForm ${user}**`)
let embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`**✅ تم الارسال الي ${user}**`)
.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
message.channel.send(embed)
}
})


 client.login(process.env.token)



