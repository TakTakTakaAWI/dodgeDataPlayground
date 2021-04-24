import * as fs from 'fs';
import * as xml2js from 'xml2js';
import {saveData} from "./helpers/saveAsJson";
import {DodgeDataParsed} from './helpers/constants'

const parser = new xml2js.Parser();
const path = './rawData';

interface result {
    Projects: Record<string, string>[]
}

fs.readFile(path + '/ArmstrongWorld_20210423.xml', function(err, data) {
    parser.parseString(data, function (err: string, result: DodgeDataParsed) {
        try {
            // console.dir(result)
            const { Project } = result.Projects;
            console.log(`There are ${Project.length} projects in this data set. The following are the first 10 projects`);
            saveData('shouldSaveDataNow', JSON.stringify(Project));
        } catch (err) {
            console.error(err);
        }
    });
});