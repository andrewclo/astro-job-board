<script lang="ts">
  export let name: string;
  export let description: string;
  export let location: string;
  export let industry: string;
  export let size: string;
  export let id: string;
</script>

<article class="bg-white p-6 rounded-lg shadow-subtle hover:shadow-hover transition-all duration-300" data-astro-transition-scope>
  <div class="flex justify-between items-start mb-4">
    <div>
      <h2 class="text-xl font-bold mb-2 text-primary" data-astro-transition={`company-title-${id}`}>{name}</h2>
      <p class="text-gray-700" data-astro-transition={`company-industry-${id}`}>{industry}</p>
    </div>
    <div class="text-sm text-gray-500">
      {size}
    </div>
  </div>

  <p class="text-gray-700 mb-4 line-clamp-2" data-astro-transition={`company-desc-${id}`}>{description}</p>

  <div class="flex flex-wrap gap-2 mb-4">
    <span class="px-3 py-1 bg-gray-50 text-sm font-mono border border-gray-200 rounded" data-astro-transition={`company-location-${id}`}>{location}</span>
  </div>

  <a
    href={`/astro-job-board/companies/${id}`}
    class="inline-block px-6 py-2 bg-primary text-white hover:bg-primary-light transition-colors duration-200 rounded"
  >
    View Company
  </a>
</article> 