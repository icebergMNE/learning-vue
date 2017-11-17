Vue.component('message',{
    props:['title', 'body'],
    data(){
      return{
          visible:true
      }  
    },
    template: `
    <article class="message is-info" v-show="visible">
        <div class="message-header">
            <p>{{ title }}</p>
            <button class="delete" aria-label="delete" @click="closeMsg"></button>
        </div>
        <div class="message-body">
            {{ body }}
        </div>
    </article>
    `,
    methods:{
        closeMsg(){
            this.visible = false;
        }
    }
});

Vue.component('modal', {
    template:`
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <slot></slot>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
    `
})

new Vue({
    el:'#root',
    data:{
        showModal:false
    },
    methods:{
        displayModal(){
            this.showModal = true;
        },
        closeModal(){
            this.showModal = false;
        }
    }
});

// v-show prikayuje element ako mu je argument true