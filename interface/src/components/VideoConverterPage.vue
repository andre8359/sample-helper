<template>
  <div>
    <h1 class="mb-5 text-center">{{ $t('videoConverter.title') }}</h1>

    <div class="mb-3">
      <b-form-file
        v-model="file"
        v-bind:drop-placeholder="$t('videoConverter.formFile.single.dropPlaceholder')"
        v-bind:placeholder="$t('videoConverter.formFile.single.placeholder')"
      ></b-form-file>
    </div>

    <div class="mb-3">
      <b-form-select v-model="format.selected" :options="format.options">
        <template v-slot:first>
          <option :value="null" disabled>{{ $t('videoConverter.format.selectAnOption') }}</option>
        </template>
      </b-form-select>
    </div>

    <b-button variant="success" :disabled="!file || !format.selected" @click="convert()" block>
      {{ $t('videoConverter.convert') }}
      <font-awesome-icon class="mr-1" icon="pray" />
    </b-button>
  </div>
</template>

<script>
export default {
  name: "VideoConverterPage",
  data() {
    return {
      file: null,
      format: {
        selected: null,
        options: [
          // Pull from API
          { value: "h264", text: "H.264" },
          { value: "webm", text: "WEBM" }
        ]
      }
    };
  },
  methods: {
    convert() {}
  }
};
</script>
