<template>
    <div class = "Light" 
    v-bind:class = "{
        Red_active: r && isActive, 
        Red_inactive: r && !isActive,
        Yellow_active: y && isActive,
        Yellow_inactive: y && !isActive,
        Green_active: g && isActive,
        Green_inactive: g && !isActive
    }"></div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: ['r', 'y', 'g', 'isActive']
}
</script>

<style>
.Light {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid rgb(180, 177, 177);
    margin: 25px auto 0 auto;
}

.Red_active {
    background-color: red;
}

.Red_inactive {
    background-color: rgb(170, 0, 0);
}

.Yellow_active {
    background-color: yellow;
}

.Yellow_inactive {
    background-color: rgb(170, 170, 0);
}

.Green_active {
    background-color: rgb(2, 179, 2);
}

.Green_inactive {
    background-color: rgb(0, 88, 0);
}
</style>