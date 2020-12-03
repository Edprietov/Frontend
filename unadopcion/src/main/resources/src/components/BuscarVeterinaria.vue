<template>
  <div id="buscarveterinaria">
    <Header></Header>
    <div class="ui grid">
      <div class="six wide column">
        <form class="ui segment large form">
          <div class="field">
            <div class="ui right icon input large">
              <input
                type="text"
                placeholder="Ingresa tu dirección"
                v-model="coordinates"
              />
              <i class="dot circle link icon" @click="botonLocalizacion"> </i>
            </div>
          </div>

          <div class="field">
            <div class="two fields">
              <div class="field">
                <select v-model="tipo">
                  <option value="veterinary_care">Veterinaria</option>
                  <option value="pet_store">Tienda de mascotas</option>
                </select>
              </div>

              <div class="field">
                <select v-model="radio">
                  <option value="5">500 M</option>
                  <option value="10">1KM</option>
                </select>
              </div>
            </div>
          </div>

          <button class="ui button green" @click="buscarVeterinarias">
            Buscar
          </button>
        </form>

        <div class="ui segment" style="max-height: 500px; overflow: scroll">
          <div class="ui divided items">
            <div class="item" v-for="place in places" :key="place.id">
              <div class="content">
                <div class="header">{{ place.name }}</div>
                <div class="meta">{{ place.vicinity }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ten wide column segment ui" ref="map"></div>
    </div>
  </div>
</template>





<script>

import Header from "@/components/Header";
//import Footer from "@/components/Footer";
import axios from "axios";
import { API_KEY } from "@/utilities/variables";


export default {
  data() {
    return {
      tipo: "",
      radio: "",
      lat: 0,
      lng: 0,
      places: [],
      key: API_KEY,
    };
  },
  computed: {
    coordinates() {
      return `${this.lat}, ${this.lng}`;
    },
  },
  methods: {
    botonLocalizacion(e) {
      e.preventDefault();
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    },
    buscarVeterinarias(e) {
      e.preventDefault();
      axios
        .get(
          "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
            .concat(this.lat, ",")
            .concat(this.lng, "&radius=")
            .concat(this.radio * 100, "&type=")
            .concat(this.tipo, "&key=")
            .concat(this.key)
        )
        .then((response) => {
          console.log(response.data);
          this.places = response.data.results;
          this.addLocationsToGoogleMaps();
        })
        .catch((error) => {
          console.log(URL);
          console.log(error.message);
        });
      console.log(URL);

          console.log(restRequest);
          var restRequest = window.gapi.client.request({
    'path': 'https://people.googleapis.com/v1/people/me/connections',
  });


  alert(restRequest)
    },
    addLocationsToGoogleMaps() {
      var map = new window.google.maps.Map(this.$refs["map"], {
        zoom: 15,
        center: new window.google.maps.LatLng(this.lat, this.lng),
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      });

      var infowindow = new window.google.maps.InfoWindow();

      this.places.forEach((place) => {
        const lat = place.geometry.location.lat;
        const lng = place.geometry.location.lng;

        let marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(lat, lng),
          map: map,
        });

        window.google.maps.event.addListener(marker, "click", () => {
          infowindow.setContent(
            `<div class= "ui header">${place.name}</div><p>${place.vicinity}</p>`
          );

          infowindow.open(map, marker);
        });
      });
    },
  },
  components: {
    Header,
    //Footer,
  },
};
</script>

