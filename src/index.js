import fs from 'fs';
import xml2js from 'xml2js';


const parser = new xml2js.Parser();
const __dirname = './rawData';

fs.readFile(__dirname + '/ArmstrongWorld_20210423.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        try {
            // console.dir(result)

            const { Project } = result.Projects;
            console.log(`There are ${Project.length} projects in this data set. The following are the first 10 projects`);
            for (let i = 0; i < 10; i++) {
                console.log(JSON.stringify(Project[i]) +',');
            }

        } catch (err) {
            console.error(err);
        }
    });
});