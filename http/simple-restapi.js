/* Some code from fibjs/test/httpd/httpd7.js */

var net = require('net');
var http = require('http');
var mq = require('mq');
var rpc = require('rpc');

var hdlr = new http.Handler(new mq.Routing({
	//使用rpc.json时，请求头必须附带Content-Type属性（值为
	'^/api/v1/(.*?)$': rpc.json({
		console: {
			log: function( httpMessage, d ) {
				console.log( "Incoming message: ", d );
				return "im working.";
			}
		},
		other: function( httpMessage, d ) {
			return d; //返回值：{ result: d }
		}
	}),
	'^/test$': function( httpMessage ) {
		//httpMessage.response.body.write("define('" + new Date() + "');");
		console.log('requested.', new Date());
		//return返回值在这里是不适用的，须知。
	},
	'^(.*?)$': http.fileHandler('./www') //From fibjs/test/httpd/www
}));
hdlr.crossDomain = true;
hdlr.onerror({
	//Number类型亦可赛艇。
	500: function( httpMessage ) {
		httpMessage.response.body.write("im working.");
		//return返回值在这里是不适用的，须知。
	}
});

new net.TcpServer(8088, hdlr).run();