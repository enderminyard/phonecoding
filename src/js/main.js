let get_random = (object, property) => {
  let key = object[property];
  let list = Object.values(key);
  return list[Math.floor(Math.random() * list.length)];
};

let randomList = (object) => {
  let list = Object.keys(object);
  let rand = list[Math.floor(Math.random() * list.length)];
  let array = object[rand];
  return array;
};

let images = {
  1: {
    image: "https://i.ibb.co/txdzMrX/1.jpg",
    alt: "Path in the forest",
    figcaption: "",
  },
  2: {
    image: "https://i.ibb.co/vvPdZ7D/2.jpg",
    alt: "Yellow green tree tops",
    figcaption: "",
  },
  3: {
    image: "https://i.ibb.co/tmc7vKV/3.jpg",
    alt: "Zoomed in flower bouquet",
    figcaption: "flowersbyford",
  },
  4: {
    image: "https://i.ibb.co/HVfH85H/4.jpg",
    alt: "Loosely packed flower bouquet",
    figcaption: "flowersbyford",
  },
  5: {
    image: "https://i.ibb.co/6HPfLwL/5.jpg",
    alt: "Flowers placed on top of a mirror reflecting a blue sky",
    figcaption: "italicaemme",
  },
  6: {
    image: "https://i.ibb.co/2jf42B8/6.jpg",
    alt: "Yellow flowers in a vase",
    figcaption: "italicaemme",
  },
  7: {
    image: "https://i.ibb.co/M24T2zQ/7.jpg",
    alt: "Flowers and candles on a table in a dimly lit room",
    figcaption: "imdad_barbhuyan",
  },
  8: {
    image: "https://i.ibb.co/b5xRsVk/8.jpg",
    alt: "wavy colorful rugs inside a sunny room",
    figcaption: "mush studios",
  },
  9: {
    image: "https://i.ibb.co/Q6xccCq/9.jpg",
    alt: "Flower bouquets in the colors pink and purple on shelves",
    figcaption: "cuisiniere",
  },
  10: {
    image: "https://i.ibb.co/gVvtZQb/10.jpg",
    alt: "A boat on a lake",
    figcaption: "estetka_alevtina",
  },
  11: {
    image: "https://i.ibb.co/VtFkjmV/11.jpg",
    alt: "A painting of flowers in front of the flowers that were painted",
    figcaption: "estetka_alevtina",
  },
  12: {
    image: "https://i.ibb.co/9yYZWWX/12.jpg",
    alt: "A boat has a bowl of peaches and a flower bouquet on top of it. This boat is on top of a lake with lily pads",
    figcaption: "alexlysko",
  },
};

let quotes = {
  1: {
    quote: "we click, we change",
    source: "Programmed Visions: Software and Memory",
  },
  2: {
    quote: "Yes is a future",
    source: "Pleasure Activism",
  },
  3: {
    quote: "Pleasure is the point",
    source: "Pleasure Activism",
  },
  4: {
    quote: "all flourishing is mutual",
    source: "Braiding Sweetgrass",
  },
  5: {
    quote: "ceremonies magnify life",
    source: "Braiding Sweetgrass",
  },
  6: {
    quote: "I felt, and feel, miraculous",
    source: "Emergent Strategy",
  },
  7: {
    quote: "Puddle of sky on earth",
    source: "Night Sky with Exit Wounds",
  },
  8: {
    quote: "home is inside us",
    source: "The Art of Communicating",
  },
  9: {
    quote: "a utopia always in process",
    source: "Utopia in Performance",
  },
  10: {
    quote: "concrete fantasy",
    source: "Utopia in Performance",
  },
  11: {
    quote: "the sadness in our joy",
    source: "Utopia in Performance",
  },
  12: {
    quote: "what redemption might be like",
    source: "Utopia in Performance",
  },
  13: {
    quote: "transcendent bits of profound feeling",
    source: "Utopia in Performance",
  },
  14: {
    quote: "beauty makes life vivid, animated, worth living",
    source: "On Beauty",
  },
  15: {
    quote: "occasional sparks revive the intensity of play",
    source: "K-pop Live",
  },
  16: {
    quote: "cravings for newness",
    source: "K-pop Live",
  },
  17: {
    quote: "group liveness",
    source: "K-pop Live",
  },
  18: {
    quote: "celebrating the energy of existence",
    source: "K-pop Live",
  },
  19: {
    quote: "desire compels us",
    source: "Utopia in Performance",
  },
  20: {
    quote: "the courage to care",
    source: "Utopia in Performance",
  },
};

