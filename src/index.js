'use strict';


const pkg = require('../package.json');

export default class Plugin {

  get attributes() {
    return {
      name: pkg.name,
      version: pkg.version
    };
  }

  constructor(server, options, next) {
    this.server = server;
    this.options = options;

    next();
  }


  static register(server, options, next) {
    return new Plugin(server, options, next);
  }


}