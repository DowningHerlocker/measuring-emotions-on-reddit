var request = require('request')
var queue = require('queue-async')
var sentiment = require('sentiment')

var topSubreddits = ['nyc', 'LosAngeles', 'chicago', 'houston', 'philadelphia', 'phoenix', 'sanantonio', 'dallas', 'sanjose', 'austin', 'jacksonville', 'sanfrancisco', 'indianapolis', 'columbus', 'fortworth', 'charlotte', 'detroit', 'elpaso', 'seattle', 'denver', 'washingtondc', 'memphis', 'boston', 'nashville'] 
var q = queue(1)
topSubreddits.forEach(function(topSubreddit) {
    q.defer(function(sub,done){
        request('http://www.reddit.com/r/'+ topSubreddit +'.json', function (error, response, body) {
            var subResponse= JSON.parse(body)
            var posts= subResponse.data.children
            var postsData= []
            posts.forEach(function(post){
                post=post.data
                var postData= {}
                postData.title= post.title
                postData.url= post.url
                postData.permalink= post.permalink
                postData.score= post.score
                postData.numComments= post.num_comments
                postData.subreddit= post.subreddit
                postData.comments= []
                postsData.push(postData)
            })
            var subData = {
                subreddit: postsData[0].subreddit,
                posts: postsData
            }
            done(null, subData)
     })
    }, topSubreddit)    
})


q.awaitAll(function(errors,subreddits){
    var qComments = queue(1)
    subreddits.forEach(function(subreddit){
        subreddit.posts.forEach(function(post){
            qComments.defer(function(done){
                var url = 'http://reddit.com'+post.permalink+'.json'
                request(url, function(err, response, body){
                    if (!err && response.statusCode == 200) {
                        var comments = JSON.parse(body)[1].data.children
                        comments.forEach(function(comment){
                            var commentData= {
                                text: comment.data.body,
                                score: sentiment(comment.data.body).score
                            }
                            post.comments.push(commentData)
                        })
                        setTimeout(function(){
                            done(null, comments)    
                        }, 2000)
                    } else {
                        done(err, null)
                    }
                })
            })
        })
    })
    qComments.awaitAll(function(errors, responses){
        console.log(JSON.stringify(subreddits))
    })
})