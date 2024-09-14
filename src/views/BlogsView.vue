<template>
    <h1>Blogs</h1>

    <BlogsList :key="blogsKey"/>

    <p>
        <input type="text" placeholder="Title" v-model="title"><br>
        <input type="text" placeholder="Content" v-model="content"><br>
        <input type="date" placeholder="Posting date" v-model="date"><br>
        <button @click="saveBlog">Save</button>
    </p>
</template>

<script>
import BlogsList from '@/components/BlogsList.vue';

export default {
    components: {
        BlogsList
    },

    data(){
        return{
            title: "",
            content: "",
            date: "",
            blogsKey: 0,
        }
    },

    methods:{
        saveBlog(){
            // Create the blog object with the correct field names for the API
            const blog = {
                Title: this.title,        // Match the API's expected Title property
                Content: this.content,    // Match the API's expected Content property
                Date: this.date ? new Date(this.date).toISOString() : null // Format date to ISO string
            }

            fetch('http://localhost:26855/api/Blogs', {
                method: 'POST',
                body: JSON.stringify(blog),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(error => { throw error });
                }
                this.blogsKey++;  // Re-render the blogs list if successful
            })
            .catch(error => {
                console.error('Error from server:', error); // Log any errors
            });
        }
    }
}
</script>
