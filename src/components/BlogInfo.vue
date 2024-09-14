<template>
    <h2>Blog details</h2>


</template>

<script>
export default{
    name: 'blogInfo',

    data(){
        return{

        }
    },

    created(){
        fetch('http://localhost:26855/api/Blogs/' + id)
        .then(data => data.json())
        .then(blog => {
            this.blog = blog
        })
    }
}
</script>