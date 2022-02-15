<template>
    <div>
        <app-header></app-header>
            <div class="container">
                <comp-cars></comp-cars>
                <!-- <h3>Parent</h3>
                <ul>
                    <li v-for="car in cars" :key="car.model">
                        <span>{{ car.brand}}</span>:{{car.model }}
                    </li>
                </ul>
                <button @click="changeCar">Change car</button> -->
            </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import compCars from './components/Cars';
    export default {
        components:{
            compCars
        },
        data(){
            return {
                cars:[
                    {model:'F9',brand:'Ferrari'},
                    {model:'911',brand:'Porsche'},
                    {model:'Tipo',brand:'Fiat'}
                ]
            }
        },
        provide(){
            return {
                cars: this.cars,
                changeCar: this.changeCar
            }
        },
        methods:{
            changeCar(){
                this.cars[0].brand = 'Renault'
            }
        }
    }
</script>

<style>
    body {
        padding: 0;
        margin:0;
        font-family: 'Roboto', sans-serif;;
    }
    .container{
        min-height: 84vh;
        box-sizing: border-box;
        padding: 20px;
    }
</style>