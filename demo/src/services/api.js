export function api(type = 'GET', endpoint, body = null) {
	let url =  endpoint;
	let header = {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	};

	let req = {
		method: type,
	};

	if (body) {
		req.body = JSON.stringify(body);
	}

	return new Promise((resolve, reject) => {
		fetch(url, req).then((response) => {
			if (response.status === 503) {
				return { response, json: '' }
			} else {
				return response.json()
					.then(json => ({ json, response }))
			}
		}).then(({ json, response }) => {
			if ([503].indexOf(response.status) !== -1) {
				console.log('ERROR', response, json);
			}
			return resolve({ json: json, response: response });
		}).catch((error) => console.log(error));
	});
}