<script lang="ts">
  import JobCardSvelte from './JobCardSvelte.svelte';
  import JobFilters from './JobFilters.svelte';
  import jobsData from '../data/jobs.json';

  let jobs = jobsData.jobs;
  let filteredJobs = jobs;

  function filterJobs(filters: { category: string; type: string; location: string }) {
    filteredJobs = jobs.filter(job => {
      const categoryMatch = !filters.category || job.category === filters.category;
      const typeMatch = !filters.type || job.type === filters.type;
      const locationMatch = !filters.location || 
        job.locations.some(loc => 
          loc.toLowerCase().includes(filters.location.toLowerCase())
        );
      
      return categoryMatch && typeMatch && locationMatch;
    });
  }

  function handleFilterChange(event: CustomEvent) {
    filterJobs(event.detail);
  }
</script>

<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
  <div class="md:col-span-1">
    <JobFilters
      on:filterChange={handleFilterChange}
      client:load
    />
  </div>
  
  <div class="md:col-span-3 space-y-6">
    {#each filteredJobs as job}
      <JobCardSvelte {...job} />
    {:else}
      <div class="bg-white p-6 border-3 border-black text-center">
        <p class="text-gray-700">No jobs found matching your filters.</p>
      </div>
    {/each}
  </div>
</div> 