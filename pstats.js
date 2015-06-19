var fs= require('fs')
var subreddits= JSON.parse(fs.readFileSync('politics.json', 'utf8'))

subreddits.forEach(function(subreddit) {
	subreddit.posts.forEach(function(post){
		var sum= 0 
		var max= -Infinity
		var min= Infinity
		post.comments.forEach(function(comment){
			sum= sum + comment.score
			if (comment.score > max) {
				max = comment.score
			} 
			if (comment.score < min) {
				min = comment.score
			} 
		})
		post.sum= sum
		post.min= min
		post.max= max
	})
})

subreddits.forEach(function(subreddit) {
	var sum= 0 
	var max= -Infinity
	var min= Infinity
	subreddit.posts.forEach(function(post){
		sum = sum + post.sum
		if (post.max > max) {
			max= post.max
		} 
		if (post.min < min) {
			min = post.min
		}	
	})
	subreddit.sum = sum
	subreddit.max = max
	subreddit.min = min
})

console.log(JSON.stringify(subreddits))

var sum = 0
var max= -Infinity
var min= Infinity
subreddits.forEach(function(subreddit) {
	sum = sum + subreddit.sum
	if (subreddit.max > max) {
		max= subreddit.max
	}
	if (subreddit.min < min) {
		min = subreddit.min
	}
})
console.log(sum)
console.log(max)
console.log(min)




