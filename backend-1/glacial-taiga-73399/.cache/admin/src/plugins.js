
import contentTypeBuilder from '../../../node_modules/@strapi/plugin-content-type-builder/strapi-admin.js';
import email from '../../../node_modules/@strapi/plugin-email/strapi-admin.js';
import upload from '../../../node_modules/@strapi/plugin-upload/strapi-admin.js';
import mypricingplugin from '../../../src/plugins/my-pricing-plugin/strapi-admin.js';
import i18N from '../../../node_modules/@strapi/plugin-i18n/strapi-admin.js';
import seo from '../../../node_modules/@strapi/plugin-seo/strapi-admin.js';
import usersPermissions from '../../../node_modules/@strapi/plugin-users-permissions/strapi-admin.js';
import navigation from '../../../node_modules/strapi-plugin-navigation/strapi-admin.js';


const plugins = {
  'content-type-builder': contentTypeBuilder,
  'email': email,
  'upload': upload,
  'mypricingplugin': mypricingplugin,
  'i18n': i18N,
  'seo': seo,
  'users-permissions': usersPermissions,
  'navigation': navigation,
};

export default plugins;
