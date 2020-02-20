<template>
    <div>
        <b-button v-b-modal="'modal'+i._id">{{i.name}}</b-button>
        <b-modal :id="'modal' + i._id" :title="i.name">
            <p> <span> Brian2 equation : </span></p> 
            <pre><code>{{i.formula}}</code></pre>
            <p> <span>Description :</span> {{i.info}}</p>
        </b-modal>
    </div>
</template>

<script>
export default {
 props: ['i', 'icon']
}
</script>

<style scoped>
button{
  border: none;
  width: 100%;
  color: white;
  text-align: left;
}

span{
    font-weight: bold;
}

pre code{
    overflow-wrap: anywhere;
}
</style>