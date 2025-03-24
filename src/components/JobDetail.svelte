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

<div class="bg-white p-8 border-3 border-black mb-8">
  <div class="flex justify-between items-start mb-6">
    <div>
      <h1 class="text-4xl font-bold mb-4">{job.title}</h1>
      <a href={`/companies/${company.id}`} class="text-xl text-gray-700 hover:text-accent">
        {company.name}
      </a>
    </div>
    <div class="text-sm text-gray-500">
      Posted: {new Date(job.postedAt).toLocaleDateString()}
    </div>
  </div>

  <div class="flex flex-wrap gap-2 mb-6">
    <span class="px-3 py-1 bg-gray-100 text-sm font-mono">{job.category}</span>
    <span class="px-3 py-1 bg-gray-100 text-sm font-mono">{job.type}</span>
    {#each job.locations as location}
      <span class="px-3 py-1 bg-gray-100 text-sm font-mono">{location}</span>
    {/each}
  </div>

  {#if job.salary}
    <div class="text-lg text-gray-700 mb-6">
      {job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()} {job.salary.currency}
    </div>
  {/if}

  <div class="prose max-w-none">
    <h2 class="text-2xl font-bold mb-4">Job Description</h2>
    <p class="text-gray-700 mb-6">{job.description}</p>

    <h2 class="text-2xl font-bold mb-4">Requirements</h2>
    <ul class="list-disc pl-6 space-y-2">
      {#each job.requirements as requirement}
        <li class="text-gray-700">{requirement}</li>
      {/each}
    </ul>
  </div>

  <div class="mt-8 flex gap-4">
    <a
      href={`/companies/${company.id}`}
      class="px-6 py-2 bg-gray-100 text-black hover:bg-gray-200 transition-colors"
    >
      View Company Profile
    </a>
    <a
      href={company.website}
      target="_blank"
      rel="noopener noreferrer"
      class="px-6 py-2 bg-black text-white hover:bg-accent transition-colors"
    >
      Apply Now
    </a>
  </div>
</div> 