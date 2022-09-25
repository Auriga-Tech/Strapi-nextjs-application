'use strict';

/**
 *  product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product',() => ({
   
    async countProducts(ctx){
        const {data, meta} = await super.find(ctx)   
        return "Total products available: "+data.length
    }
}));
