
``js
else if (msg.toLowerCase().includes(".player riqui puig")) {
  reply = `⚽ *Riqui Puig*  
• Nationality: Spain 🇪🇸  
• Club: LA Galaxy  
• Position: Midfielder  
• Former Club: FC Barcelona  
• Style: Creative, technical playmaker`;
}
js
} else if (msg.includes(".menu")) {
  reply = `📋 *Mullar-NFS Bot Menu*:
🎵 .play song [name] – Search for a song
⚽ .player [name] – Info on a football player
🗞️ .news – Latest news
🎬 .movies – New movies
📈 .live scores – Sports updates
👤 .owner – Bot owner info
💡 .help – See all commands
😂 .joke – Random joke
💬 .quote – Motivational quote
☀️ .weather [city] – Get weather info
🕒 .time – Current time`;
}

else if (msg.toLowerCase().includes(".joke")) {
  reply = "😂 Why don’t programmers like nature? It has too many bugs!";
}

else if (msg.toLowerCase().includes(".quote")) {
  reply = "💬 *“Success is not final, failure is not fatal: it is the courage to continue that counts.”* – Winston Churchill";
}

else if (msg.toLowerCase().includes(".weather")) {
  reply = "☀️ Please enter a city like this: `.weather Nairobi` (live weather coming soon)";
}

else if (msg.toLowerCase().includes(".time")) {
  const now = new Date();
  reply = `🕒 Server time: ${now.toUTCString()}`;
}


```js
if (command === '!hentai') {
  if (!nsfwUsers.has(sender)) return sock.sendMessage(from, { text: '❌ NSFW not enabled.' });
  const res = await fetch('https://nekos.life/api/v2/img/hentai');
  const { url } = await res.json();
  sock.sendMessage(from, { image: { url }, caption: '🔞 Hentai' });
}

if (command === '!boobs') {
  if (!nsfwUsers.has(sender)) return sock.sendMessage(from, { text: '❌ NSFW not enabled.' });
  const res = await fetch('https://nekos.life/api/v2/img/boobs');
  const { url } = await res.json();
  sock.sendMessage(from, { image: { url }, caption: '🔞 Boobs' });
}

if (command === '!ass') {
  if (!nsfwUsers.has(sender)) return sock.sendMessage(from, { text: '❌ NSFW not enabled.' });
  const res = await fetch('https://nekos.life/api/v2/img/ass');
  const { url } = await res.json();
  sock.sendMessage(from, { image: { url }, caption: '🔞 Ass' });
}

if (command === '!waifu') {
  if (!nsfwUsers.has(sender)) return sock.sendMessage(from, { text: '❌ NSFW not enabled.' });
  const res = await fetch('https://api.waifu.pics/nsfw/waifu');
  const { url } = await res.json();
