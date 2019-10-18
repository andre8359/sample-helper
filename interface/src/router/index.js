import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
   mode: 'history',
   routes: [
      {
         path: '/',
         component: require('@/components/HomePage').default,
      },
      {
         path: '/video-converter',
         component: require('@/components/VideoConverterPage').default,
      },
      {
         path: '/pdu-parser',
         component: require('@/components/PDUParserPage').default,
      },
      {
         path: '/gmaps',
         component: require('@/components/GMapsPage').default,
      },
      {
         path: '*',
         redirect: '/',
      },
   ],
});

export default router;
