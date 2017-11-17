window.VueEvent = new Vue();


Vue.component('coupon', {
    template: '<input placeholder="enter your coupon code" @blur="onCouponApplied">',
    methods:{
        onCouponApplied(){
            // slanje emittin nekog eventa koji zelimo da cuje root element
            // this.$emit('coupon-was-applied');
            // mogu se poslati i neki podaci sa emit

            VueEvent.$emit('coupon-was-applied');
        }
    }
});


new Vue({
    el:'#root',
    
    created(){
        VueEvent.$on('coupon-was-applied', () => console.log('coupon applied'));
    }
});

