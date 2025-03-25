<script lang="ts">
  import JobCardSvelte from './JobCardSvelte.svelte';
  import JobFilters from './JobFilters.svelte';
  import jobsData from '../data/jobs.json';
  import { onMount } from 'svelte';

  let jobs = jobsData.jobs;
  let filteredJobs = jobs;
  let showFilters = false;
  let isMobile = false;

  onMount(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  });

  function checkScreenSize() {
    isMobile = window.innerWidth < 768;
  }

  function toggleFilters() {
    showFilters = !showFilters;
  }

  function filterJobs(filters: { category: string; type: string; location: string }) {
    filteredJobs = jobs.filter(job => {
      const categoryMatch = !filters.category || job.category === filters.category;
      
      // Standard type matching as remote is now a proper job type 
      const typeMatch = !filters.type || job.type === filters.type;
      
      // Text-based case-insensitive search for location
      const locationMatch = !filters.location || 
        job.locations.some(loc => 
          loc.toLowerCase().includes(filters.location.toLowerCase())
        ) || (job.locations.length === 0 && filters.type === 'remote');
      
      return categoryMatch && typeMatch && locationMatch;
    });

    // On mobile, close filters after applying
    if (isMobile) {
      showFilters = false;
    }
  }

  function handleFilterChange(event: CustomEvent) {
    filterJobs(event.detail);
  }
</script>

<div>
  <!-- Mobile filter toggle button -->
  <div class="md:hidden mb-4">
    <button 
      class="w-full py-2 px-4 bg-primary text-white rounded-md flex justify-center items-center"
      on:click={toggleFilters}
    >
      {showFilters ? 'Hide Filters' : 'Show Filters'}
    </button>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
    <div class="md:col-span-1" class:hidden={!showFilters && isMobile}>
      <JobFilters
        on:filterChange={handleFilterChange}
        client:load
      />
    </div>
    
    <div class="md:col-span-3 space-y-4 md:space-y-6">
      <p class="text-sm text-gray-600">
        Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
      </p>
      
      {#each filteredJobs as job}
        <JobCardSvelte {...job} />
      {:else}
        <div class="bg-white p-4 sm:p-6 border-3 border-black text-center">
          <p class="text-gray-700">No jobs found matching your filters.</p>
        </div>
      {/each}
    </div>
  </div>
</div> 