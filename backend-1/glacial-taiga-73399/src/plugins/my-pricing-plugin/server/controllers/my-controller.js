'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('my-pricing-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
};
