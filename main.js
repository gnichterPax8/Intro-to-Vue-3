const app = Vue.createApp({
    data(){
        return {
            cart: 0,
            product: 'socks',
            image: './assets/images/socks_green.jpg',
            invin: 0,
            dets: ['50% cotton', '30% wool', '20% polyester', 'and 100% not real'],
            Vair: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 2235, color: 'blue', image: ' ./assets/images/socks_blue.jpg'},
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(VairImage) {
            this.image = VairImage
        }
    }
})
