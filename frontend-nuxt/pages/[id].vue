<template>
    <navbar/>
    <div class="flex flex-col min-h-screen px-8">
    <div class="single-blog container mx-auto mt-5">

      <div v-if="blogDetails" class="flex flex-col items-center lg:items-start gap-1 mt-8">
        <h1 class="text-3xl font-bold text-black">{{ blogDetails.title }}</h1>
        <p class="mb-3 text-l text-black">
              <span class="font-semibold">{{ blogDetails.author }} </span> 
            </p>
        <div class="blog-img w-full">
          <img :src="blogDetails.image" :alt="blogDetails.title" class="max-h-96 w-full object-cover rounded shadow-md" />
        </div>
  
        <div class="blog-content w-full lg:w-1/2">
            <p class="text-black mt-4 text-xl">
                {{ blogDetails.fullcontent }}
            </p>

        </div>
      </div>
    </div>
  </div>
  <Footer />
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        blogDetails: null,
      };
    },
    mounted() {
      this.fetchBlogDetails();
    },
    methods: {
      async fetchBlogDetails() {
        try {
          const blogId = this.$route.params.id;
          const response = await axios.get(`http://localhost:3100/api/blog/${blogId}`);
          const blogData = response.data;
  
          this.blogDetails = {
            title: blogData.name,
            author: blogData.author.value.nama,
            fullcontent: blogData.content,
            image: blogData.media.url
          };
        } catch (error) {
          console.error("Error fetching blog details:", error);
        }
      },
      formatDate(date) {
        // Implement your preferred date formatting logic
        return new Date(date).toLocaleDateString();
      },
    },
  };
  </script>