import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
   'en-us': {
      flag: 'us',
      home: {
         language: 'Language',
      },
      videoConverter: {
         title: 'Video Converter',
         format: {
            selectAnOption: 'Please select an output format'
         },
         formFile: {
            single: {
               placeholder: 'Choose a file or drop it here...',
               dropPlaceholder: 'Drop file here...'
            }
         },
         convert: 'Convert'
      },
      pduParser: {
         title: 'PDU Parser',
         version: {
            selectAnOption: 'Choose a version'
         }
      },
      gmaps: {
         title: 'GMaps',
         latitude: 'Latitude',
         longitude: 'Longitude',
         radius: 'Radius',
         color: 'Color',
         centralize: 'Centralize',
         begin: 'Begin',
         end: 'End',
         draggableMarker: 'Draggable marker',
         circularArea: 'Circular area',
         polygonalArea: 'Polygonal area',
         polyline: 'Polyline',
         coordinates: 'Coordinates'
      }
   },
   'pt-br': {
      flag: 'br',
      home: {
         language: 'Idioma',
      },
      videoConverter: {
         title: 'Conversor de Vídeo',
         format: {
            selectAnOption: 'Por favor selecione um formato de saída'
         },
         formFile: {
            single: {
               placeholder: 'Escolha um arquivo ou solte-o aqui...',
               dropPlaceholder: 'Solte o arquivo aqui...'
            }
         },
         convert: 'Converter'
      },
      pduParser: {
         title: 'Analisador de PDU',
         version: {
            selectAnOption: 'Escolha uma versão'
         }
      },
      gmaps: {
         title: 'GMaps',
         latitude: 'Latitude',
         longitude: 'Longitude',
         radius: 'Raio',
         color: 'Cor',
         centralize: 'Centralizar',
         begin: 'Início',
         end: 'Fim',
         draggableMarker: 'Marcador arrastável',
         circularArea: 'Área circular',
         polygonalArea: 'Área poligonal',
         polyline: 'Polilinha',
         coordinates: 'Coordenadas'
      }
   }
}

export default new VueI18n({
   locale: (localStorage.locale || 'en-us'),
   messages
})