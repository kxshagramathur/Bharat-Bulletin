      // Fetch data from the API
      fetch("https://webmosaic.petrichor.events/posts")
        .then((response) => response.json())
        .then((data) => {
          const postsContainer = document.getElementById("posts-container");
          data.posts.forEach((post) => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.id = `posted${post.id}`;
            postElement.innerHTML = `
                        <h2>${post.name}</h2>
                        <p>ID: ${post.id}</p>
                    `;
            postsContainer.appendChild(postElement);
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

        function fetchPost() {
            const postIdInput = document.getElementById('postId');
            const postId = parseInt(postIdInput.value);

            // Validate input (optional)
            if (isNaN(postId) || postId < 1 || postId > 6) {
                alert('Please enter a valid ID between 1 and 6.');
                return;
            }

            // Fetch data from the API for the specified post ID
            fetch(`https://webmosaic.petrichor.events/post?id=${postId}`)
                .then(response => response.json())
                .then(data => {
                    const postsContainer = document.getElementById('search-post');
                    const post = data; // Assuming the API returns a single post object
                    const postElement = document.createElement('div');
                    postElement.classList.add('post');
                    postElement.innerHTML = `
                        <h2>${post.name}</h2>
                        <p>ID: ${post.id}</p>
                        <!-- Add other relevant post information here -->
                    `;
                    postsContainer.innerHTML = ''; // Clear previous content
                    postsContainer.appendChild(postElement);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }

        fetch('https://webmosaic.petrichor.events/about')
            .then(response => response.json())
            .then(data => {
                const aboutText = document.getElementById('about-text');
                aboutText.textContent = data.about;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });