<table class="table table-compact w-full">
  <thead>
  <tr>
    <td class="bg-gray-200">Nazwa</td>
    <td class="bg-gray-200">Stan</td>
    <td class="bg-gray-200">Opis</td>
  </tr>
  </thead>
  <tbody>
  {#each data as entry (data.id)}
    <tr>
      <td>
        {entry.name}
      </td>
      <td>
        <input type="checkbox" class="toggle" bind:checked="{entry.state}" />
      </td>
      <td class="p-0">
        <div tabindex="0" class="collapse collapse-arrow ">
          <input type="checkbox" class="peer" />
          <div class="collapse-title text-base">
            {entry.description}
          </div>
          <div class="collapse-content">
            <p>Tutaj mieszka jajko</p>
          </div>
        </div>
      </td>
    </tr>
  {/each}
  </tbody>
</table>

<script>
  export let data;

  import "../app.css";
</script>