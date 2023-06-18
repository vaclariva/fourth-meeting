const http = require('http')
const checkEmail = require('./checkEmail');
const country = require('./countryList');
const port = 3008;

const server = http.createServer((req, res)=> {
    // request
    // respon 
   

    if (req.url === '/profile') {
        res.write('<h1>This is Profile menu</h1>')
        res.write('Nama : Clariva Meydieta Widagdo')
        res.write('Alamat : Wonogiri, Jawa tengah')
        res.write('Country: ${country('ID')}');
    }else if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write('<h1>this is main menu</h1>')
        res.write('Menu :>')
        res.write('<li><a href=http://localhost:3008/profile>Profile</a></li>')
        res.write('<li><a href=http://localhost:3008/blog>Blog</a></li>')


    }else {
    res.writeHead(404, {
        'Content-Type': 'text/html'
    })
    res.write('<h1>Not Found</h1>')
}

    console.log (req.url, 'REQUESTTTT----')
    res.write('<h1><b>HELLO WORLD FROM WEB SERVER BOLD</b></h1>')
    res.write('MENU :')
    res.write('<li>Profile</li>')
    res.write('<li>Blog</li>')
    res.end()
})

server.listen(port, () => {
    console.log('HELLO IM LISTENING TO PORT 3004')
})

// const checkEmail = require('./checkEmail');
// const country = require('./countryList');

// console.log(checkEmail("meyclariva@gmail.com"), 'THIS IS TO CHECK EMAIL FROM NPM');
// console.log(checkEmail("meyclariva@gmail"), 'THIS IS TO CHECK EMAIL FROM NPM');

// console.log(country('ID'), 'THIS IS FROM NPM COUNTRY LIST');


// console.log('HELLO FROM NON CALLBACK')

// setTimeout(() => {
//     console.log('HELLO FROM CALLBACK')
// }, 5000)