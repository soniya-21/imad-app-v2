var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var ArticleOne ={
    title: 'Article one | Soniya Singh Panwar ',
    heading: 'Article One',
    date: 'February 14,2017',
    content: ` <p>
                This is my first article.
                I am learning to develop a web app.
            </p>
            <p>
                I am gonna develop my own web app soon.
                This is my first code on my own on the console.
            </p>`
            
};

function createtemplate(data){
    var title=data.title;
    var date=data.date;
    var content=data.content;
    var heading=data.heading;
var HtmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <hr/>
        <h4>
            ${heading}
        </h4>
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
return HtmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
    res.send(createtemplate(ArticleOne));
});

var ArticleTwo ={
    title1: 'Article Two | Soniya Singh Panwar',
    heading1: '  Article Two',
    date1: 'February 14,2017 ',
    time: ' 11:47 PM',
    content1: `  <p>
                This is my second article.
                I am learning to develop a web app.
            </p>
            <p>
                I am gonna develop my own web app soon.
                This is my second code on my own on the console.
                Soniya Singh Panwar
                Gweca
            </p>`
};

function createTemplate1(data){
    var title1=data.title1;
    var heading1=data.heading1;
    var content1=data.content1;
    var time=data.time1;
    var date1=data.date1;
var HtmlTemplate1=`
<html>
    <head>
        <title>
            ${title1} 
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <hr/>
        <h4>
            ${heading1}
        </h4>
        <div>
            ${date1}
        </div>
        <div>
            ${time}
        </div>
        <div>
            ${content1}
        </div>
        </div>
    </body>
</html>

`;
return HtmlTemplate1;
}
app.get('/article-two',function(req,res){
     res.send(createTemplate1(ArticleTwo));
});

var ArticleThree= {
    title2: 'Article Three | Soniya Singh Panwar',
    date2: 'February 14,2017',
    content2: `  <p>
                This is my third article.
                I am learning to develop a web app.
            </p>
            <p>
                I am gonna develop my own web app soon.
                This is my third code on my own on the console.
            </p>`,
    heading2: 'Article Three',
    arc: ' SSP\'s Web Page'
};

function createTemplate2(data){
    var title2=data.title2;
    var heading2=data.heading2;
    var content2=data.content2;
    var arc=data.arc;
    var date2=data.date2;
var HtmlTemplate2=`
<html>
    <head>
        <title>
           ${title2}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <hr/>
        <h4>
            ${heading2}
        </h4>
        <div>
            ${date2}            
        </div>
        <div>
            ${arc}
        </div>
        <div>
           ${content2}
        </div>
        </div>
    </body>
</html>
`;
return HtmlTemplate2;
}

app.get('/article-three',function(req,res){
     res.send(createTemplate2(ArticleThree));
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
