var demo = new Vue({
    el:'#app',
    components:{
        CustomHeader:Vue.extend({
            template:'<div class="header">Header</div>'
        }),
        CustomMain:Vue.extend({
            template:'<div class="main">'+
            '<div style="margin: 10px">Main</div>'+
            '<custom-block></custom-block>'+
            '<custom-block></custom-block>'+
            '<custom-block></custom-block>'+
            '</div>',
            components:{
                CustomBlock: Vue.extend({
                    template:'<div class="block">B</div>'
                })
            }
        }),
        CustomAside:Vue.extend({
            template:'<div class="aside">Aside</div>'
        }),
    }
});