let cssProperties = {
  border: {
    1: "thin solid black",
    2: "thin dotted dimgrey",
    3: "thin dashed lightgrey",
    4: "thin double grey",
    5: "thin solid grey",
    6: "thin dotted lightgrey",
    7: "thin dashed dimgrey",
    8: "thin double black",
    9: "medium solid black",
    10: "medium dotted dimgrey",
    11: "medium dashed lightgrey",
    12: "medium double grey",
  },

  "font-size": {
    1: "80%",
    2: "xx-small",
    3: "x-small",
    4: "small",
    5: "medium",
    6: "large",
    7: "x-large",
    8: "xx-large",
    9: "xxx-large",
    10: "smaller",
    11: "larger",
    12: "unset",
  },
  "font-stretch": {
    1: "condensed",
    2: "expanded",
    3: "ultra-expanded",
    4: "1.25%",
    5: "0.25%",
    6: "0.50%",
    7: "0.75%",
    8: "0.100%",
    9: "0.150%",
    10: "0.200%",
  },

  "font-style": {
    1: "normal",
    2: "italic",
    3: "oblique",
    4: "oblique 0.125deg",
    5: " oblique 0.25deg",
    6: " oblique 0.50deg",
    7: " oblique 0.75deg",
    8: " oblique -0.10deg",
    9: " oblique -0.60deg",
    10: " oblique -0.20deg",
  },

  "letter-spacing": {
    1: "normal",
    2: "0.01rem",
    3: "0.02rem",
    4: "0.03rem",
    5: "0.04rem",
    6: "0.05rem",
    7: " 0.06rem",
    8: "0.07rem",
    9: "0.08rem0",
    10: "0.09rem",
    11: "0.10rem",
    12: "0.11rem",
  },

  transform: {
    1: "rotate3d(0)",
    2: "rotate3d(1, 1, 1, 2deg)",
    3: "rotate3d(1, 2, -1, 1deg)",
    4: "rotate3d(2, -1, -1, 2deg)",
    5: "rotate3d(0, 1, 0.5, 1deg)",
    6: "rotate3d(0, 1, 0, 2deg)",
    7: "translate(1px, 2%)",
    8: "rotate(0.05turn)",
    9: "scale(0.5) translate(-1%, -1%)",
    10: "translateX(.02em)",
    11: "translateY(3px)",
    12: "translate(3px, 2px) rotate(2deg)",
  },

  translate: {
    1: "none",
    2: "40px",
    3: "5% -4%",
    4: "2px .4rem",
    5: "0px .4rem 15px",
    6: "10px",
    7: "10px 20px",
    8: "5% 15px",
    9: "5% 1.5px .5rem",
    10: "2px",
    11: "2px 2px",
    12: "5px 5px 3px",
  },
  color: {
    1: "black",
    2: "dimgrey",
    3: "darkslateblue",
    4: "rebeccapurple",
    5: "slateblue",
    6: "mediumslateblue",
    7: "slategrey",
    8: "darkorchid",
    9: "firebrick",
    10: "indigo",
    11: "mediumblue",
    12: "midnightblue",
  },
  "background-color": {
    1: "white",
    2: "cornsilk",
    3: "floralwhite",
    4: "ghostwhite",
    5: "linen",
    6: "mintcream",
    7: "oldlace",
    8: "seashell",
    9: "snow",
    10: "whitesmoke",
    11: "thistle",
    12: "AntiqueWhite",
  },

  "border-radius": {
    1: "30% 70% 70% 30% / 30% 30% 70% 70% ",
    2: "67% 33% 82% 18% / 37% 58% 42% 63% ",
    3: "1e5px",
    4: "30% 70% 70% 30% / 53% 30% 70% 47%",
    5: "53% 47% 34% 66% / 63% 46% 54% 37%",
    6: "37% 63% 56% 44% / 49% 56% 44% 51%",
    7: "63% 37% 37% 63% / 43% 37% 63% 57%",
    8: "49% 51% 48% 52% / 57% 44% 56% 43%",
  },
  "font-family": {
    1: "IBM Plex Sans",
    2: "sans-serif",
    3: "monospace",
    4: "cursive",
    5: "fantasy",
    6: "system-ui",
    7: "ui-serif",
    8: "ui-sans-serif",
    9: "Playfair Display",
    10: "Inknut Antiqua",
    11: "Space Grotesk",
    12: "Helvetica",
  },
  "background-image": {
    1: "url(https://i.ibb.co/JFFpm07/Mesh-1.png)",
    2: "url(https://i.ibb.co/pP1GL3g/Mesh-2.png)",
    3: "url(https://i.ibb.co/5sbDSn2/Mesh-3.png)",
    4: "url(https://i.ibb.co/g7JyNz4/Mesh-4.png)",
    5: "url(https://i.ibb.co/rF6nkpS/Mesh-5.png)",
    6: "url(https://i.ibb.co/SQy4jcS/Mesh-6.png)",
    7: "url(https://i.ibb.co/183T33G/Mesh-7.png)",
    8: "url(https://i.ibb.co/fQHW29f/Mesh-8.png)",
    9: "url(https://i.ibb.co/yYY5gJp/Mesh-9.png)",
    10: "url(https://i.ibb.co/c2nBPPS/Mesh-10.png)",
  },
};

