<script>
import { gsap } from 'gsap/all'
gsap.registerPlugin(gsap)
import { onMounted, onUnmounted } from 'vue'
export default {
    setup() {
        onMounted(() => {
            setGSAP()
        })
        onUnmounted(() => {
        })
        const setGSAP = () => {
            gsap.to(".Bannerall",{y: +500, duration:0.001,})
            gsap.to(".Bannerall", {
                y: 0, duration:2,
            })
        }
        return {
            setGSAP
        }
    }
}
</script>
<template>
    <div class="Bannerall">
        <div class="headtittle">
            <div>
                <p>I- 00</p>
            </div>
            <div>
                <p>HI- 99999</p>
            </div>
            <div>
                <p>Hex School</p>
            </div>
        </div>
        <div><img src="../assets/logo.png" alt=""></div>
        <div class="link">
            <a href="https://2022.thef2e.com/login">1 LOG IN</a>
            <a href="https://2022.thef2e.com/signup">2 SIGN UP</a>
        </div>
        <div>
            <p>INTERACTIVE AND RESPONSIVE WEB DESIGN.</p>
        </div>
    </div>
</template>
<style scoped>
p {
    font-family: cubic-11;
    font-size: 36px;
    color: #ffffff;
}

.Bannerall {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100vh;
}

.headtittle {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100vh;
}

.link {
    display: flex;
    flex-direction: column;
}

.link a {
    font-family: cubic-11;
    font-size: 36px;
    color: #ffffff;
    text-decoration: none;
}

.link a:hover {
    color: #B82A06;
}
</style>