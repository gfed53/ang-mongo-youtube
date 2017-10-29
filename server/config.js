exports.PORT = process.env.PORT || 3000;

exports.DATABASE_URL = process.env.DATABASE_URL ||
global.DATABASE_URL ||
(process.env.NODE_ENV === 'production' ?
	'mlab-link-here' :
	'mongodb://localhost/todos');

//mongodb://gfed123:873gfed@ds155841.mlab.com:55841/heavenly-whirlwind