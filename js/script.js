// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato

var app = new Vue({
  el: '#app',
  data: {
    zoom: false,
    arrayRisposte: ["va bene", "come preferisci", "no, grazie", "direi di no"],
    mode: false,
    showw: true,
    array1: [],
    array2: [],
    timers: 0,
    splash: true,
    menu: false,
    searchcontact: "",
    messtype: "",
    message: "",
    dates:"",
    lastmessage:"",
    cont: null,
    answer: "answer",
    currentmessage : null,
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
    
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ]
  },
  methods : {

    select : function (index){
      this.cont = index;
    },

  invio : function () {

    if (this.message.trim().length <= 0 || this.cont == null) {
      console.log("scrivi");
    }else {
      let arrayq = this.arrayRisposte;
      console.log("risposte", arrayq);
      let random = Math.floor((Math.random() * arrayq.length -1) + 1);
      console.log("random", random);
      console.log("random-array", arrayq[random]);
      let testomex = this.contacts[this.cont].messages;
      let today = new Date();
        let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;
  
      let obj = 
      {
        date: dateTime,
        text: this.message,
        status: "sent",
      }
      testomex.push(obj)
  
      this.array1.push(obj)
  
      
      
      console.log("1",this.timers);
      if (this.message.length > 0) {
        let arrayWriting = this.array1
        this.timer = setTimeout(function() {
          
          let objt = 
          {
            date: dateTime,
            text: arrayq[random],
            status: "recived",
          }
          
          console.log("2", this.timers);
         testomex.push(objt)
         arrayWriting.pop(obj)
        }, 3000);
        }
         console.log("3", this.timers);
        this.message= "";
    }

      
  },

  stascrivendo : function () {
    this.timer = setTimeout (function () {
      console.log("ciao");
      console.log("null",this.timers);
      this.timers = 0;
      
    }, 4000);
  },

  deleteThis : function (index) {
    console.log("ciao");
    this.contacts[this.cont].messages.splice(index, 1);
    
  },
  
  deleteAll : function () {
    this.contacts[this.cont].messages.splice(0, this.contacts[this.cont].messages.length);
  },

  showMenu : function (index) {

    this.currentmessage = index;
    console.log(index);
  },
  
  hideMenu : function (index) {
    this.currentmessage = index;
      this.currentmessage = null
    },
  
    chiudiChat : function () {
      this.cont= null;
      this.showw = true
    },

    hideShoww : function () {
      this.showw = true
    },

    deleteChat : function () {
    console.log(this.contacts[this.cont]);
    // this.contacts.splice(this.cont, 1)
    console.log(this.contacts);
    this.contacts.splice(this.cont, 1);
    this.cont= null;
    }
  
   },

  
  created() {
    console.log(this.splash);
    let arraySlpash = this.array2
    let obb = {}
    this.timer = setTimeout (function () {
      console.log("splash");
      arraySlpash.push(obb)
      
      
    }, 0000);
    
    
    console.log(this.cont);
   
  }
  
})