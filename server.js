var express = require('express');
var morgan = require('morgan');

var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
   "article-one": {
    title: "ArticleOne",
    heading: "ArticleOne",
    date: "28th",
    content: `<div>
           
                this is the content for article one
          
        </div>`
},
   "article-two": {
    title: "ArticleTwo",
    date: "28th",
    heading: "ArticleTwo",
    content: `<div>
           
                this is the content for article two
          
        </div>`
},
   "article-three": {
    title: "ArticleThree",
    heading: "ArticleThree",
    date: "28th",
    content: `  <div>
           
                this is the content for article three
          
        </div> `
        
}
};


function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
var htmlTemplate = 
`<html>
    <head>
        <title>
          ${title}
        </title>
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    
    </body>
     <div class="container">
       
        <h1>
           ${heading}
        </h1>
        <hr/>
        <div> 
        Date : ${date}
        </div>
        <hr/>
        <div>
           
               ${content}
          
        </div>
        </div>
</html>`;
return htmlTemplate;
}
 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0
app.get('/counter', function(req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/:articleName' , function (req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
