const MyNameApp = {
    data() {
        return {
            name: '',
            age: '',
            input_name: ''
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            console.log('Ok');
            this.name = this.input_name;
        }
    }
}

Vue.createApp(MyNameApp).mount('#app')