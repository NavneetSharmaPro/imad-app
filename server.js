var express = require('express'); //Library to create webservers
var morgan = require('morgan'); //Library Used to output logs
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
//For above code: When a get request is made to '/' function should execute
//sendFile method-> sends ui/index.html

//Adding HTML files to js
var articles={
        'article-one' : {
            title:'Article One | Navneet Sharma',
            heading: 'Article One',
            date:'Mar 11th, 2018',
            content: `
                <p>
                    This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article.
                </p>
                <p>
                    This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article.
                </p>
                <p>
                    This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article.
                </p>`
                },
        'article-two' : {
            title:'Article Two | Navneet Sharma',
            heading: 'Article Two',
            date:'Mar 11th, 2018',
            content: `
                <p>
                    This is my Second article.
                </p>
            `
        },
        'article-three' : {
            title:'Article Three | Navneet Sharma',
            heading: 'Article Three',
            date:'Mar 11th, 2018',
            content: `
                <p>
                    This is my Third article. 
                </p>
            `
        }
};

function createTemplate(data){ 
    
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate=`
        <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" context="width=device-width,initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    
    `;
    return htmlTemplate;
}
//Added new app.get() * 3

app.get('/:articleName',function(req,res){
    //articleName==article-one
    //articles[articleName]=={} content onject for article
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
    //This t in createTemplate fucked me over. -_-
});

var counter = 0;
app.get('/counter', function(req, res) {
   counter = counter+1;
   res.send(counter.toString());
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


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
