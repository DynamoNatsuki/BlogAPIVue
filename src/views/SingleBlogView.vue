<template>
    <h1>Single blog</h1>

    <input type="text" v-model="title" placeholder="Title"><br>
    <textarea v-model="content" placeholder="Content" rows="10" cols="50"></textarea><br>
    <input type="date" v-model="date" placeholder="Date"><br>
    <button @click="updateBlog">Update blog</button>
    <button @click="deleteBlog">Delete blog</button>
</template>

<script>
export default {
    data() {
        return {
            title: "", 
            content: "",
            date: "",
        };
    },

    created() {
    const id = this.$route.params.id;

    console.log("Blog ID:", id);  // Log the ID being passed

    fetch('http://localhost:26855/api/Blogs/' + id)
    .then(response => {
        console.log("API Response Status:", response.status);  // Log status
        return response.json();
    })
    .then(blog => {
        console.log("Full API Response:", blog);  // Log full API response
        
        this.title = blog.title || "No Title Available";  // Fallback if undefined
        this.content = blog.content || "No Content Available";
        this.date = blog.date ? blog.date.split('T')[0] : "Date Not Available";

        console.log("Assigned Title:", this.title);  // Log assigned data
        console.log("Assigned Content:", this.content);
        console.log("Assigned Date:", this.date);
    })
    .catch(error => {
        console.error("Error fetching blog:", error);
    });
},

    methods: {
        updateBlog() {
            const blog = {
                Title: this.title, // Match the API's expected property names
                Content: this.content, // Match the API's expected property names
                Date: this.date ? new Date(this.date).toISOString() : null, // Format the date for API
            };

            const id = this.$route.params.id;
            fetch('http://localhost:26855/api/Blogs/' + id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blog)
            })
            .then(() => {
                this.$router.push('/blogs');
            });
        },

        deleteBlog() {
            const id = this.$route.params.id;

            fetch('http://localhost:26855/api/Blogs/' + id, {
                method: 'DELETE',
            })
            .then(() => {
                this.$router.push('/blogs');
            });
        }
    }
};
</script>
