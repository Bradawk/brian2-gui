<template>
  <div>
    <!-- <div>
      <b-button v-b-toggle.input variant="primary"> <i class="nc-icon nc-puzzle-10"></i> Input Stimuli</b-button>
      <b-collapse id="input" class="mt-2">
        qsd
      </b-collapse>
    </div> -->

    <div class="toggle-button">
      <b-button v-b-toggle.synapse variant="light"> <i class="nc-icon nc-preferences-circle-rotate"></i> Synapse
        <i style="float: right;" v-bind:class="{active: isActive}" class="nc-icon nc-stre-right"></i>
      </b-button>
      <b-collapse id="synapse" class="mt-2">
        <div v-for="i in synapses" v-bind:key="i._id">
          <modal :i="i"></modal>
        </div>
      </b-collapse>
    </div>


    <div class="toggle-button">
      <b-button v-on:click='rotate' v-b-toggle.neuron variant="light"> 
        <i class="nc-icon  nc-layers-3"></i> Neuron 
        <i style="float: right;" v-bind:class="{active: isActive}" class="nc-icon nc-stre-right"></i>
      </b-button>
      <b-collapse id="neuron" class="mt-2">
        <div v-for="i in neurons" v-bind:key="i._id">
            <modal :i="i" :icon="'nc-layers-3'"></modal>
        </div>
      </b-collapse>
    </div>
  </div>
</template>
<script>
  import Modal from '../layout/Modal.vue'
  export default {
    components:{
      Modal
    },
    data(){
      return{
        synapses: [],
        neurons: [],
        isActive: false
      }
    },
    methods: {
      rotate: function(){
        this.isActive=!this.isActive
      }
    },
    created(){
      this.$http.get(process.env.VUE_APP_API_URL+'/synapse')
          .then(response => {
            this.synapses = response.data;
        })
        .catch((error)=> {
            this.error = error;
        });
      this.$http.get(process.env.VUE_APP_API_URL+'/neuron')
          .then(response => {
            this.neurons = response.data;
        })
        .catch((error)=> {
            this.error = error;
        });
    },
  }
</script>
<style scoped>
.toggle-button button{
  border: none;
  width: 100%;
  color: white;
  text-align: left;
}

.active {
    -moz-transition: all .5s linear;
    -webkit-transition: all .5s linear;
    transition: all .5s linear;
}
.active {
    -moz-transform:rotate(90deg);
    -webkit-transform:rotate(90deg);
    transform:rotate(90deg);
}
</style>
