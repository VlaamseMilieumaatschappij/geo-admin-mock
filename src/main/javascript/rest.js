var restify = require('restify'),
    mainService = require('./vmm/geoAdmin/mock/MainService'),
    mapService = require('./vmm/geoAdmin/mock/MapService'),
    searchService = require('./vmm/geoAdmin/mock/SearchService'),
    catalogService = require('./vmm/geoAdmin/mock/CatalogService'),
    printService = require('./vmm/geoAdmin/mock/PrintService'),
    editService = require('./vmm/geoAdmin/mock/EditService');

/* --------------------- */
/* --- server config --- */
/* --------------------- */

var server = restify.createServer({
    name: 'geo-admin-mock-server'
});

// allow cross-domain access
server.use(restify.CORS());
// parse URL parameters
server.use(restify.queryParser());


/* ----------------- */
/* --- behaviour --- */
/* ----------------- */

/** @see MainService.info */
server.get('rest/services', mainService.info);
/** @see MainService.height */
server.get('rest/services/height', mainService.height);
/** @see MainService.info */
server.get('rest/services/profile', mainService.profile);

/** @see MapService.metaData */
server.get('rest/services/ech/MapServer', mapService.metaData);
/** @see MapService.config */
server.get('rest/services/all/MapServer/layersConfig', mapService.config);
/** @see MapService.attribute */
server.get('rest/services/ech/MapServer/:layerBodyId', mapService.attribute);
/** @see MapService.legend */
server.get('rest/services/ech/MapServer/:layerBodyId/legend', mapService.legend);
/** @see MapService.identify */
server.get('rest/services/ech/MapServer/identify', mapService.identify);
/** @see MapService.find */
server.get('rest/services/ech/MapServer/find', mapService.find);
/** @see MapService.feature */
server.get('rest/services/ech/MapServer/:layerBodyId/:featureIds', mapService.feature);
/** @see MapService.popup */
server.get('rest/services/ech/MapServer/:layerBodyId/:featureId/htmlPopup', mapService.popup);

/** @see SearchService.search */
server.get('rest/services/ech/SearchServer', searchService.search);

/** @see CatalogService.all */
server.get('rest/services/ech/CatalogServer', catalogService.all);

/** @see PrintService.all */
server.get('print/info.json', printService.info);

/** @see EditService.pull */
server.get('rest/services/pull', editService.pull);
/** @see EditService.push */
server.post('rest/services/push', editService.push);

/* ---------------------- */
/* --- initialization --- */
/* ---------------------- */

/**
 * The port to run the server on.
 *
 * @type {number}
 * @default 8888
 */
var port = process.argv[2] || 8888;
server.listen(port);

console.log(server.name + ' listening on ' + server.log.fields.hostname + ':' + port);
