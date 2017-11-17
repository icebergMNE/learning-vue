Vue.component('task-list', {
    template:'<ul><task v-for="task in tasks" :key="task.id">{{ task.description }}</task></ul>',
    data(){
        return{
            tasks:[
                { description:'Go to the store', completed:false, id:1},
                { description:'Go to the store 1', completed:true, id:2},
                { description:'Go to the store 2', completed:false, id:3},
                { description:'Go to the store 3', completed:false, id:4},
                { description:'Go to the store 4', completed:false, id:5}
            ]
        }
    }
});


Vue.component('task', {
    template:'<li><slot></slot></li>',
    // data(){
    //     return {
    //         message:'najs'
    //     }
    // }
});

new Vue({
    el:'#root',

});