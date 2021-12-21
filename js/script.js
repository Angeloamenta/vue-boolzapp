// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato

var app = new Vue({
    el: '#app',
    data: {
      messtype: "",
      messagex: "",
      dates:"",
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
        // userShow = this.contacts[index].messages[index].text;
        // console.log("log",this.contacts[index].messages[index]);
        // this.message = userShow
        // console.log(userShow);

        
         let contatto = this.contacts[index].messages;
           console.log("prova", contatto);
           let messagee = [];
           let date = [];
           for (let i = 0; i < contatto.length; i++) {
             const element = contatto[i];
             
             console.log("testo", element.text);
             messagee.push(element.text);
             this.messagex = messagee
             date.push(element.date);
             this.dates = date;
             console.log(index);
           }
           console.log("prova", messagee);
           console.log("date", date);
            this.cont = index;
           console.log(this.cont);

          //  this.contacts[index].visible = false;
      },
      // filtronome : function (index) {
      //   arrayfiltro = contacts.filter((contatto) => {
      //     if (this.contacts.name ==)
      //   })
      // }

    }
    
  })