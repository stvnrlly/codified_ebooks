# codified_ebooks

The bills that never were. Uses open data from [Govtrack](https://govtrack.us)
to generate random new bills for Congress to pass.

## Installation

You'll need Twitter API keys, as specified in the [Twit
documentation](https://github.com/ttezel/twit) and created in [Twitter's app
management console](https://apps.twitter.com/). Add those to a `.env` file like
so:

```
TWITTER_CONSUMER_KEY=your_consumer_key
TWITTER_CONSUMER_SECRET=your_consumer_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret
```

Then:

```
npm install
npm start
```

## License

This work is dedicated to the public domain. Copyright is waived under a
[CC0-1.0 license](LICENSE.md).
