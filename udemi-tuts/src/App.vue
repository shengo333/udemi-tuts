<template>
    <div>
        <app-header></app-header>
            <div class="container">
                <comp-cars></comp-cars>
                <comp-brands>
                    <div>
                        unnamed stuff
                    </div>
                    <template v-slot:brands>
                        <ul>
                            <li v-for="(brand,index) in brands" :key="index">
                                {{ brand }}
                            </li>
                        </ul>
                    </template>
                    <template v-slot:other>
                        <div>some other rcontent</div>    
                    </template>
                    <strong>Default slot</strong>

                </comp-brands>
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
    import compBrands from './components/Cars/brand.vue'
    export default {
        components:{
            compCars,
            compBrands
        },
        data(){
            return {
                brands:['Mazda','Honda','Renault'],
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