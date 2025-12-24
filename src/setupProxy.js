// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		'/b2api',
		createProxyMiddleware({
			target: 'https://awx.pro',
			changeOrigin: true,
			secure: false,
			pathRewrite: {
				'^/b2api': '/b2api',
			},
			onProxyReq(proxyReq) {
				proxyReq.setHeader(
					'serial',
					'a7307e89-fbeb-4b28-a8ce-55b7fb3c32aa'
				)
			},
		})
	)
}