let body = () => {
  let img = randomList(images);
  let book = randomList(quotes);

  return `
  <h1>${book["quote"]}</h1>
  <cite><span class='drama'>from ${book["source"]}</span></cite>
  
  <figure>
      <img src='${img["image"]}' alt='${img["alt"]}'>
      <figcaption><span class='caption'>${img["figcaption"]}</span></figcaption>
  </figure>
  `;
};

let randomStyle = () => {
  return `body {
      display: grid;
      place-content: center;
      text-align: center;
  }
  
  figcaption{
    background-image: ${get_random(cssProperties, "background-image")};
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    border-radius:  ${get_random(cssProperties, "border-radius")};
  }
  
  h1 {
      font-style:${get_random(cssProperties, "font-style")};
      font-stretch:${get_random(cssProperties, "font-stretch")};
      font-style:${get_random(cssProperties, "font-style")};
      letter-spacing:${get_random(cssProperties, "letter-spacing")};
      font-family:${get_random(cssProperties, "font-family")};
      filter: drop-shadow(2px 2px 10px ${get_random(cssProperties, "color")});
  
    }
    figcaption, .drama {
      translate:${get_random(cssProperties, "translate")};
      transform: ${get_random(cssProperties, "transform")};
      font-size:${get_random(cssProperties, "font-size")};
      font-family:${get_random(cssProperties, "font-family")};
    }
  
   .drama {
      font-size:${get_random(cssProperties, "font-size")};
      font-stretch:${get_random(cssProperties, "font-stretch")};
      font-style:${get_random(cssProperties, "font-style")};
      letter-spacing:${get_random(cssProperties, "letter-spacing")};
      border:  ${get_random(cssProperties, "border")};
      background-color:  ${get_random(cssProperties, "background-color")};
      padding: 4px;
    }
  
    .caption {
      filter: drop-shadow(2px 2px 10px ${get_random(cssProperties, "color")});
    }
  
     figure > img {
      border:  ${get_random(cssProperties, "border")};
      border-radius:  ${get_random(cssProperties, "border-radius")};
      max-width: 70%;
    }
  
    figcaption, .drama, figure{
      font-stretch:${get_random(cssProperties, "font-stretch")};
      font-style:${get_random(cssProperties, "font-style")};
      letter-spacing:${get_random(cssProperties, "letter-spacing")};
    }`;
};

