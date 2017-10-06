var quotes = {
    init: function (quote, author) {
        this.quote = quote;
        this.author = author;
    },
    describe: function () {
        var description = this.quote + " - " + this.author;
        return description;
    }
};

var quote1 = Object.create(quotes);
quote1.init("Great things in business are never done by one person. They're done by a team of people.", "Steve Jobs");

var quote2 = Object.create(quotes);
quote2.init("Innovation distinguishes between a leader and a follower.", "Steve Jobs");

var quote3 = Object.create(quotes);
quote3.init("Everyone here has the sense that right now is one of those moments when we are influencing the future.","Steve Jobs");

var quote4 = Object.create(quotes);
quote4.init("Stay hungry, stay foolish.", "Steve Jobs");

var quote5 = Object.create(quotes);
quote5.init("Don't cry because it's over, smile because it happened.","Dr. Seuss");

var quote6 = Object.create(quotes);
quote6.init("Be yourself; everyone else is already taken.", "Oscar Wilde");

var quote7 = Object.create(quotes);
quote7.init("Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", "Bernard M. Baruch");

var quote8 = Object.create(quotes);
quote8.init("Be the change that you wish to see in the world.", "Mahatma Gandhi");

var quote9 = Object.create(quotes);
quote9.init("In three words I can sum up everything I've learned about life: it goes on.", "Robert Frost");

var quote10 = Object.create(quotes);
quote10.init("Live as if you were to die tomorrow. Learn as if you were to live forever.", "Mahatma Gandhi");

var nquotes = [];
nquotes.push(quote1);
nquotes.push(quote2);
nquotes.push(quote3);
nquotes.push(quote4);
nquotes.push(quote5);
nquotes.push(quote6);
nquotes.push(quote7);
nquotes.push(quote8);
nquotes.push(quote9);
nquotes.push(quote10);

window.onload = function (){
  
    _("generate").onclick = function () { showRandom() }       
    
    _("show").onclick = function (){ showData() }
    
    _("exit").onclick = function () { showLink() }
}

var random = function (list) {
    return list[Math.floor((Math.random() * list.length))];
}

function showRandom(){
    _('display').innerHTML = random(nquotes).describe();
}

function showData () {
    var tmp = '<ul>';
    nquotes.forEach(function (quotes) {
      console.log(quotes.describe());          
      tmp += '<li>'+quotes.describe()+'</li>';
    });
    _('display').innerHTML = tmp+'<\ol>';
}


function showLink () {
    _('display').innerHTML = '<a href="https://www.linkedin.com/in/danielkapexhiu/" target="_new">Contact me!</a>';
}

function _(e) {
   return document.getElementById(e);
}
