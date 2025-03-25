<script lang="ts">
  import jobsData from '../data/jobs.json';
  import companiesData from '../data/companies.json';

  export let jobId: string;

  const job = jobsData.jobs.find(j => j.id === jobId);
  const company = companiesData.companies.find(c => c.id === job?.companyId);

  if (!job || !company) {
    throw new Error('Job or company not found');
  }
</script>

<div class="bg-white p-4 sm:p-8 rounded-lg shadow-subtle">
  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 sm:mb-6">
    <div>
      <h1 class="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-primary" data-astro-transition={`job-title-${jobId}`}>{job.title}</h1>
      <a href={`/astro-job-board/companies/${company.id}`} class="text-lg sm:text-xl text-gray-700 hover:text-accent transition-colors duration-200" data-astro-transition={`company-name-${company.id}`}>
        {company.name}
      </a>
    </div>
    <div class="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">
      Posted: {new Date(job.postedAt).toLocaleDateString()}
    </div>
  </div>

  <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
    <span class="px-2 py-1 bg-gray-50 text-xs sm:text-sm font-mono border border-gray-200 rounded">{job.category}</span>
    <span class="px-2 py-1 bg-gray-50 text-xs sm:text-sm font-mono border border-gray-200 rounded">{job.type}</span>
    {#each job.locations as location}
      <span class="px-2 py-1 bg-gray-50 text-xs sm:text-sm font-mono border border-gray-200 rounded">{location}</span>
    {/each}
  </div>

  {#if job.salary}
    <div class="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 font-medium">
      {job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()} {job.salary.currency}
    </div>
  {/if}

  <div class="prose max-w-none">
    <h2 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">Job Description</h2>
    <p class="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base" data-astro-transition={`job-desc-${jobId}`}>{job.description}</p>

    <h2 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">Requirements</h2>
    <ul class="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-sm sm:text-base">
      {#each job.requirements as requirement}
        <li class="text-gray-700">{requirement}</li>
      {/each}
    </ul>
  </div>

  <div class="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
    <a
      href={`/astro-job-board/companies/${company.id}`}
      class="w-full sm:w-auto px-4 sm:px-6 py-2 bg-gray-50 text-primary hover:bg-gray-100 transition-colors duration-200 rounded border border-gray-200 text-center"
    >
      View Company Profile
    </a>
    <a
      href={company.website}
      target="_blank"
      rel="noopener noreferrer"
      class="w-full sm:w-auto px-4 sm:px-6 py-2 bg-primary text-white hover:bg-primary-light transition-colors duration-200 rounded text-center"
    >
      Apply Now
    </a>
  </div>
</div> 