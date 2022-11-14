<script>
import { gsap, ScrollTrigger,TextPlugin } from 'gsap/all'
gsap.registerPlugin( gsap, ScrollTrigger,TextPlugin  )
import { onMounted, onUnmounted} from 'vue'
export default {
  setup () {
    onMounted(() => {
        gsap.to(".typing-loading", {
        text: "Loading...",
        duration: 1.5,
        repeat: -1
      })
      })
    onUnmounted(() => {
    })

    
    }
}
</script>

<template>
    <div class="text">
        <div>
            <p class="typing-loading typing"></p>
        </div>
        <div>
            <img src="../assets/tankside.gif" alt="tank">
        </div>
    </div>
</template>

<style scoped>
    .text{
        height: 900px;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        
    }
    .text div{
        width: 180px;
        height: 100px;
    }
    .text img{
        position: absolute;
        width: 164px;
        height: 66px;
    }
    .typing{
        color: #ffffff;
        font-size: 36px;
        font-family: 'cubic-11';
        min-height: 36px;
    }
</style>