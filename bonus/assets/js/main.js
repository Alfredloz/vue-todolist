//TODO creare una todolist con Vue
//TODO la nostra todlist avrà di default delle task
//TODO utente può inserire nuove task 
//TODOclicccando sulla "X" l'utente può cancellare una task
//TODO Se non ci sono più task nella lista, mostrare un messaggio tipo "non ci sono task da fare"
//TODO per inserire la task: sia con un il tasto INVIO che con un CLICK!!!
// !NIENTE TASK VUOTE!
//!======BONUS======//
// L'utente vuole poter modificare una task giá inserita
// ma vuole anche poter indicare che la task é stata completata
// inoltre se una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate"
// ah non é finita, dice che quando cancella una task, non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
// si, l'utente é un rompi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino"

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
        done:[],
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
          for (let i = 0; i < this.taskList.length; i++) {
              const element = this.taskList[i];
              this.done.unshift(element);
          }
          console.log(this.done);
          console.log(this.taskList);
        }
    }


});
