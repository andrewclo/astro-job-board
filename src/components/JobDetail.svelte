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

<div class="bg-white p-8 rounded-lg shadow-subtle">
  <div class="flex justify-between items-start mb-6">
    <div>
      <h1 class="text-4xl font-bold mb-4 text-primary">{job.title}</h1>
      <a href={`/astro-job-board/companies/${company.id}`} class="text-xl text-gray-700 hover:text-accent transition-colors duration-200">
        {company.name}
      </a>
    </div>
    <div class="text-sm text-gray-500">
      Posted: {new Date(job.postedAt).toLocaleDateString()}
    </div>
  </div>

  <div class="flex flex-wrap gap-2 mb-6">
    <span class="px-3 py-1 bg-gray-50 text-sm font-mono border border-gray-200 rounded">{job.category}</span>
    <span class="px-3 py-1 bg-gray-50 text-sm font-mono border border-gray-200 rounded">{job.type}</span>
    {#each job.locations as location}
      <span class="px-3 py-1 bg-gray-50 text-sm font-mono border border-gray-200 rounded">{location}</span>
    {/each}
  </div>

  {#if job.salary}
    <div class="text-lg text-gray-700 mb-6 font-medium">
      {job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()} {job.salary.currency}
    </div>
  {/if}

  <div class="prose max-w-none">
    <h2 class="text-2xl font-bold mb-4 text-primary">Job Description</h2>
    <p class="text-gray-700 mb-6">{job.description}</p>

    <h2 class="text-2xl font-bold mb-4 text-primary">Requirements</h2>
    <ul class="list-disc pl-6 space-y-2">
      {#each job.requirements as requirement}
        <li class="text-gray-700">{requirement}</li>
      {/each}
    </ul>
  </div>

  <div class="mt-8 flex gap-4">
    <a
      href={`/astro-job-board/companies/${company.id}`}
      class="px-6 py-2 bg-gray-50 text-primary hover:bg-gray-100 transition-colors duration-200 rounded border border-gray-200"
    >
      View Company Profile
    </a>
    <a
      href={company.website}
      target="_blank"
      rel="noopener noreferrer"
      class="px-6 py-2 bg-primary text-white hover:bg-primary-light transition-colors duration-200 rounded"
    >
      Apply Now
    </a>
  </div>
</div> 