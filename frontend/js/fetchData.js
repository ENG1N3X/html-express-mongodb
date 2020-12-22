// Fetch data from my REST API
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
		alert(e.message);
		console.error(e);
	}
}
