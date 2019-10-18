<template>
  <div>
    <label>{{ $t('gmaps.latitude') }}</label>
    <b-form-input
      v-model.number="$v.lat.$model"
      :state="$v.lat.$dirty ? !$v.lat.$error : null"
      type="number"
    />
    <label>{{ $t('gmaps.longitude') }}</label>
    <b-form-input
      v-model.number="$v.lng.$model"
      :state="$v.lng.$dirty ? !$v.lng.$error : null"
      type="number"
    />
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, decimal } from "vuelidate/lib/validators";

const coordinate = {
  required,
  decimal
};

export default {
  name: "CoordinatesForm",
  mixins: [validationMixin],
  props: { lat: Number, lng: Number },
  validations: {
    lat: coordinate,
    lng: coordinate
  }
};
</script>