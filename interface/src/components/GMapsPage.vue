<template>
  <div>
    <h1 class="mb-5 text-center">{{ $t('gmaps.title') }}</h1>

    <gmap-map
      id="map"
      :center="center"
      :zoom="12"
      map-type-id="roadmap"
      class="mb-3"
      style="width:100%; height: 700px;"
    >
      <gmap-marker
        v-if="!$v.draggableMarker.position.$invalid"
        :position="draggableMarker.position"
        :draggable="true"
        @drag="drag"
      />

      <gmap-circle
        v-if="!$v.circularArea.$invalid"
        :center="circularArea.center"
        :radius="circularArea.radius"
        :options="{ fillColor: circularArea.color, fillOpacity: 0.2 }"
      />

      <gmap-polyline :path="path" :options="{ strokeColor: polyline.color }" />
    </gmap-map>

    <b-tabs align="center">
      <b-tab :title="$t('gmaps.draggableMarker')">
        <coordinates-form :lat="draggableMarker.position.lat" :lng="draggableMarker.position.lng" />
        <b-button
          @click="centralize(!$v.draggableMarker.position.$invalid, draggableMarker.position)"
          class="mt-3"
          block
        >{{ $t('gmaps.centralize') }}</b-button>
      </b-tab>

      <b-tab :title="$t('gmaps.circularArea')">
        <label>{{ $t('gmaps.latitude') }}</label>
        <b-form-input
          v-model.number="$v.circularArea.center.lat.$model"
          :state="$v.circularArea.center.lat.$dirty ? !$v.circularArea.center.lat.$error : null"
          type="number"
        />
        <label>{{ $t('gmaps.longitude') }}</label>
        <b-form-input
          v-model.number="$v.circularArea.center.lng.$model"
          :state="$v.circularArea.center.lng.$dirty ? !$v.circularArea.center.lng.$error : null"
          type="number"
        />
        <label>{{ $t('gmaps.radius') }}</label>
        <b-form-input
          v-model.number="$v.circularArea.radius.$model"
          :state="$v.circularArea.radius.$dirty ? !$v.circularArea.radius.$error : null"
          type="number"
        />
        <label>{{ $t('gmaps.color') }}</label>
        <b-form-input v-model="circularArea.color" type="color" />
      </b-tab>

      <b-tab :title="$t('gmaps.polyline')" class="mt-3">
        <label>{{ $t('gmaps.coordinates') }}</label>
        <b-form-input v-model="polyline.coordinates" />
        <label>{{ $t('gmaps.color') }}</label>
        <b-form-input v-model="polyline.color" type="color" />
        <b-button-group class="mt-3 d-flex">
          <b-button
            @click="centralize(path.length, path[0])"
            style="background-color: #112233;"
          >{{ $t('gmaps.centralize') }}: {{ $t('gmaps.begin') }}</b-button>
          <b-button
            @click="centralize(path.length, path[path.length - 1])"
            style="background-color: #223344;"
          >{{ $t('gmaps.centralize') }}: {{ $t('gmaps.end') }}</b-button>
        </b-button-group>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, decimal } from "vuelidate/lib/validators";

import CoordinatesForm from "./GMaps/CoordinatesForm";

const coordinate = {
  required,
  decimal
};

//[+-]?(\d)+(\.\d+)?[\|]?

export default {
  name: "GMapsPage",
  components: {
    CoordinatesForm
  },
  mixins: [validationMixin],
  data() {
    return {
      center: { lat: -15.7723036111111, lng: -47.8704463888889 },
      draggableMarker: {
        position: {
          lat: null,
          lng: null
        }
      },
      circularArea: {
        center: {
          lat: null,
          lng: null
        },
        radius: null,
        color: "#FF0000"
      },
      polyline: {
        coordinates: null,
        color: "#FF0000"
      }
    };
  },
  validations: {
    draggableMarker: {
      position: {
        lat: coordinate,
        lng: coordinate
      }
    },
    circularArea: {
      center: {
        lat: coordinate,
        lng: coordinate
      },
      radius: {
        required,
        decimal,
        minValue: value => value > 0
      }
    }
  },
  methods: {
    drag(event) {
      this.draggableMarker.position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
    },
    centralize(valid, position) {
      if (valid) {
        this.center = position;
      }
    }
  },
  computed: {
    path() {
      if (!this.polyline.coordinates) {
        return [];
      }

      let coordinates = this.polyline.coordinates.split("|");

      if (coordinates.length % 2 === 1) {
        return [];
      }

      coordinates = coordinates.reduce((result, value, index, array) => {
        if (index % 2 === 0) {
          result.push({
            lat: parseFloat(array[index]),
            lng: parseFloat(array[index + 1])
          });
        }

        return result;
      }, []);

      return coordinates;
    }
  }
};
</script>