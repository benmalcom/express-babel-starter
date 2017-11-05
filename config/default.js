module.exports = {
	app:
    {
    	name: 'todo-api',
    	port: process.env.PORT || 3000,
    	baseUrl: `http://localhost:${process.env.PORT || 3000}`,
    },
	api:
    {
    	prefix: '/api',
    	versions: [1],
    },
	lang: 'en',
	authToken: {
		superSecret: 'ipa-odot',
		expiresIn: 86400,
	},
	db: {
		url: 'mongodb://localhost:27017/todo',
	},
	/* twilio:{
        ACCOUNT_SID: "ACe434eabecbe0aad4562b2f65bac61e3e",
        AUTH_TOKEN: "e643b2d691c0606a1c40f0a3c7a75009",
        FROM: ""
    },*/
	itemsPerPage: {
		default: 10,
	},
};