ace.define(
  "ace/theme/fairyfloss",
  ["require", "exports", "module", "ace/lib/dom"],
  function (acequire, exports, module) {
    exports.isDark = true;
    exports.cssClass = "ace-fairyfloss";
    exports.cssText = `
    .ace-fairyfloss .ace_gutter {
      background: #5A5475;
      color: rgb(169,166,180)
    }
    
    .ace-fairyfloss .ace_print-margin {
      width: 1px;
      background: #e8e8e8
    }
    
    .ace-fairyfloss {
      background-color: #5A5475;
      color: #F8F8F2
    }
    
    .ace-fairyfloss .ace_cursor {
      color: #F8F8F0
    }
    
    .ace-fairyfloss .ace_marker-layer .ace_selection {
      background: #8077A8
    }
    
    .ace-fairyfloss.ace_multiselect .ace_selection.ace_start {
      box-shadow: 0 0 3px 0px #5A5475;
      border-radius: 2px
    }
    
    .ace-fairyfloss .ace_marker-layer .ace_step {
      background: rgb(198, 219, 174)
    }
    
    .ace-fairyfloss .ace_marker-layer .ace_bracket {
      margin: -1px 0 0 -1px;
      border: 1px solid #A8757B
    }
    
    .ace-fairyfloss .ace_marker-layer .ace_active-line {
      background: #716799
    }
    
    .ace-fairyfloss .ace_gutter-active-line {
      background-color: #716799
    }
    
    .ace-fairyfloss .ace_marker-layer .ace_selected-word {
      border: 1px solid #8077A8
    }
    
    .ace-fairyfloss .ace_fold {
      background-color: #FFF352;
      border-color: #F8F8F2
    }
    
    .ace-fairyfloss .ace_keyword {
      color: #FFB8D1
    }
    
    .ace-fairyfloss .ace_constant.ace_language {
      color: #C5A3FF
    }
    
    .ace-fairyfloss .ace_constant.ace_numeric {
      color: #C5A3FF
    }
    
    .ace-fairyfloss .ace_constant.ace_character {
      color: #C5A3FF
    }
    
    .ace-fairyfloss .ace_constant.ace_other {
      color: #C5A3FF
    }
    
    .ace-fairyfloss .ace_support.ace_function {
      color: #C2FFDF
    }
    
    .ace-fairyfloss .ace_support.ace_constant {
      color: #C2FFDF
    }
    
    .ace-fairyfloss .ace_support.ace_class {
      font-style: italic;
      color: #C2FFDF
    }
    
    .ace-fairyfloss .ace_support.ace_type {
      font-style: italic;
      color: #C2FFDF
    }
    
    .ace-fairyfloss .ace_storage {
      color: #FFB8D1
    }
    
    .ace-fairyfloss .ace_storage.ace_type {
      font-style: italic;
      color: #C2FFDF
    }
    
    .ace-fairyfloss .ace_invalid {
      color: #F8F8F0;
      background-color: #F92672
    }
    
    .ace-fairyfloss .ace_invalid.ace_deprecated {
      color: #F8F8F0;
      background-color: #AE81FF
    }
    
    .ace-fairyfloss .ace_string {
      color: #FFEA00
    }
    
    .ace-fairyfloss .ace_comment {
      color: #E6C000
    }
    
    .ace-fairyfloss .ace_variable {
      color: #FFF352
    }
    
    .ace-fairyfloss .ace_variable.ace_parameter {
      font-style: italic;
      color: #FF857F
    }
    
    .ace-fairyfloss .ace_entity.ace_other.ace_attribute-name {
      color: #FFF352
    }
    
    .ace-fairyfloss .ace_entity.ace_name.ace_function {
      color: #FFF352
    }
    
    .ace-fairyfloss .ace_entity.ace_name.ace_tag {
      color: #FFB8D1
    }`;

    let dom = acequire("ace/lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
  }
);

ace.require("ace/ext/language_tools");
let editor = ace.edit("editor");

editor.session.setMode("ace/mode/html");

editor.setTheme("ace/theme/fairyfloss");

editor.setOptions({
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
  wrap: true,
  highlightActiveLine: true,
  highlightSelectedWord: true,
  behavioursEnabled: true,
  wrapBehavioursEnabled: true,
  fontSize: "12pt",
  showGutter: false,
});

let randomSetting = () => {
  editor.setValue(
    `<!DOCTYPE html>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200&family=Inknut+Antiqua:wght@300&family=Playfair+Display&family=Space+Grotesk:wght@300&display=swap" rel="stylesheet">
    
    <style>
    ${randomStyle()}
    </style>
    </head>
    <body>${body()}</body>
    </html>`
  );
};

let undoAction = () => {
  editor.undo();
};
let redoAction = () => {
  editor.redo();
};

document.getElementById("undo").addEventListener("click", undoAction);
document.getElementById("redo").addEventListener("click", redoAction);
document.getElementById("random").addEventListener("click", randomSetting);

const iframe = document.querySelector("iframe");
const code = document.getElementById("editor");
const bunny = document.getElementById("bunny");

let percentDecrease = (high, low) => {
  let denominator = high;
  let numerator = high - low;
  let result = (numerator / denominator) * 100;
  return result.toFixed(2);
};

let renderFeedback = (html) => {
  let discordKB = 42.36;
  let googleKB = 152.29;
  let youtubeKB = 567.7;
  let previewKB = html.length / 1024;

  bunny.innerHTML = `<p>Your website is ${previewKB.toFixed(2)} KB.<br> <br> 
    This is ${percentDecrease(discordKB, previewKB)}% less than Discord, 
    ${percentDecrease(googleKB, previewKB)}% less than  Google, 
    and ${percentDecrease(youtubeKB, previewKB)}% less than YouTube.</p>`;
};

let render = (e) => {
  let html = editor.getValue();
  renderFeedback(html);
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
  console.log("rendering!");
};

const loaded = () => {
  randomSetting();
  render();
};

code.addEventListener("input", render);
document.getElementById("undo").addEventListener("click", render);
document.getElementById("redo").addEventListener("click", render);
document.getElementById("random").addEventListener("click", render);
window.addEventListener("load", loaded);

let bookmark = document.getElementById("bookmark");
let bookshelf = document.getElementById("bookmarks");
let bookmarks = {};

const saveHistory = () => {
  let editorState = editor.getValue();
  let currentTime = new Date();
  bookmarks[currentTime] = editorState;
  renderBookmark(currentTime);
};

const renderBookmark = (currentTime) => {
  let template = `<time datetime='${currentTime}' class='margin'>${currentTime.toLocaleTimeString(
    "en-US"
  )}</time>
    <button class='rewind' onclick='restoreEditor("${currentTime}")'>go here</button>`;

  let div = document.createElement("div");
  div.classList.add("book");
  div.innerHTML = template;
  bookshelf.append(div);
};

const restoreEditor = (datetime) => {
  let oldSession = bookmarks[datetime];
  editor.setValue(oldSession);
  location.hash = "#code-header";
  render();
};

bookmark.addEventListener("click", saveHistory);

const share = document.getElementById("share");
const sharing = async () => {
  const shareData = {
    title: "Mobile Code Editor",
    text: "Code on your phone.",
    url: "https://phonecoding.github.io",
  };

  try {
    await navigator.share(shareData);
    bunny.innerHTML = `<p><br>Shared successfully! 🎉<br></p>`;
  } catch (e) {
    console.log(e);
    await navigator.clipboard.writeText("https://phonecoding.github.io");
    bunny.innerHTML = `<p><br>Website link copied to clipboard! 🎉<br></p>`;
  }
};

share.addEventListener("click", sharing);

const download = document.getElementById("download");

let downloading = () => {
  let savedData = decodeURI(document.querySelector("iframe").src);
  let htmlContent = savedData.replace("data:text/html;charset=utf-8,", "");
  let bl = new Blob([htmlContent], { type: "text/html" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(bl);
  a.download = "mobileIDE.html";
  a.hidden = true;
  document.body.appendChild(a);
  a.innerHTML = "Mobile IDE.";
  a.click();
};

download.addEventListener("click", downloading);
