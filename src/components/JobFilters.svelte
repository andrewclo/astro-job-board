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
</script>

<div class="bg-white p-6 border-3 border-black">
  <h2 class="text-2xl font-bold mb-6">Filter Jobs</h2>
  
  <div class="space-y-6">
    <div>
      <label for="category" class="block text-sm font-bold mb-2">Category</label>
      <select
        id="category"
        class="w-full p-3 border-3 border-black bg-white focus:outline-none focus:ring-2 focus:ring-accent"
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
      <label for="type" class="block text-sm font-bold mb-2">Job Type</label>
      <select
        id="type"
        class="w-full p-3 border-3 border-black bg-white focus:outline-none focus:ring-2 focus:ring-accent"
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
      <label for="location" class="block text-sm font-bold mb-2">Location</label>
      <input
        type="text"
        id="location"
        class="w-full p-3 border-3 border-black bg-white focus:outline-none focus:ring-2 focus:ring-accent"
        placeholder="Enter location..."
        value={selectedLocation}
        on:input={handleLocationChange}
      />
    </div>
  </div>
</div> 