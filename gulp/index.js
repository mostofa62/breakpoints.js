/**
 * Load tasks and export globals
 */

import fs from 'fs';

import gulp from 'gulp';
import cfg from './config';
import pkg from '../package.json';

global.gulp = gulp;
global.config = Object.assign(cfg, pkg.config, pkg.directories);
global.pkg = pkg;

let tasks = fs.readdirSync('./gulp/tasks/');
tasks.forEach(function(task) {
	require(`./tasks/${task}`);
});
