// const { TwitterClient } = require("twitter-api-client");
// const axios = require("axios");

// const twitterClient = new TwitterClient({
//   apiKey: process.env.TWITTER_API_KEY,
//   apiSecret: process.env.TWITTER_API_SECRET,
//   accessToken: process.env.TWITTER_ACCESS_TOKEN,
//   accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
// });

// axios
//   .get("https://onesongaday.herokuapp.com/onesongaday")
//   .then((res) => {
//     const song = res.data.data;
//     const tweet = `♫ La canción del día ya disponible en #OneSongADay!! Hoy traemos ${song.title} de ${song.author}!! https://youtu.be/${song.youtube_link}`;
//     twitterClient.tweets
//       .statusesUpdate({
//         status: tweet,
//       })
//       .then((_response) => {
//         console.log(`Successfully tweeted on ${new Date()}`);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
