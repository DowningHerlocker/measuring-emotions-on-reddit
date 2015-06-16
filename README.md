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

- - -

With my new easy to navigate json, I ran a sentiment analysis test on all of the comments of each post on each subreddit. Sentiment is a Node.js modulue that uses a preset worldlist, where each block of test is scored based on the negative or positive value of each word. Below is an example of how the sentiment analysis works:

```
"You're dad is adorable and I want to adopt him." -Score: 5
"It is incredible how many idiots are around us. Reddit is an idiot magnet" -Score: -3
```
Sometimes, the sentiment scores can be off, due to sentiment's failure to understand context, as seen below:

```
"I'm so sorry for your loss. 😢" Score: -4
```

However, by examining thousands of comments, the sum score pretty much averages out. 

- - -

Aside from the easy to access API, I chose to anaylyze reddit because it covers such a broad range of topics, and is utilized by such a wide range of people. I performed the analysis on the top 50 subreddits. 

This graph shows the sum sentiment scores of the top 50 subreddits from negative to positive. 

<div align="left">
        <img width="65%" src="img/subscores.png" alt="subscores" title="subscores"</img>
        <img height="2" width="10px">
</div>

As you can see, the subreddit "IAmA" has the highest sum sentiment scores. With the "I Am A" subreddit, users post what they do in life, and people can comment, ask questions, ect. The subreddit with the most negative sum sentiment score was "AskReddit", where users can ask reddit anything. 

- - -
After analyzing the top 50 subreddits, I looked into contrasting subreddits.

Here you can see that people posting about dogs are extremely more positive than people posting about cats.

<div align="left">
        <img width="65%" src="img/catdog.jpg" alt="reddit json" title="reddit json"</img>
        <img height="2" width="10px">
</div>

- - -

Here you can see the difference in sum sentiment scores for republicans versus democrats. Although the two groups can never seem to agree on anything, their sum sentiment scores are not that different. 

<div align="left">
        <img width="65%" src="img/politics.jpg" alt="reddit json" title="reddit json"</img>
        <img height="2" width="10px">
</div>

- - -

Finally, I analyzed the top 25 U.S. cities. The top 25 cities ranked according to population and rank respectively include: 

```New York City, Los Angeles, Chicago, Houston, Philadelphia, Phoenix, San Antonio, Dallas, San Jose, Austin, Jacksonville, San Francisco, Indianapolis, Columbus, Fortworth, Charlotte, Detroit, El Paso, Seattle, Denver, Washington D.C., Memphis, Boston, Nashville ```

Here you can see the different sum sentiment scores of each U.S. city. Suprising how the nation's capital has the second lowest sentiment score...

<div align="left">
        <img width="65%" src="img/cities.png" alt="clean json" title="clean json"</img>
        <img height="2" width="10px">
</div>

<div align="right">
        <img width="65%" src="img/negativedc.png" alt="clean json" title="clean json"</img>
        <img height="2" width="10px">
        
</div>

- - -

 Whether you want to analyze how people feel about your favorite sports teams, the country you're visiting this summer, or the candidates for the presidential election, using sentiment anaylsis can quickly determine the human emotions on thousands of different topics. 

- - -
*6-4-15*
