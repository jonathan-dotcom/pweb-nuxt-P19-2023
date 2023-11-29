<template>
    <nav class="bg-gray-800 p-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <a href="#" class="text-white text-xl font-bold">Logo</a>
        </div>
        <div class="flex space-x-4">
          <a href="#" class="text-white hover:text-gray-300">Home</a>
          <a href="#" class="text-white hover:text-gray-300">About</a>
          <a href="#" class="text-white hover:text-gray-300">Services</a>
          <a href="#" class="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>

<slot/>

    <footer class="bg-gray-200 p-4">
    <div class="max-w-7xl mx-auto">
    <p class="text-center text-gray-600">© 2023 Your Website. All rights reserved.</p>
    </div>
  </footer>
  </template>