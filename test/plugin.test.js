'use strict';

import pkg from '../package.json';
import Plugin from '../src';


describe('HapiHealthCheckPlugin', () => {

  describe('Declares a hapijs compatible interface for registration', () => {

    it('should have a name property', (done) => {
      let plugin = new Plugin({}, {}, done);
      console.log(plugin);
      expect(plugin.attributes.name).to.be.eql(pkg.name);

    });

  });

});