<template>
    <div class="container">


        <h3>Sifariş verin</h3>

        <button v-if="!isOrderCreated" type="button" class="btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            Sifariş
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Sifariş talonu</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <select v-model="order.table" class="form-select" aria-label="Default select example">
                                <option value="" disabled selected>Masanı seçin</option>
                                <option v-for="table in $store.state.tables">{{ table.name }}</option>
                            </select>
                        </div>

                        <div>
                            <select v-model="order.servant" class="form-select" aria-label="Default select example">
                                <option value="" disabled selected>Xidmət göstərəcək ofisantlar</option>
                                <option v-for="servant in $store.state.servants">{{ servant.name }}</option>

                            </select>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="createOrder()" type="button" class="btn btn-primary">Sifariş yarat</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isOrderCreated">
            <div class="form-group col-8 mt-4">
                <label for="">Məhsul adı</label>
                <select @change="setSelecetedMenuItem" class="form-select mb-3" aria-label="Default select example">
                    <option disabled selected value="">Seçin</option>
                    <option v-for="item in $store.state.menuItems" :value="item.id">{{ item.name }}</option>

                </select>
                <div class="row">
                    <div class="col-6">
                        <label for="">Miqdar</label>
                        <input v-model="amount" type="number" placeholder="any" class="form-control" min="1" max="10"
                            value="1">
                    </div>
                    <div class="col-6">
                        <label for="">Qiymət</label>
                        <p class="b">{{ sumPrice }}</p>
                    </div>
                </div>
                <button class="btn btn-success mt-3" @click="addItemIntoOrder">Əlavə et</button>
            </div>



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
            <div class="row">
                <div class="col-6">
                    <h3 class="text-center">Cəmi Məbləğ</h3>
                </div>
                <div class="col-6">
                    <h3>{{ sumOfOrder }} AZN</h3>
                </div>
            </div>
            <div>
                <button @click="submitOrderItems" class="btn btn-primary">
                    Sifarişi təsdiqlə
                </button>
            </div>
        </div>
    </div>
</template>

<script>
// import bootstrap from 'bootstrap';
export default {
    name: 'OrderId',

    data() {
        return {
            order: {
                table: '',
                servant: '',
                price: 0,
                orderItems: [],
                status: false,
                date: null
            },
            isOrderCreated: false,
            amount: 1,
            selectedMenuItem: null,
        };
    },

    mounted() {
        this.OrderModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    },
    created() {
        // this.getOrder()

    },
    computed: {
        sumPrice() {
            if (this.selectedMenuItem != null && this.amount) {
                return this.amount * this.selectedMenuItem.price
            }
            return 0
        },
        sumOfOrder() {
            let sum = 0
            if (this.order.orderItems && this.order.orderItems.length > 0) {
                this.order.orderItems.forEach((item) => {
                    sum += item.price
                })
                return sum.toFixed(1)
            } else return sum
        }
    },

    methods: {
        createOrder() {
            let date = new Date()
            this.OrderModal.hide()
            this.isOrderCreated = true
            this.order.date = date.getHours() + ':' + date.getMinutes()
            this.order.id = this.$store.state.orders.length + 1
            this.$store.commit('createOrder', this.order)

        },
        setSelecetedMenuItem(event) {
            const menuItemId = parseInt(event.target.value)
            const selectedItem = this.$store.state.menuItems.find(item => item.id === menuItemId)
            this.selectedMenuItem = selectedItem
        },
        addItemIntoOrder() {
            let date = new Date()
            const orderItem = {
                ...this.selectedMenuItem,
                amount: this.amount,
                price: this.sumPrice,
                date: date.getHours() + ':' + date.getMinutes(),
                status: 'pending'
            }
            this.order.orderItems.push(orderItem)
        },
        submitOrderItems() {
            console.log(this.sumOfOrder)
            this.order.price = parseInt(this.sumOfOrder)
            this.$store.commit('submitOrderItems', this.order)
            this.$router.push('/orders')


        }

    },
};
</script>

<style lang="scss" scoped>
</style>