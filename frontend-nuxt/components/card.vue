<template>
	<div v-for="data in datas.docs" :key="data.id" class="p-4 mt-12 dark:text-gray-50 ">
		<div class="bg-primary container grid grid-cols-12 mx-auto bg-gray-900 rounded-md">
      <div class="col-span-full lg:col-span-4 rounded-r-md" 
        :style="{
          backgroundImage: `url(${data.media.url})`, 
          backgroundPosition: 'center center', 
          backgroundSize: 'cover'
        }">
      </div>
			<div class="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
				<div class="flex justify-start">
					<span class="px-2 py-1 my-2 text-xs text-black font-semibold rounded-full bg-white">{{ data.label }}</span>
				</div>
				<h1 class="text-3xl font-semibold">{{ data.name }}</h1>
				<p class="flex-1 pt-2">{{ data.description }}</p>
				<NuxtLink :to="{ name: 'id', params: { id: data.id } }" class="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400">
					<span>Read more</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
						<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
					</svg>
				</NuxtLink>
				<div class="flex items-center justify-between pt-2">
					<div class="flex space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
						</svg>
						<span class="self-center text-sm">by {{ data.author.value.nama }}</span>
					</div>
					<span class="text-xs">3 min read</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const datas = await $fetch('http://localhost:3100/api/Blog')
</script>