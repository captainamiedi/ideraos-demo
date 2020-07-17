<template>
  <div :style="{ backgroundImage: `url(${image})` }" class="background">
    <div class="content">
      <h1>{{name.name}}</h1>
      <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>
    </div>
  </div>
</template>

<script>
import image from '../assets/image/chocolate.jpg'
export default {
    data() {
        return {
            image,
            name: ''
        }
    },
    methods: {
        getDetails() {
           const data =  localStorage.getItem('user-details')
           this.name = JSON.parse(data)
        }
    },
    mounted () {
        this.getDetails();
    },
};
</script>

<style lang="scss" scoped>
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 50%;
}

.background {
    height: 530px
}

.content {
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}
</style>