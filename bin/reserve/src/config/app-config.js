const config = {
    name: 'Data Extractor',
    port: process.env.PORT || 3000,
    renConfig: process.env.renConfig || 'https://ren-mobile-config-dev.s3-eu-west-1.amazonaws.com/ren_config.json'
};

module.exports = config;
