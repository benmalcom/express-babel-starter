'use strict';

let _express = require('express');

let _express2 = _interopRequireDefault(_express);

let _path = require('path');

let _path2 = _interopRequireDefault(_path);

let _morgan = require('morgan');

let _morgan2 = _interopRequireDefault(_morgan);

let _cookieParser = require('cookie-parser');

let _cookieParser2 = _interopRequireDefault(_cookieParser);

let _bodyParser = require('body-parser');

let _bodyParser2 = _interopRequireDefault(_bodyParser);

let _http = require('http');

let _http2 = _interopRequireDefault(_http);

let _config = require('config');

let _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : {default: obj};
}

let app = (0, _express2.default)();
// import favicon from 'serve-favicon';


app.disable('x-powered-by');
app.set('port', process.env.PORT || _config2.default.get('app.port'));

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({extended: false}));
app.use((0, _cookieParser2.default)());
// app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

let server = _http2.default.createServer(app);
let port = app.get('port');
server.listen(port, function() {
	console.log('App listening on ' + _config2.default.get('app.baseUrl'));
	console.log('Environment => ' + _config2.default.util.getEnv('NODE_ENV'));
});

module.exports = app;
// # sourceMappingURL=app.js.map
