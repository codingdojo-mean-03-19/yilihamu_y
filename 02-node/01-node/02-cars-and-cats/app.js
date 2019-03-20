const http = require('http'),
        fs = require('fs');

const server = http.createServer(function(request, response) {

  // SPLIT THE URL IN ORDER TO EXAMINE IT BETTER
  const splitURL = request.url.split('/'),
      fileType   = splitURL[1], // Set of characters after the first /
      file       = splitURL[2];

  switch (fileType) {
    case "styles":
    // SERVE CSS!
      serveCSS(file, response);
      break;
    case "images":
    // SERVE A JPG IMAGE!
      serveJPG(file, response);
      break;
    default:
    // SERVE AN HTML FILE!
      switch(fileType){
        case "cars": 
          if (file === "new") {
            serveHTML("form.html", response);
          } else {
            serveHTML("car.html", response);
          }
          break;
        case "cats":
          serveHTML("cat.html", response);
          break;
        default:
         
          serve404(response);
      }
  }
});



function serveHTML(filename, response) {
  
  fs.readFile(`views/${filename}`, 'utf8', function(error, contents){
   
    if (error) { return serve404(response) }
    
    response.writeHead(200, {'Content-type' : 'text/html' });
    response.write(contents);
    response.end();
  });
}

function serveCSS(filename, response) {
  
  fs.readFile(`stylesheets/${filename}`, 'utf8', function(error, contents) {
    
    if (error) { return serve404(response) }
    
    response.writeHead(200, {'Content-type' : 'text/css' });
    response.write(contents);
    response.end();
  });
}

function serveJPG(filename, response) {
  
  fs.readFile(`images/${filename}`, function(error, contents) {
    
    if (error) { return serve404(response); }
   
    response.writeHead(200, {'Content-type' : 'image/jpg' });
    response.write(contents);
    response.end();
  });
}

function serve404(response){
  response.writeHead(404);
  response.end("File not found!");
}

server.listen(7077);
console.log("Running on 7077");