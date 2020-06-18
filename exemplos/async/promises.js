const posts = [
    {
        title: 'Post one', 
        body: 'This is post one'
    },
    {
        title: 'Post two', 
        body: 'This is post two'
    }
];

function getPosts() {
    // setTimeout takes a callback function and a certain amount of time
    setTimeout(() => {
        let output = ''
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

/*
createPost(
    {title: 'Post three', body: 'This is post three'}
)
.then(getPosts)
.catch(err => console.log(err));   // Avoid getting an uncaught error
*/

// Async/Await
// await waits for an asynchronous process action to complete
// async function init() {
//     await createPost(
//         {title: 'Post three', body: 'This is post three'}
//     );

//     getPosts();
// }
// init();

// Async/Await/Fetch
async function fetchUsers() {
    // fetch returns a promise
    const res = await fetch('http://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();

// Promise.all
// const promise1 = Promise.resolve('Hello world!');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye');
// });
// const promise4 = fetch('http://jsonplaceholder.typicode.com/users').then(
//     res => res.json()
// )

// // takes an array of promises and pass the callback function in "then"
// // this avoids using mutiple .then() 
// Promise.all([promise1, promise2, promise3, promise4]).then((
//     (values) => console.log(values)
// ));