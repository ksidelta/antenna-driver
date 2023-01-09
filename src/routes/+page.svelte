<div class="flex flex-col lg:grid lg:grid-cols-8 w-full p-5 container gap-4 mx-auto">
  <div class="col-start-2 col-span-4">
    <AntennaTable data={data.config} />
  </div>
  <div class="col-start-6 col-span-2">
    <AntennaList data={data.config} />
  </div>
</div>

<script>
  import "../app.css";
  import "../components/AntennaButton.svelte";
  import AntennaTable from "../components/AntennaTable.svelte";
  import AntennaList from "../components/AntennaList.svelte";

  let data = {
    config: [
      { id: 0, name: "Antena Łasząca Się", state: true, description: "Moja ulubiona antena" },
      { id: 1, name: "Antena Karna", state: true, description: "Antena z którą nie chcesz się spotkać" },
      { id: 2, name: "Antena Bistabilna", state: false, description: "Raz Antena to nie radiofalowiec" },
      { id: 3, name: "Antena Samotna", state: true, description: "Niektórych Anten nie chcesz mieć" }
    ]
  };
</script>