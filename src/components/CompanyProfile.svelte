<script lang="ts">
  import JobCardSvelte from './JobCardSvelte.svelte';
  import jobsData from '../data/jobs.json';

  export let company: {
    id: string;
    name: string;
    description: string;
    website: string;
    logo: string;
    location: string;
    founded: number;
    size: string;
    industry: string;
  };

  const companyJobs = jobsData.jobs.filter(job => job.companyId === company.id);
</script>

<div class="bg-white p-4 sm:p-8 border-2 sm:border-3 border-black mb-4 sm:mb-8">
  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between">
    <div>
      <h1 class="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4" data-astro-transition={`company-title-${company.id}`}>{company.name}</h1>
      <p class="text-base sm:text-xl text-gray-700 mb-3 sm:mb-4" data-astro-transition={`company-desc-${company.id}`}>{company.description}</p>
      <div class="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-0">
        <span>Founded: {company.founded}</span>
        <span>Size: {company.size}</span>
        <span data-astro-transition={`company-industry-${company.id}`}>Industry: {company.industry}</span>
        <span data-astro-transition={`company-location-${company.id}`}>Location: {company.location}</span>
      </div>
    </div>
    <div class="mt-4 sm:mt-0 w-full sm:w-auto">
      <a
        href={company.website}
        target="_blank"
        rel="noopener noreferrer"
        class="block w-full sm:w-auto px-4 sm:px-6 py-2 bg-black text-white hover:bg-accent transition-colors text-center"
      >
        Visit Website
      </a>
    </div>
  </div>
</div>

<div class="space-y-4 sm:space-y-6" data-astro-transition="open-positions">
  <h2 class="text-xl sm:text-2xl font-bold">Open Positions</h2>
  {#if companyJobs.length > 0}
    {#each companyJobs as job}
      <JobCardSvelte {...job} />
    {/each}
  {:else}
    <div class="bg-white p-4 sm:p-6 border-2 sm:border-3 border-black text-center">
      <p class="text-gray-700">No open positions at the moment.</p>
    </div>
  {/if}
</div> 