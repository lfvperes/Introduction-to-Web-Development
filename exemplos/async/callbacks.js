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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

/**
 *  If we do it like this and without the
 * callback at the createPost() method, the
 * third post won't be shown because the
 * screen is already printed. getPosts()
 * takes 1s and createPost() takes 2s.
 */
//getPosts();
//createPost({title: 'Post three', body: 'This is post three'});

createPost({title: 'Post three', body: 'This is post three'}, getPosts);    