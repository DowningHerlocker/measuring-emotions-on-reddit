measuring-emotions-on-reddit
===

In order to analyze human emotion in social networks, I used sentiment analysis on hundreds of comments on reddit.com. In this post, you'll see how I parsed through reddit's somewhat messy API, and found the sum sentiment scores for the top 50 subreddits. 

Reddit, is more than just a place to get updated on worldnews, look at cute pictures of puppies, and hear about the latest edition of world of warcraft. Reddit has become a community where millions of people gather every day to view and post their thoughts, opinions, and views on thousands of different topics. Reddit is great because it's public API allows access to lots of useful data just by adding ".json" to the end of the post's url. However, as you can see below, the API is somewhat hard to navigate. 

<div align="left">
        <img width="65%" src="img/MessyJson.jpg" alt="reddit json" title="reddit json"</img>
        <img height="2" width="10px">
</div>


I parsed the API, taking out the relevant information needed for my analysis. Here is a sample of my cleaned-up json:

<div align="left">
        <img width="65%" src="img/cleanjson.png" alt="clean json" title="clean json"</img>
        <img height="2" width="10px">
</div>


With my new easy to navigate json, I ran a sentiment analysis test on all of the comments of each post on each subreddit. Sentiment is a Node.js modulue that uses a preset worldlist, where each block of test is scored based on the negative or positive value of each word. Below is an example of how the sentiment analysis works:

```
"You're dad is adorable and I want to adopt him." -Score: 5
"It is incredible how many idiots are around us. Reddit is an idiot magnet" -Score: -3
```
Sometimes, the sentiment scores can be off, due to sentiment's failure to understand context, as seen below:

```
"You cheeky bastard. Lemme get your number." -Score: -5
```

However, by examining thousands of comments, the sum score pretty much averages out. 

Aside from the easy to access API, I chose to anaylyze reddit because it covers such a broad range of topics, and is utilized by such a wide range of people. I performed the analysis on the top 50 subreddits. 

This graph shows the sum sentiment scores of the top 50 subreddits from negative to positive. 

<div align="left">
        <img width="65%" src="img/subscores.png" alt="subscores" title="subscores"</img>
        <img height="2" width="10px">
</div>

As you can see, the subreddit "IAmA" has the highest sum sentiment scores. With the "IAmA" subreddit, users post what they do in life, and people can comment, ask questions, ect. Let's look at a few posts in this subreddit to see what sentiment analysis found. 

[Subreddit: I Am A
Post: "We're the Google Flights team, makers of flight search related stuff. Ask us anything!"]

This post in particular had 329 total comments, which I easily found from parsing the API. Of the 329 comments, there were some negative comments, such as:
 	
 ```"Why did you eliminate the list view of flights? The graphic map might be neat to look at but it is a time waster for business travelers. You lost my business." -Score: -3```

 and many positive comments, such as:

```"I love the new amenity data on the site. Are there any plans to expand that? Mostly interested in more WiFi info and entertainment, to be honest." -Score: 8 ```

 

In contrast to the subreddit "IAmA", the subreddit with the lowest sum sentiment score was "AskReddit" 

[]

*6-4-15*
