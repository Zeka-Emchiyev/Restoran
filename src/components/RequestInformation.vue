<template>
    <div class="container">
        <h2 class="text-center"> Sifariş məlumatları</h2>
        <div class="mx-auto mt-3">
            <table class="table table-danger" style="border:2px solid black ;">
                <thead>
                    <tr>
                        <th scope="col">S/S</th>
                        <th scope="col">Masa</th>
                        <th scope="col">Xidmətçi</th>
                        <th scope="col">Status</th>
                        <th scope="col">Məbləğ</th>
                        <th scope="col">Tarix</th>
                        <th scope="col">Ətraflı</th>
                    </tr>
                </thead>
                <tbody class="table-body" style="border:1px solid black ;">
                    <OrderHolder v-for="order in $store.state.orders" :order="order" :key="order.id" />
                </tbody>
            </table>
        </div>
        <div class="row">
            <h2 class="col-6">Cəmi məbləğ</h2>
            <h2 class="col-6">{{ ordersSumAmount }} Azn</h2>
        </div>
        <div class="container">
            <h3>Sifariş yaratmaq </h3>
            <router-link to="/orders/orderId" class="btn btn-success">Sifariş</router-link>
        </div>


    </div>
</template>

<script>

import OrderHolder from './OrderHolder.vue';
export default {
    name: "DERSRequestInformation",
    data() {
        return {
        };
    },

    computed: {
        ordersSumAmount() {
            let sum = 0
            if (this.$store.state.orders && this.$store.state.orders.length > 0) {
                this.$store.state.orders.forEach((item) => {
                    sum += item.price
                })
                return sum.toFixed(1)
            } else return sum
        }
    },
    methods: {},
    components: { OrderHolder }
};
</script>

<style lang="scss" scoped>
</style>