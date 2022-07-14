<template>
    <tr class="table-success">
        <td>{{ order.id }}</td>
        <td>{{ order.table }}</td>
        <td>{{ order.servant }}</td>
        <td>{{ order.status }}</td>
        <td>{{ order.price }} AZN</td>
        <td>{{ order.date }}</td>
        <td>
            <button @click="preview(order.id)" type="button" class="btn btn-primary" data-bs-toggle="modal"
                :data-bs-target="'#orderInfoModal' + order.id">
                bax
            </button>
            <div class="modal fade" :id="'orderInfoModal' + order.id" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" style="max-width: 800px;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Sifariş olunan</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>{{ order.table }}</p>
                            <p>{{ order.servant }}</p>
                            <div class="mx-auto mt-5">
                                <table class="table table-info" style="border:2px solid black ;">
                                    <thead class="table-head" style="border:2px solid black;">
                                        <tr>
                                            <th scope="col">Say</th>
                                            <th scope="col">Məhsul adları</th>
                                            <th scope="col">Miqdar</th>
                                            <th scope="col">Məbləğ</th>
                                            <th scope="col">Sifariş saatı</th>
                                            <th scope="col">Gözləmə</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-body" style="border:1px solid black ;">
                                        <tr v-for="(item, index) in order.orderItems">
                                            <td>{{ index + 1 }}</td>
                                            <td>{{ item.name }}</td>
                                            <td>{{ item.amount }}</td>
                                            <td>{{ item.price }} AZN</td>
                                            <td>{{ item.date }}</td>
                                            <td>{{ item.status === 'pending' ? 'gozleyir' : 'catib' }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </td>
    </tr>
</template>

<script>

// import orderData from "../orders.json"
export default {
    name: 'OrderHolder',
    props: {
        order: {
            type: Object
        }
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        preview(orderId) {
            const selectedOrder = this.$store.state.orders.find(order => orderId === order.id)

            console.log(selectedOrder)
        }
    },
};
</script>

<style lang="scss" scoped>
</style>