<table class="table table-compact w-full">
  <thead>
  <tr>
    <td class="bg-gray-200">Nazwa</td>
    <td class="bg-gray-200">Stan</td>
    <td class="bg-gray-200">Opis</td>
  </tr>
  </thead>
  <tbody>
  {#each data as entry (entry.id)}
    <tr>
      <td>
        {entry.name}
      </td>
      <td>
        <input type="checkbox" class="toggle" checked="{entry.state}" on:click={toggle(entry.id)}/>
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
  export let dataStore;

  export let toggle;

  let data = []
  dataStore.subscribe(value =>{ data = value; console.log("XD")})

  import "../app.css";
</script>