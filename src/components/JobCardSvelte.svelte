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

<article class="bg-white p-6 border-2 border-gray-200 rounded-lg shadow-subtle hover:shadow-hover transition-all duration-300">
  <div class="flex justify-between items-start mb-4">
    <div>
      <h2 class="text-xl font-bold mb-2 text-primary">{title}</h2>
      <a href={`/astro-job-board/companies/${companyId}`} class="text-lg text-gray-700 hover:text-accent transition-colors duration-200">
        {company}
      </a>
    </div>
    <div class="text-sm text-gray-500">
      {new Date(postedAt).toLocaleDateString()}
    </div>
  </div>

  <div class="flex flex-wrap gap-2 mb-4">
    <span class="px-3 py-1 bg-gray-50 text-sm font-mono border border-gray-200 rounded">{category}</span>
    <span class="px-3 py-1 bg-gray-50 text-sm font-mono border border-gray-200 rounded">{type}</span>
    {#each locations as location}
      <span class="px-3 py-1 bg-gray-50 text-sm font-mono border border-gray-200 rounded">{location}</span>
    {/each}
  </div>

  <p class="text-gray-700 mb-4 line-clamp-2">{description}</p>

  {#if salary}
    <div class="text-sm text-gray-600 mb-4">
      {salary.min.toLocaleString()} - {salary.max.toLocaleString()} {salary.currency}
    </div>
  {/if}

  <a
    href={`/astro-job-board/jobs/${id}`}
    class="inline-block px-6 py-2 bg-primary text-white hover:bg-primary-light transition-colors duration-200 rounded"
  >
    View Details
  </a>
</article> 