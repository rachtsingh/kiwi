// alert("hello");
var doc = document.children[0];
var time;
var count = 0;
var old_title = document.title;

chrome.storage.sync.get('urls', function(data) {
    if (data){
    	urls = data;
    	flag = false;
    	time = 0;
    	console.log(urls.urls);
    	urls.urls.forEach(function(term){
    		console.log(term.value);
    		if (window.location.href.match(term.value) != null){
    			flag = true;
    			time = term.time;
    			console.log(term);
    			console.log(window.location.href);
    		}
    	});
    	console.log(flag);
    	if (flag){
    		createPageLoader(time);
    	}
    }
    else {
    	console.log("No Data!");
    }
});

function createPageLoader(){
    doc.style.opacity = 0;
    timer = window.setTimeout(fix, time*1000);
    countdown = window.setInterval(update, 1000);
}

function fix(){
	doc.style.opacity = 1;
	document.title = old_title;
    window.clearInterval(countdown);
}

function update(){
	document.title = (time - count).toString() + " seconds left";
	count++;
}
