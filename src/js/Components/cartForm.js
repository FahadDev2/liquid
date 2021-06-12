import axios from "axios"
import Swal from 'sweetalert2'


    let cartForm = new Vue({
        el: ".cart_form",
        delimiters: ['${', '}'],
        data(){
            return {
              cart:null
            }
        },
    



        created(){
            this.getCart();
           
        },


        methods:{
    
            updateCart(){
                let result = this.cart.items.reduce(
                    (accumulator, target) => ({ ...accumulator, [target.variant_id] : target.quantity }),
                {});


                axios.post('/cart/update.js', { updates : result })
                .then( response => {
                    Swal.fire(
                    {
                        icon: 'success',
                        title:' Your Cart Updated',
                        showConfirmButton: false,
                        timer: 1500
                    }
                   
                      );
                 
                })
                .catch( err => {
                    
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href="">Why do I have this issue?</a>'
                      })
                    

                })


            },
            getCart(){
                axios.get('/cart.js')
                .then( response => {
                 
                    this.cart = response.data;
                })
                .catch( err => {
                    console.log(err);
                })
            }


          
            


        }
    })
