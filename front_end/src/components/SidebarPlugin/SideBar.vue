<template>
  <div class="sidebar"
       :data-color="backgroundColor">
    <div class="sidebar-wrapper">
      <div class="logo">
        <a href="#" class="simple-text logo__container">
            <div class="logo-img">
                <img src="img/bob.jpg" alt="">
            </div>
        </a>
          {{title}}
      </div>
      <slot name="content"></slot>
      <ul class="nav nav-main__links">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>
<script>

  export default {
    props: {
      title: {
        type: String,
        default: 'Brian2 GUI'
      },
      backgroundColor: {
        type: String,
        default: 'azure',
        validator: (value) => {
          let acceptedValues = ['', 'blue', 'azure', 'green', 'orange', 'red', 'purple', 'black']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      activeColor: {
        type: String,
        default: 'success',
        validator: (value) => {
          let acceptedValues = ['primary', 'info', 'success', 'warning', 'danger']
          return acceptedValues.indexOf(value) !== -1
        }
      },
    },
  }

</script>
<style>
  .sidebar .sidebar-wrapper {
    display: flex;
    flex-direction: column;
  }
 .sidebar .nav-main__links {
   flex: 1;
 }
 .sidebar .sidebar-wrapper .logo .logo__container {
   padding-left: 10px;
 }

 .logo{
   text-align: center;
   padding-top: 20%;
 }

 .logo__container{
   display: inherit !important;
   text-align: center;
 }
</style>
