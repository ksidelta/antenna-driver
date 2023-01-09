<div class="flex flex-col lg:grid lg:grid-cols-8 w-full p-5 container gap-4 mx-auto">
  <div class="col-start-2 col-span-4">
    <AntennaTable dataStore={antennaStore} toggle={(id) => antennas.toggle(id)}/>
  </div>
  <div class="col-start-6 col-span-2">
    <AntennaList dataStore={antennaStore} toggle={(id) => antennas.toggle(id)} />
  </div>
</div>

<script>
  import "../app.css";
  import "../components/AntennaButton.svelte";
  import AntennaTable from "../components/AntennaTable.svelte";
  import AntennaList from "../components/AntennaList.svelte";
  import { Antennas } from "../model/Antennas.ts";
  import { writable } from "svelte/store";

  const antennaStore = writable([]);

  const antennas = new Antennas(() =>
      [
        { id: 0, name: "Antena Łasząca Się", state: true, description: "Moja ulubiona antena" },
        { id: 1, name: "Antena Karna", state: true, description: "Antena z którą nie chcesz się spotkać" },
        { id: 2, name: "Antena Bistabilna", state: false, description: "Raz Antena to nie radiofalowiec" },
        { id: 3, name: "Antena Samotna", state: true, description: "Niektórych Anten nie chcesz mieć" }
      ],
    (update) => antennaStore.set(update)
  );

  antennas.init();
  const data = {
    config: antennas.currentConfig
  };
</script>