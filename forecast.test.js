const fetch = require('node-fetch');

test('fetch request is made correctly', async () => {
	const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=city_name&appid=your_api_key');
	expect(response.ok).toBe(true);
});

test('data is processed as expected', async () => {
	const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=city_name&appid=your_api_key');
	const data = await response.json();
	expect(data).toHaveProperty('list');
	expect(data.list.length).toBeGreaterThan(0);
});