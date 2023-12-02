<template>
    <navbar/>
    <div class="dark:bg-gray-800 dark:text-gray-50">
        <div class="container mx-auto p-8">
            <h1 class="text-3xl font-bold mb-6 text-center">Meet Our Team</h1>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Team Member Card 1 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://via.placeholder.com/300" alt="Team Member" class="w-full h-56 object-cover object-center">
                    <div class="p-4">
                        <h2 class="text-xl font-semibold mb-2">John Doe</h2>
                        <p class="text-gray-700 mb-4">Frontend Developer</p>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales felis nec ligula cursus, sed sagittis libero viverra.</p>
                    </div>
                </div>

                <!-- Team Member Card 2 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://via.placeholder.com/300" alt="Team Member" class="w-full h-56 object-cover object-center">
                    <div class="p-4">
                        <h2 class="text-xl font-semibold mb-2">Jane Smith</h2>
                        <p class="text-gray-700 mb-4">UI/UX Designer</p>
                        <p class="text-gray-600">Fusce aliquam urna sit amet lacinia cursus. Nulla non nunc ac ipsum placerat bibendum sed nec odio.</p>
                    </div>
                </div>

                <!-- Team Member Card 3 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://via.placeholder.com/300" alt="Team Member" class="w-full h-56 object-cover object-center">
                    <div class="p-4">
                        <h2 class="text-xl font-semibold mb-2">Alex Johnson</h2>
                        <p class="text-gray-700 mb-4">Marketing Manager</p>
                        <p class="text-gray-600">Integer rutrum elit in purus eleifend, vitae dapibus lectus blandit. Aenean suscipit sed elit quis tristique.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer/>
</template>