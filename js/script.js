// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato

var app = new Vue({
    el: '#app',
    data: {
      menu: false,
      searchcontact: "",
      messtype: "",
      message: "",
      dates:"",
      lastmessage:"",
      cont:"0",
      answer: "answer",
      
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
        console.log(this.contacts[this.cont].visible);
        // this.contacts[this.cont].visible = false
        console.log("cont",this.contacts[this.cont]);
      },

    invio : function () {
      console.log(this.message);
      let testomex = this.contacts[this.cont].messages;
      let today = new Date();

        let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        let dateTime = date+' '+time;

      let obj = {
        date: dateTime,
              text: this.message,
              status: "sent",
      }

      testomex.push(obj)

        if (this.message.length > 0) {
          this.timer = setTimeout(function() {
          let objt = {

            date: dateTime,
                  text: "si, ok",
                  status: "recived",
          }
          testomex.push(objt)
        }, 3000);
        }
      
        this.message= ""
    },

    deleteThis : function (index) {
      console.log("ciao");
      this.contacts[this.cont].messages.splice(index, 1);
    },
    
    showMenu : function (index) {
      console.log(index);
      console.log("vero-falso", this.contacts[index].visible);

      // if (this.contacts[index].visible = true) {

      //   this.contacts[index].visible = false
        
      // }else if (this.contacts[index].visible = false) {
      //   console.log("cancello");
      //   this.contacts[index].visible = true
      // }
      this.contacts[index].visible = !this.contacts[index].visible
    }
    },

    
    created() {
      
      let numbero = this.contacts.filter((element) => {
        return element < 2;
      });
      
     
    }
    
  })