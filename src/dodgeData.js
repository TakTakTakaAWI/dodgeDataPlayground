const Client = require('ftp');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

let c = new Client();
c.connect({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    secure: false
});
c.list("/", false, (err, item) => {
    if (err) {
        console.error(err);
        return;
    }
    item.map((x, i) => {
        console.log(`Getting ${x.name} - Created ${x.date}`);
        c.get(x.name, (err, stream) => {
            if (err) {
                console.error(`${x.name} could not be downloaded: ${err}`);
            } else {
                stream.once('close', () => {});
                if (!fs.existsSync(`./rawData/${x.name}`)) {
                    stream.pipe(fs.createWriteStream(x.name));
                } else {
                    console.warn(`Skipping ${x.name} file exists.`)
                }
            }
        })
    })
});
c.end();
