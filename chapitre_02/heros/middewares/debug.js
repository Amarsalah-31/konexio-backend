function debug(req, _res, next) {
	console.log(`Request received: ${req.method} ${req.url}`);
	next();
}

module.exports = debug;