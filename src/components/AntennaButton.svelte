<button on:click={click} class="btn  {clicked ?  "btn-success" : "btn-error btn-outline"}">
  nigger
</button>

<script>
  let clicked = true;

  function click() {
    clicked = !clicked;
  }
</script>