
<template>
  <div id="nav" v-if="$store.state.user">  
  </div>
  <router-view/>
</template>


<script>
  
import { onBeforeMount } from 'vue';
  
import {useStore} from 'vuex';

export default{
  setup(){
    const store= useStore() 

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>


