const { TwitterClient } = require("twitter-api-client");

const twitterClient = new TwitterClient({
  apiKey: "zPp3bjqmqVZRxhyW5QEN38uhJ",
  apiSecret: "b2ItgsXzqFJr8MeGyxcrq9oDnL1c1a1kdFy1G2T5dulALDO3vh",
  accessToken: "1482725827993346049-SIjvoXclpiLwKeStLQs3lSxKo4BTHq",
  accessTokenSecret: "LsYDvHjiHJwa6RxXXR1nFxmm38BdaJbN2eufnjWP6j8wG",
});

twitterClient.tweets
  .statusesUpdate({
    status: "tweet",
  })
  .then((response) => {
    console.log("Tweeted!", response);
  })
  .catch((err) => {
    console.error(err);
  });
