import http from 'http';
const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === '/'){
        res.write("Home page");
    }
    else if(url === '/about'){
        res.write("About page");
    }
    else if(url === '/contact'){
        res.write("Contact page");
    }
    else res.write("Page not found");
    res.end();
})
server.listen(4001,()=>{
    console.log("Server is running on port 4001");
});