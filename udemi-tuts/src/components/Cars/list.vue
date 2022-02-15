<template>
    <div>
        <ul>
            <li v-for="car in cars" :key="car.model">
                <span>{{ car.brand}}</span>:{{car.model }}
            </li>
        </ul>
        <button @click="changeCar">Change car</button>
    </div>
</template>

<script>
export default {
    inject:['cars','changeCar'],
    data(){
        return {
        }
    }
}
</script>