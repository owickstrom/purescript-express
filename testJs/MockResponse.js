
var MockResponse = function() {
    this.statusCode = 0;
    this.headers = {};
    this.data = "";
    this.cookies = {};
    this.headersSent = false;
}

MockResponse.prototype.status = function(statusCode) {
    this.statusCode = statusCode;
}

MockResponse.prototype.type = function(contentType) {
    this.headers['Content-Type'] = contentType;
}

MockResponse.prototype.get = function(headerName) {
    return this.headers[headerName];
}

MockResponse.prototype.set = function(headerName, value) {
    this.headers[headerName] = value;
}

MockResponse.prototype.cookie = function(name, value, options) {
    this.cookies[name] = {name: name, value: value, options: options};
}

MockResponse.prototype.clearCookie = function(name, options) {
    delete this.cookies[name];
}

MockResponse.prototype.send = function(data) {
    if (typeof data === 'string') {
        this.data += data;
    } else {
        this.json(data);
    }
    this.headersSent = true;
}

MockResponse.prototype.json = function(obj) {
   this.send(JSON.stringify(obj));
}

MockResponse.prototype.jsonp = MockResponse.prototype.json;

MockResponse.prototype.redirect = function(statusCode, url) {
    this.status(statusCode);
    this.location(url);
}

MockResponse.prototype.location = function(url) {
    this.set("Location", url);
}

MockResponse.prototype.attachemnt = function(filename) {
    throw "NotImplemented";
}

MockResponse.prototype.sendFile = function(path, options, callback) {
    throw "NotImplemented";
}

MockResponse.prototype.download = function() {
    throw "NotImplemented";
}

module.exports = MockResponse;
