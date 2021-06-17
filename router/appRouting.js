const fs = require('fs');
const path = require('path');

let mapRoutes = (request , response) => {
    let requestURL = request.url;
    if(requestURL === '/' && request.method === 'GET'){
        // home page
        fs.readFile(path.join(__dirname, '..' , 'views' ,  'index.html'), 'utf-8' , (err , data) => {
            if(err) throw err;
            response.end(data);
        });
    }
    else if(requestURL === '/about'){
        // about page
        fs.readFile(path.join(__dirname, '..' , 'views' , 'about.html'), 'utf-8' , (err , data) => {
            if(err) throw err;
            response.end(data);
        });
    }
    else if(requestURL === '/services'){
        // services page
        fs.readFile(path.join(__dirname, '..' , 'views' , 'services.html'), 'utf-8' , (err , data) => {
            if(err) throw err;
            response.end(data);
        });
    }
    else if(requestURL === '/contact'){
        // contact page
        fs.readFile(path.join(__dirname, '..' , 'views' , 'contact.html'), 'utf-8' , (err , data) => {
            if(err) throw err;
            response.end(data);
        });
    }
};
module.exports = {
    mapRoutes
};
