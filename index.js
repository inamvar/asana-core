var fs = require('fs');
const path = require('path');
var config = require('./config');
var mongoose = require('mongoose');
var logger = require('winston');
var services = require('./services');

var start = function () {
    logger.info("Starting ASANA core services");
    
    var absouluteDir = path.join(__dirname, config.log.directory);
    var logFilePath = path.join(__dirname, config.log.directory, config.log.fileName);
    if (!fs.existsSync(absouluteDir)) {
        logger.warn('log directory [%s] does not exists. it will create by application',absouluteDir);
        fs.mkdirSync(absouluteDir);
    }

    logger.add(logger.transports.File, { filename: logFilePath });
    logger.level = config.log.level;
    
    process.on('SIGINT', function () {
        cleanup();
    });

    mongoose.set('debug', config.log.mongoose);
    mongoose.connection.once('open', function () {
        logger.info('MongoDB event open');
        logger.debug('MongoDB connected [%s]', config.db.url);
    });
    mongoose.connection.on('connected', function () {
        logger.info('MongoDB event connected');

    });

    mongoose.connection.on('disconnected', function () {
        logger.warn('MongoDB event disconnected');

    });

    mongoose.connection.on('reconnected', function () {
        logger.info('MongoDB event reconnected');

    });

    mongoose.connection.on('error', function (err) {
        logger.error('MongoDB event error: ' + err);

    });

    mongoose.connect(config.db.url, function (err) {
        if (err) {
            logger.error('MongoDB connection error: ' + err);
            process.exit(1);
        }
    });
};

function cleanup() {
    mongoose.connection.close();
};

function stop(){
    cleanup();
    process.exit(0);
}

var asanaCore = {
    start: start,
    services: services,
    stop : stop
};

//asanaCore.start();
module.exports = asanaCore;