<div class="grid grid-cols-2 w-full" style="grid-template-columns: 1fr auto">
  <div class="col-span-2 p-2 text-sm font-bold bg-gray-200 rounded-t-lg">Ateny</div>

  {#each data as entry (data.id)}
    <div class="p-4 pl-2 text-sm">
      {entry.name}
    </div>
    <div class="p-4">
      <input type="checkbox" class="toggle" bind:checked="{entry.state}" />
    </div>
  {/each}
</div>

<script>
  export let data;
</script>