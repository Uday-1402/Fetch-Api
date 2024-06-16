const fetchApi = async (filename) => {
    const res = await fetch(`${filename}`);
    const data = await res.text();

    return data;
}

// const data = await fetchApi("myFile.txt");
// console.log(data);

// Upar wale me we are doing await fetchApi() but we cannot do it directly in the <script></script> it should be done inside a function.
// Below is an immediate invocation of async() function in which we can now call await fetchApi(), i.e. an async function. 
// (async () => {
//     // Call fetchApi and wait for the result
//     const data = await fetchApi('myFile.txt');
    
//     // Update the inner HTML with fetched data
//     if (data) {
//         h1.innerHTML = data;
//     } else {
//         h1.innerHTML = 'Failed to load content.';
//     }
// })();

// Another method could be to create another function to display data
const displayContent = async() =>{
    const h1 = document.getElementById("content");
    
    const data = await fetchApi('myFile.txt');

    h1.innerHTML = `${data}`;
}

displayContent();