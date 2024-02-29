<script lang="ts">
  import Header from "$components/Header.svelte"
  import Footer from "$components/Footer.svelte"
  import CenterColumn from "$components/CenterColumn.svelte"
</script>

<CenterColumn>
  <div class="layout-container">
    <div class="content-wrapper">
      <Header />
      <div class="content">
        <slot />
      </div>
      <Footer />
    </div>
  </div>
</CenterColumn>

<style lang="scss">
  .layout-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: auto;

    .content-wrapper {
      max-width: $container-max-width;
      background: $color-sea;
      width: 100%;
      color: white;
      display: flex;
      align-items: center;
      flex-direction: column;
      flex-grow: 1;

      .content {
        display: flex;
        align-items: center;
        margin: auto;
        justify-content: center;
        flex-direction: column;
        max-width: 28.625rem;
        min-height: 25rem;

        @include mobile {
          width: 90%;
        }
      }
    }
  }
</style>
