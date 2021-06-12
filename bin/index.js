#!/usr/bin/env node

const yargs = require('yargs');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const copy = require('recursive-copy');

const createServerJs = (name) => {
    if (!fs.existsSync(name)){
        fs.mkdirSync(name);
    }

    const source = path.resolve(path.dirname(__filename), 'reserve');
    const destination = path.resolve(name);

    copy(source, destination, ((err, result) => {
        if (err) return console.error(err);

        console.log('Stillas: Scaffolds project')
    }))
}

const options = yargs
    .usage('Usage: stillas <command> <args>')
    // .option('n', {alias: 'name', describe: 'your name', type: 'string', demandOption: true})
    .command(
        'init',
        '<args>',
        {
            name: {
                demand: true,
                alias: 'n'
            }
        }, (argv) => {
        createServerJs(argv.name)
    })
    .scriptName('stillas')
    .argv;
