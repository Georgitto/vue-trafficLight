<template>
<div class="trafficLight">
    <Light :r="true" :isActive="active" />
    <Light :y="true" :isActive="false" />
    <Light :g="true" :isActive="false" />
    <div class="timer">{{time}}</div>
</div>
</template>

<script>
import Light from '../components/light/Light.vue'

export default {
    data() {
        return {
           time: 10, 
           active: true
        }
    },
    components: {
        Light
    },
    mounted() {
        this.startTimer()
    },
    destroyed() {
        this.stopTimer()
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                if (this.time <= 3) {
                    this.active = this.time % 2 == 1?false:true;
                }
                this.time--
            }, 1000)
        },
        stopTimer() {
            clearTimeout(this.timer)
        },
    },
    watch: {
        time(time) {
            if (time === 0) {
                this.stopTimer()
                this.$router.push('/yellow')
            }
        }
    },
}
</script>

<style lang="css">
    .timer {
        margin: 0 auto 0 auto;
        font-size: 30px;
        width: 40px;
        text-align: center;
    }

    .trafficLight {
        border: solid;
        border-width: 2px;
        border-color: black;
        width: 200px;
        height: 275px;
        margin: 0 auto 0 auto;
    }
</style>