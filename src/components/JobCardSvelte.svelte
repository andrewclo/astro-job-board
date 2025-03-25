<script lang="ts">
  export let title: string;
  export let company: string;
  export let companyId: string;
  export let category: string;
  export let type: string;
  export let locations: string[];
  export let description: string;
  export let salary: { min: number; max: number; currency: string } | undefined;
  export let postedAt: string;
  export let id: string;
</script>

<article class="bg-white p-4 sm:p-6 border-2 border-gray-200 rounded-lg shadow-subtle hover:shadow-hover transition-all duration-300">
  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
    <div>
      <h2 class="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-primary" data-astro-transition={`job-title-${id}`}>{title}</h2>
      <a href={`/astro-job-board/companies/${companyId}`} class="text-base sm:text-lg text-gray-700 hover:text-accent transition-colors duration-200" data-astro-transition={`company-name-${companyId}`}>
        {company}
      </a>
    </div>
    <div class="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-0">
      {new Date(postedAt).toLocaleDateString()}
    </div>
  </div>

  <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
    <span class="px-2 py-1 bg-gray-50 text-xs sm:text-sm font-mono border border-gray-200 rounded">{category}</span>
    <span class="px-2 py-1 bg-gray-50 text-xs sm:text-sm font-mono border border-gray-200 rounded">{type}</span>
    {#each locations as location}
      <span class="px-2 py-1 bg-gray-50 text-xs sm:text-sm font-mono border border-gray-200 rounded">{location}</span>
    {/each}
  </div>

  <p class="text-gray-700 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base" data-astro-transition={`job-desc-${id}`}>{description}</p>

  {#if salary}
    <div class="text-sm text-gray-600 mb-3 sm:mb-4">
      {salary.min.toLocaleString()} - {salary.max.toLocaleString()} {salary.currency}
    </div>
  {/if}

  <div class="w-full sm:w-auto">
    <a
      href={`/astro-job-board/jobs/${id}`}
      class="inline-block w-full sm:w-auto px-4 sm:px-6 py-2 bg-primary text-white hover:bg-primary-light transition-colors duration-200 rounded text-center"
    >
      View Details
    </a>
  </div>
</article> 