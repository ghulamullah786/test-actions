import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';
const app = express();
const port = 3000;
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
app.get('/', (req, res) => {
    res.sendFile(path.join(dirname + '/', 'test.html'));
});
const server = app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
process.on('SIGINT', () => {
    process.stdin.resume(); // ✅ Keeps Node from exiting immediately
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Do you really want to close the server! (yes/no)? ', (answer) => {
        const shouldExit = ['y', 'yes'].includes(answer.toLowerCase());
        if (shouldExit) {
            console.log("\nShutting down the server!\n");
            rl.close();
            server.close(() => process.exit(0));
        }
        else {
            console.log("Resuming server...");
            rl.close();
        }
    });
});
