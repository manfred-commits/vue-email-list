// Esercizio di oggi: Vue Email List
// nome repo: vue-email-list
// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app= new Vue({

    el:'#root',
    data:{
        emails:[],
    },
    mounted(){

        // the while cycle doesn't work, it gives a infinite loop
        // while(this.emailList.length<10){
            
        //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        //     .then((response)=> {            
        //     console.log(response);
        //     this.emailList.push(response.data.response);
        //     console.log(this.emailList);
        //     });
        // }
        for(let i=this.emails.length;i<10;i++){
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=> {            
            console.log(response);
            this.emails.push(response.data.response);
            console.log(this.emails);
            });
        }
    },
    methods:{

    }
});