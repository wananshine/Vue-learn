module.exports = {
	port:5500,
	session:{
		secret : "mblog",
		key : "mblog",
		maxAge : 2592000000
	},
	mongodb : "mongodb://localhost:27017/mblog"
}