<template>
<div class="trafficLight">
    <Light :r="true" :isActive="false" />
    <Light :y="true" :isActive="false" />
    <Light :g="true" :isActive="active" />
    <div class="timer">{{time}}</div>
</div>
</template>

<script>
import Light from '../components/light/Light.vue'

export default {
    data() {
        return {
           time: 15, 
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
                if (this.time <= 5) {
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
                this.$router.push('/red')
            }
        }
    },
}
</script>

<style lang="css" scoped>

</style>