import axios from 'axios'

export async function fetchPosts() {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    const posts = response.data;

    const enrichedPosts = await Promise.all(
      posts.map(async (post) => {
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        const userData = userResponse.data;

        post.authorName = userData.name;
        post.authorInitials = userData.name
          .split(' ')
          .map((name) => name[0])
          .join('')
          .toUpperCase();

        return post;
      })
    );

    return enrichedPosts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export async function fetchPostById(id) {
  try {
    const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

    const userId = postResponse.data.userId;

    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

    const postData = postResponse.data;
    const userData = userResponse.data;
    
    postData.authorName = userData.name;
    postData.authorInitials = userData.name
      .split(' ')
      .map((name) => name[0])
      .join('')
      .toUpperCase();

    return postData;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
}

export async function addPost(addedPost) {
  try {
    const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/`, addedPost, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
}

export async function editPost(id, editedPost) {
  try {
    const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, editedPost, {
      headers: { "Content-Type": "application/json" },
  });
    return response.data;
  } catch (error) {
    console.error("Error editing post:", error);
    throw error;
  }
}

export async function deletePost(id) {
  try {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
}

export async function fetchUserById(id) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

export async function fetchUsers() {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function editUser(id, editedUser) {
  try {
    const response = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, editedUser, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error editing user:", error);
    throw error;
  }
}

export async function fetchComments(id) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    let commentIdCounter = 11; 
    const authorIdMap = new Map(); 

    return response.data.map((comment) => {
      let authorId = authorIdMap.get(comment.email);
      if (!authorId) {
        authorId = `${commentIdCounter++}`;
        authorIdMap.set(comment.email, authorId);
      }

      const authorName = comment.email
        .split('@')[0]
        .split('.')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      const emailParts = comment.email.split('@');
      const authorInitials = emailParts[0]
        .split('.')
        .map((word) => word.charAt(0).toUpperCase())
        .join('');

      return {
        ...comment,
        authorName: authorName,
        authorInitials: authorInitials,
        userId: authorId,
      };
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}

export async function addComment(id, addedComment) {
  try {
    const response = await axios.post(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, addedComment, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
}

export async function editComment(commentId, editedComment) {
  try {
    const response = await axios.patch(`https://jsonplaceholder.typicode.com/comments/${commentId}`, editedComment, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error editing comment:", error);
    throw error;
  }
}

export async function deleteComment(commentId) {
  try {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting comment:", error);
    throw error;
  }
}
