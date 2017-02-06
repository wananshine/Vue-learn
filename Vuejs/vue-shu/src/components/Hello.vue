<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h1>管理书籍</h1>
      <div id="app">
        <table class="table table-hover">
          <thead>
            <tr>
              <th class="text-right">序号</th>
              <th class="text-right">书名</th>
              <th class="text-right">作者</th>
              <th class="text-right">价格</th>
              <th class="text-right">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in books">
              <td class="text-right">{{ book.id }}</td>
              <td class="text-right">{{ book.name }}</td>
              <td class="text-right">{{ book.author }}</td>
              <td class="text-right">{{ book.price }}</td>
              <template v-if="book.id%2==0">
                <td class="text-right">
                  <button type="button" class="btn btn-success" @click="delBook(book)">删除</button>
                </td>
              </template>
              <template v-else>
                <td class="text-right">
                  <button type="button" class="btn btn-danger" @click="delBook(book)">删除</button>
                </td>
              </template>
            </tr>
            <tr>
              <td class="text-right" colspan="5">
                <h4>总计： {{ sum }}</h4>
              </td>
            </tr>
          </tbody>
        </table>
        <div id="add_book">
          <legend>添加书籍</legend>
          <div class="form-group">
            <label>书名</label>
            <input type="text" class="form-control" v-model="book.name" name="">
          </div>
          <div class="form-group">
            <label>作者</label>
            <input type="text" class="form-control" v-model="book.author" name="">
          </div>
          <div class="form-group">
            <label>价格</label>
            <input type="text" class="form-control" v-model="book.price" name="">
          </div>
          <button class="btn btn-primary btn-block" @click="addBook()">添加</button>
        </div>
      </div>
    </div>
  </div>
</template>
 <script type="text/javascript">
//   export default{
//     data(){
//       return{
//         sortparam: '',
//         book:{
//           id: '0',
//           author: '',
//           name: '',
//           price: ''
//         },
//         books:[
//           {
//             id: '1',
//             author: '1',
//             name: '1',
//             price: '1'
//           },
//           {
//             id: '2',
//             author: '2',
//             name: '2',
//             price: '2'
//           },
//           {
//             id: '3',
//             author: '3',
//             name: '3',
//             price: '3'
//           },
//           {
//             id: '4',
//             author: '4',
//             name: '4',
//             price: '4'
//           },
//           {
//             id: '5',
//             author: '5',
//             name: '5',
//             price: '5'
//           }
//         ]
//       }
//     },
//     computed: {
//       sum: function(){
//         var result = 0;
//         for (var i = 0; i < this.books.length; i++) {
//           result += Number(this.books[i].price)
//         }
//         return result;
//       }
//     },
//     methods: {
//       addBook: function(){
//         this.book.id = this.books.length + 1;
//         this.books.push(this.book);
//         this.book = '';
//       },
//       delBook: function(book){
//         this.books.splice(book,1);
//       },
//       sortBy: function(sortparam){
//         this.sortparam = sortparam
//       }
//     }
//   }



new Vue({
//   ready:function(){
//     this.$http.get('  http://192.168.1.105:8080/book.json',function(data){
//       this.$set('books',data);
//     }).error(function(data,status,request){
//       console.log('fail' + status + ',' + request )
//     })
//   },
data:{
books: [{
            id: 1,
            author: '曹雪芹',
            name: '红楼梦',
            price: 32.0
        }, {
            id: 2,
            author: '施耐庵',
            name: '水浒传',
            price: 30.0
        }, {
            id: '3',
            author: '罗贯中',
            name: '三国演义',
            price: 24.0
        }, {
            id: 4,
            author: '吴承恩',
            name: '西游记',
            price: 20.0
        }]
}
})


 </script>
