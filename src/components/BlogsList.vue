<template>
    <h2>Blogs List</h2>

    <p v-for="blog in blogs" :key="blog.id">
        <router-link :to="'/blogs/' + blog.id">{{ blog.title }}</router-link>    
        </p>

</template>

<script>
export default {
    name: 'blogsList',

    data(){
        return {
            blogs: []
        }
    },

    created(){
        fetch('http://localhost:26855/api/Blogs')
        .then(data => data.json())
        .then(blogs => {
            this.blogs = blogs
        })
    }
}
</script>