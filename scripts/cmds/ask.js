const axios = require('axios');

const Prefixes = [
  '/ai',
  'ai+',
  'ben',
  '+ai',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("🅖🅗🅞🅢🅣



𝐩𝐨𝐬𝐞 𝐥𝐚 𝐭𝐚 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧 𝐰𝐞𝐬𝐡
 :");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: ` Mortel voici les résultats des vos recherches : 
______________________________  
${answer}
🅖🅗🅞🅢🅣`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
