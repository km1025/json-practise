document.addEventListener('DOMContentLoaded', function () {
  fetch('data/product.json')
    //JSONデータ取得
    .then(response => response.json())
    .then(items => {
      //productTableを取得
      const productTable = document.getElementById('productTable');
      items.forEach(item => {
        //trの作成
        const listItem = document.createElement('tr');
        //tdを作成してデータを追加
        listItem.innerHTML =
        `<td>${item.id}</td>
         <td>${item.name}</td>
         <td>${item.price}</td>
         <td>${item.explanation}</td>`;
        //trをproductTableに追加
        productTable.appendChild(listItem);
      });
    })

    //失敗した時の処理
    .catch(error => {
      console.log('エラー:', error);
    });
});
