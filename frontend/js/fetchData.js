// Fetch to my REST API
export async function getAll() {
	try {
		let response = await fetch("http://localhost:3000/api/posts/getAll", {
			method: "GET",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
		});
		response = await response.json();
		return response;
	} catch (e) {
		console.error(e);
	}
}

export async function add(values) {
	try {
		let response = await fetch(`http://localhost:3000/api/posts/add`, {
			method: "POST",
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
			body: new FormData(values)
		});
		response = await response.json();
		return response;
	} catch (e) {
		alert(e.message);
		console.error(e);
	}
}
