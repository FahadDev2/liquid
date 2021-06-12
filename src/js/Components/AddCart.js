// import axios from "axios"
// import Swal from 'sweetalert2'


//     let addCarts = new Vue({
//         el: "#vueClick" ,
//         data(){
//             return{
//                 items: 
//                     {
//                         quantity: document.getElementById('Quantity').value,
//                         id: document.getElementById('v_id').value
//                     }
                
//             }
//         },


//         methods:{
    

//             addToCarts(id,quantity){
               
//                 this.items.id = document.getElementById('v_id').value;
//                 this.items.quantity = document.getElementById('Quantity').value;
//                 console.log(this.items.id + " / " + this.items.quantity);
//                axios.post('/cart/add.js', this.items )
//                .then( data => {
//                    console.log(data);
               
//                    Swal.fire({
//                     icon: 'success',
//                     title: data.data.handle + ' Added to your cart',
//                     showConfirmButton: false,
//                     timer: 2500
//                   })
                  
//                })
//                .catch(error => {
//                    console.log(error);
//                    Swal.fire({
//                     icon: 'success',
//                     title: error.message,
//                     showConfirmButton: false,
//                     timer: 2500
//                   })
//                })
//             }


//         }
//     })

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
