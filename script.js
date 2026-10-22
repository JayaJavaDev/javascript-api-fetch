// Make an HTTP request to the API
const data = fetch("https://jsonplaceholder.typicode.com/users")

    // Convert the response into JSON format
    .then(response => response.json())

    // Display the user data in the console
    .then(data => console.log(data))

    // Handle errors if the request fails
    .catch(error => console.log(error));

// Approach 2: Using async/await

async function fetchUsers() {
    try {
        // Send an HTTP request to the API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // Convert the response into JSON
        const data = await response.json();

        // Display the user data
        console.log(data);

    } catch (error) {
        // Handle errors
        console.error(error);
    }
}

// Call the function
fetchUsers();