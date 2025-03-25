<script lang="ts">
  export let name: string;
  export let description: string;
  export let location: string;
  export let industry: string;
  export let size: string;
  export let id: string;
</script>

<article class="bg-white p-4 sm:p-6 rounded-lg shadow-subtle hover:shadow-hover transition-all duration-300">
  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
    <div>
      <h2 class="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-primary" data-astro-transition={`company-title-${id}`}>{name}</h2>
      <p class="text-gray-700 text-sm sm:text-base" data-astro-transition={`company-industry-${id}`}>{industry}</p>
    </div>
    <div class="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-0">
      {size}
    </div>
  </div>

  <p class="text-gray-700 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base" data-astro-transition={`company-desc-${id}`}>{description}</p>

  <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
    <span class="px-2 py-1 bg-gray-50 text-xs sm:text-sm font-mono border border-gray-200 rounded" data-astro-transition={`company-location-${id}`}>{location}</span>
  </div>

  <div class="w-full sm:w-auto">
    <a
      href={`/astro-job-board/companies/${id}`}
      class="inline-block w-full sm:w-auto px-4 sm:px-6 py-2 bg-primary text-white hover:bg-primary-light transition-colors duration-200 rounded text-center"
    >
      View Company
    </a>
  </div>
</article> 