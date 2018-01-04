'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator{
  constructor(args, opts) {
    super(args, opts);

    // This makes `appName` a required argument.
    this.argument('appName', { type: String, required: true });

    // And you can then access it later; e.g.
    this.log(this.options.appName);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_index.js'),
      this.destinationPath('_index.js'),
      { appName: this.options.appName }
    );
    this.fs.copyTpl(
      this.templatePath('configuration.js'),
      this.destinationPath(`_${this.options.appName}.configuration.js`),
      { appName: this.options.appName }
    );
    this.fs.copyTpl(
      this.templatePath('init.js'),
      this.destinationPath(`_${this.options.appName}.init.js`),
      { appName: this.options.appName }
    );
    this.fs.copyTpl(
      this.templatePath('module.js'),
      this.destinationPath(`_${this.options.appName}.module.js`),
      { appName: this.options.appName }
    );
    this.fs.copyTpl(
      this.templatePath('routes.js'),
      this.destinationPath(`_${this.options.appName}.routes.js`),
      { appName: this.options.appName }
    );
  }
}
