<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offsset-3">
          <form id="changeRepoForm" @submit.prevent='changeRepo()' class="form-line">
            <div class="form-group">
              <label for="fullRepoName">full Repo Name</label>
              <input type="text" name="fullRepoName" v-model="fullRepoName" class="form-control">
            </div>
            <input type="submit" class="btn btn-default" value="Get repo filesystem!" name="">
          </form>
        </div>
      </div>
      <div class="row">
        <table class="table">
          <thead>
            <tr >
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="library in libraries">
              <td>{{ library.sname }}</td>
              <td>{{ library.szz }}</td>
              <td>{{ library.price }}</td>
              <td>{{ library.cbs }}</td>
            </tr>
          </tbody>
        </table>
        <form class="group">
          <input type="text" name="" v-model="newlibrary.sname">
          <input type="text" name="" v-model="newlibrary.szz">
          <input type="text" name="" v-model="newlibrary.price">
          <input type="text" name="" v-model="newlibrary.cbs">
          <button class="btn btn-primary" @click="add()">add</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      fullRepoName: '',
      username: '',
      repo: '',
      libraries: [
        { sname: 'qqq', szz: 'qqq', price: 'qqq', cbs: 'qqq' },
        { sname: 'qqq', szz: 'qqq', price: 'qqq', cbs: 'qqq' }, 
        { sname: 'qqq', szz: 'qqq', price: 'qqq', cbs: 'qqq' },
        { sname: 'qqq', szz: 'qqq', price: 'qqq', cbs: 'qqq' }
      ],
      newlibrary: { sname: '', szz: '', price: '', cbs: '' }
    }
  },

  methods: {
    changeRepo(){
      const splitData = this.fullRepoName.split('/');
      this.username = splitData[0];
      this.repo = splitData[1];


      console.group("Vue Data");
      console.log("fullRepoName:", this.fullRepoName);
      console.log("username:", this.username);
      console.log("repo:", this.repo);
      console.groupEnd("Vue Data");
    },

    add(){
      this.libraries.push(this.newlibrary);
      this.newlibrary = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
