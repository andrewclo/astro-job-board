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

<div class="bg-white p-8 border-3 border-black mb-8">
  <div class="flex items-start justify-between">
    <div>
      <h1 class="text-4xl font-bold mb-4">{company.name}</h1>
      <p class="text-xl text-gray-700 mb-4">{company.description}</p>
      <div class="flex flex-wrap gap-4 text-sm text-gray-600">
        <span>Founded: {company.founded}</span>
        <span>Size: {company.size}</span>
        <span>Industry: {company.industry}</span>
        <span>Location: {company.location}</span>
      </div>
    </div>
    <a
      href={company.website}
      target="_blank"
      rel="noopener noreferrer"
      class="px-6 py-2 bg-black text-white hover:bg-accent transition-colors"
    >
      Visit Website
    </a>
  </div>
</div>

<div class="space-y-6">
  <h2 class="text-2xl font-bold">Open Positions</h2>
  {#if companyJobs.length > 0}
    {#each companyJobs as job}
      <JobCardSvelte {...job} />
    {/each}
  {:else}
    <div class="bg-white p-6 border-3 border-black text-center">
      <p class="text-gray-700">No open positions at the moment.</p>
    </div>
  {/if}
</div> 