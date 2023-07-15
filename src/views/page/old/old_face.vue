<template>
  <div>
    <div >

      <img :src=url v-image-preview/>
    </div>
  </div>
</template>

<script>

export default{
  data(){
    var id1 = JSON.parse(localStorage.getItem("old_id"));
    console.log(id1)
    var image ="http://127.0.0.1:5001/faceCollectOld?id="+id1
    return{
      url:image

    }
  }
}
</script>