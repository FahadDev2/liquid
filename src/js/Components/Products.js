import axios from "axios"
import Swal from 'sweetalert2'


    let productForm = new Vue({
        el: ".shopify-product-form",
        data(){
            return{
                form:{
                    quantity: 1,
                    id: document.querySelector('#variant_id').value,
                }
            }
        },
    
        methods:{
    

            addToCart(){
               axios.post('/cart/add.js', this.form)
               .then( data => {
                
                   Swal.fire({
                    icon: 'success',
                    title: data.data.handle + ' Added to your cart',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  
               })
               .catch(error => {
                   console.log(error);
               })
            }


        }
    })
