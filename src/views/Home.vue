<template>
 <div>
    <Loading v-if="isLoading"/>
    <Banner/>
 </div> 
</template>
<script>
  import { ref } from 'vue'
  import Loading from '../components/LoadingSection.vue'
  import Banner from '../components/Banner.vue'
  import { onMounted } from 'vue'
  export default {
  components: {
    Loading,
    Banner
  },
  setup() {
    const isLoading = ref(true)
    const timer = ref(null)

    onMounted(() => {
      isLoading.value ? setTimeOut() : null
    })
    const setTimeOut = () => {
      if(isLoading.value){
        const timeout = setTimeout(()=>{
          isLoading.value = false
        }, 2000)
        clearTimeout(timeout.value)
      }
      return{
        isLoading,
        timer,
        setTimeOut
      }
    }
  }
  }
</script>
