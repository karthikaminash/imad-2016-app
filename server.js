var express = require('express');
var morgan = require('morgan');

var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: "ArticleOne",
    heading: "ArticleOne",
    date: "28th",
    content: `<div>
           
                this is the content for article one
          
        </div>`
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date
    var content = data.content
    
var htmlTemplate = 
`<html>
    <head>
        <title>
          ${title}
        </title>
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
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
    </body>
</html>`;
return htmlTemplate;
}
 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one' , function (req, res){
    res.send(createTemplate(articleOne));
});
app.get('/article-two' , function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three' , function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
