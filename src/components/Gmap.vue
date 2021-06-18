<template>
<div style=""> 
<GmapMap
      :center='center'
      :zoom='12'
       map-type-id="satellite"
      style='width:100%;  height:620px;'
    />
</div>
</template>

<script>
export default {
  name: 'Gmap',
    data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
    }
  },

  mounted() {
    this.geolocate();
  },
  methods: {
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
}
</script>

<style scoped>

</style>

