import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';
import readline from 'readline';
import dotenv from 'dotenv';
dotenv.config();
interface mydata {
    test: number
}

const app = express();
const port = 3000;

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

app.get('/', (req, res) => {
    res.sendFile(path.join(dirname + '/', 'test.html'));
});

const server = app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}:${process.env.TEST}`);
});
const segmenter = new Intl.Segmenter('en', { granularity: 'word' });
const input = "Hello world!";
for (const { segment, index } of segmenter.segment(input)) {
    console.log(segment, index);
}

// process.on('', () => {
//     process.stdin.resume();
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     })

//     rl.question('Do you really want to close the server! (yes/no)? ', (answer) => {
//         console.log("here")
//         if (['y', 'yes'].includes(answer.toLowerCase())) {
//             console.log("\n Shutting Down the server! \n")
//             rl.close();
//             server.close(() => process.exit(0))
//         }
//         else rl.close()
//     })
// })