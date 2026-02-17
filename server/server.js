import http from 'http';
import os from 'os';

const data = []; // persistent storage

const server = http.createServer((req, res) => {
    const url = req.url;
    let body = "";

    if (url === '/' && req.method === "GET") {
        res.end("Home page");
    }

    else if (url === '/about' && req.method === "GET") {
        res.end("About page");
    }

    else if (url === '/contact' && req.method === "GET") {
        res.end("Contact page");
    }

    else if (url === '/system' && req.method === "GET") {
        const sysdata = {
            platform: os.platform(),
            arch: os.arch(),
            cpu: os.cpus().length,
            memory_gb: (os.totalmem() / (1024 ** 3)).toFixed(2),
            free_mem_gb: (os.freemem() / (1024 ** 3)).toFixed(2)
        };

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(sysdata));
    }

    else if (url === '/senddata' && req.method === "POST") {
        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            data.push(body);
            res.statusCode = 201;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
        });
    }

    else if (url === '/viewdata' && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
    }

    else {
        res.statusCode = 404;
        res.end("Page not found");
    }
});

server.listen(4001, () => {
    console.log("Server is running on port 4001");
});