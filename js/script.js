// Esercizio di oggi: Vue Email List
// nome repo: vue-email-list
// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.
// bonus bonus
// cancellazione/aggiunta di un elemento dall'array

const app= new Vue({

    el:'#root',
    data:{
        emails:[],
        counter:0,
    },
    mounted(){

        // the while cycle doesn't work, without a counter, because of the asynchronous nature of axios
        
        while(this.counter<10){
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=> {            
                
                this.emails.push(response.data.response);
            });
            this.counter++;
            console.log(this.emails.length);
        } 
        console.log(this.emails);

        // for(let i=this.emails.length;i<10;i++){
            
        //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        //     .then((response)=> {            
            //     console.log(response);
            //     this.emails.push(response.data.response);
            //     console.log(this.emails);
        //     });
        // }
    },
    methods:{
        // this method deletes an email from the array emails
        deleteEmail: function(index){
            console.log(index);
            this.emails.splice(index, 1);
        },
        
        // this method add an email to the array emails, with a new call to the API

        addEmail: function(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=> {            
                
                this.emails.push(response.data.response);
            });
        },
    }
});