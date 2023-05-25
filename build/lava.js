let red, green, blue, yellow, orange, purple, grey, gray, pink, black, white;

let enabled, disabled;

red = "red";
green = "green";
blue = "blue";
yellow = "yellow";
orange = "orange";
purple = "purple";
grey = "gray";
gray = "grey";
pink = "pink";
black = "black";
white = "white";

enabled = true;
disabled = false;

let lava = {
  document: {
    text: function(text, size, color) {
      var x = document.createElement("h1");
      x.style.fontSize = size + "px";
      x.style.color = color;
      x.innerHTML = text;
      document.body.appendChild(x);
    },
    image: function(src, w, h) {
      var x = document.createElement("img");
      x.src = src;
      x.style.width = w + "px";
      x.style.height = h + "px";
      document.body.appendChild(x);
    }
  },
  print: function(text) {
    console.log(text);
  },
  body: function(color) {
    document.body.style.backgroundColor = color;
  },
  html: function(html, enabled) {
    if (enabled == true) {
      document.body.innerHTML += html;
    } else {
      console.log("html is not enabled")
    }
  },
  mouseevent: {
    buttonclick: {
      new: function(txt, w, h, scr) {
        var x = document.createElement("button");
        x.innerHTML = txt;
        x.style.width = w + "px";
        x.style.height = h + "px";
        x.addEventListener('click', function() {
          scr();
        });
        document.body.appendChild(x);
      }
    },
    buttonhover: {
      new: function(txt, w, h, scr) {
        var x = document.createElement("button");
        x.innerHTML = txt;
        x.style.width = w + "px";
        x.style.height = h + "px";
        x.addEventListener('mouseover', function() {
          scr();
        });
        document.body.appendChild(x);
      }
    }
  }
}
