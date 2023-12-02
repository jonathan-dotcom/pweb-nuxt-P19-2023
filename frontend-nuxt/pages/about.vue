<template>
    <navbar/>
    <div class="dark:text-gray-50">
        <div class="container mx-auto p-8">
            <h1 class="text-3xl font-bold mb-6 text-center">Meet Our Team</h1>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Team Member Card 1 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="../assets/images/marcel.jpeg" alt="Team Member" class="w-full h-1/2 object-cover object-center">
                    <div class="p-4">
                        <h2 class="text-xl text-black font-bold mb-2">Marcelinus Alvinanda Chrisantya</h2>
                        <p class="text-black mb-4">5027221012</p>
                        <p class="text-black">"Fish on, mancing mania mantap"</p>
                    </div>
                </div>

                <!-- Team Member Card 2 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="../assets/images/gebi.jpeg" alt="Team Member" class="w-full h-1/2 object-cover object-center">
                    <div class="p-4">
                        <h2 class="text-xl text-black font-bold mb-2">Gabriella Erlinda Wijaya</h2>
                        <p class="text-black mb-4">5027221018</p>
                        <p class="text-black">"I once believed love would be burning red, but it's golden"</p>
                    </div>
                </div>

                <!-- Team Member Card 3 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="../assets/images/jojo.jpeg" alt="Team Member" class="w-full h-1/2 object-cover object-center">
                    <div class="p-4">
                        <h2 class="text-xl text-black font-bold mb-2">Jonathan Adithya Baswara</h2>
                        <p class="text-black mb-4">5027221062</p>
                        <p class="text-black">"Hooh"</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>