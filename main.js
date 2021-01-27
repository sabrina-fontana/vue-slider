var app = new Vue({
el: '#root',
data: {
  // valore iniziale -> indice 0
  imageIndex: 0,
  images: [
    'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
    'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
    'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
    'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
  ]
},
methods: {
  slideLeft: function() {
    // se l'indice dell'immagine visualizzata è maggiore di 0 allora sottrai 1, altrimenti l'indice torna al suo valore massimo nell'array (ossia 3)
    if (this.imageIndex > 0) {
      this.imageIndex -= 1;
    } else {
      this.imageIndex = this.images.length - 1;
    }
  },
  slideRight: function() {
    // se l'indice dell'immagine visualizzata è minore dell'indice massimo dell'array (ossia 3) allora somma 1, altrimenti l'indice torna a 0
    if (this.imageIndex < this.images.length - 1) {
      this.imageIndex += 1;
    } else {
      this.imageIndex = 0;
    }
  },
  dotActive: function(index) {
    if (index === this.imageIndex) {
      return 'fas fa-circle active'
    } else {
      return 'fas fa-circle'
    }
  },
  dotClick: function() {
    this.imageIndex = index;
}
});
Vue.config.devtools = true;
