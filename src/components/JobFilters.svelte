<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let selectedCategory: string = '';
  export let selectedType: string = '';
  export let selectedLocation: string = '';

  const categories = [
    'sales',
    'marketing',
    'engineering',
    'design',
    'operations',
    'finance',
    'it'
  ];

  const types = [
    'full-time',
    'part-time',
    'contract',
    'remote',
    'hybrid',
    'on-site'
  ];

  function handleCategoryChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    selectedCategory = select.value;
    dispatch('filterChange', { category: selectedCategory, type: selectedType, location: selectedLocation });
  }

  function handleTypeChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    selectedType = select.value;
    dispatch('filterChange', { category: selectedCategory, type: selectedType, location: selectedLocation });
  }

  function handleLocationChange(event: Event) {
    const input = event.target as HTMLInputElement;
    selectedLocation = input.value;
    dispatch('filterChange', { category: selectedCategory, type: selectedType, location: selectedLocation });
  }

  function clearFilters() {
    selectedCategory = '';
    selectedType = '';
    selectedLocation = '';
    dispatch('filterChange', { category: '', type: '', location: '' });
  }
</script>

<div class="bg-white p-4 sm:p-6 border-2 sm:border-3 border-black">
  <div class="flex items-center justify-between mb-4 sm:mb-6">
    <h2 class="text-xl sm:text-2xl font-bold">Filter Jobs</h2>
    {#if selectedCategory || selectedType || selectedLocation}
      <button 
        class="text-xs sm:text-sm text-accent hover:text-accent-dark"
        on:click={clearFilters}
      >
        Clear All
      </button>
    {/if}
  </div>
  
  <div class="space-y-4 sm:space-y-6">
    <div>
      <label for="category" class="block text-xs sm:text-sm font-bold mb-1 sm:mb-2">Category</label>
      <select
        id="category"
        class="w-full p-2 sm:p-3 border-2 sm:border-3 border-black bg-white focus:outline-none focus:ring-2 focus:ring-accent text-sm"
        value={selectedCategory}
        on:change={handleCategoryChange}
      >
        <option value="">All Categories</option>
        {#each categories as category}
          <option value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
        {/each}
      </select>
    </div>

    <div>
      <label for="type" class="block text-xs sm:text-sm font-bold mb-1 sm:mb-2">Job Type</label>
      <select
        id="type"
        class="w-full p-2 sm:p-3 border-2 sm:border-3 border-black bg-white focus:outline-none focus:ring-2 focus:ring-accent text-sm"
        value={selectedType}
        on:change={handleTypeChange}
      >
        <option value="">All Types</option>
        {#each types as type}
          <option value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
        {/each}
      </select>
    </div>

    <div>
      <label for="location" class="block text-xs sm:text-sm font-bold mb-1 sm:mb-2">Location</label>
      <input
        type="text"
        id="location"
        class="w-full p-2 sm:p-3 border-2 sm:border-3 border-black bg-white focus:outline-none focus:ring-2 focus:ring-accent text-sm"
        placeholder="Enter location..."
        value={selectedLocation}
        on:input={handleLocationChange}
      />
    </div>

    <div class="pt-2 md:hidden">
      <button
        class="w-full p-2 bg-primary text-white rounded-md text-center"
        on:click={() => dispatch('filterChange', { category: selectedCategory, type: selectedType, location: selectedLocation })}
      >
        Apply Filters
      </button>
    </div>
  </div>
</div> 