import request from 'supertest';
import app from '../src/app';

describe('#Suite GET /', () => {
	it('Should render properly', async () => {
		await request(app).get('/').expect(200);
	});
});

describe('#Suite GET /list', () => {
	it('Should render properly with valid parameters', async () => {
		await request(app)
			.get('/list')
			.query({ title: 'List title' })
			.expect(200);
	});

	it('Should error without a valid parameter', async () => {
		await request(app).get('/list').expect(500);
	});
});

describe('#Suite GET /404', () => {
	it('Should return 404 for non-existent URLs', async () => {
		await request(app).get('/404').expect(404);
		await request(app).get('/notfound').expect(404);
	});
});
