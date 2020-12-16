//TODO creare una todolist con Vue
//TODO la nostra todlist avrà di default delle task
//TODO utente può inserire nuove task 
//TODOclicccando sulla "X" l'utente può cancellare una task
//TODO Se non ci sono più task nella lista, mostrare un messaggio tipo "non ci sono task da fare"
//TODO per inserire la task: sia con un il tasto INVIO che con un CLICK!!!
// !NIENTE TASK VUOTE!


// Creazione istanza Vue
let app = new Vue({
    el: '#app',
    data:{
        // array di task esistenti
        taskList: [
            'Testa di rame',
            'Crotalo ceraste',
            'Mocassino acquatico',
            "l'incantatore di serpenti"
        ],
        toDo: '',
        img: './assets/img/beatrix.jpg'
    },
    methods:{
        insertTask(){
            //condizione della lunghezza della stringa
           if (this.toDo.length >= 3) {
            this.taskList.push(this.toDo);
            console.log(this.taskList);
            this.toDo = '';
           } else {
               alert('devi inserire una Task di almeno 3 lettere');
           }
        },
        //cancellare task a scelta
        cancelTask(i){
            
          this.$delete(this.taskList, i);
        }
    }
});
