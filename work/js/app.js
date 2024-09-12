document.addEventListener('DOMContentLoaded', function () {
  fetch('data/product.json')
    //JSONデータ取得
    .then(response => response.json())
    .then(items => {
      //productTableを取得
      const product = document.getElementById('productTable');
      //各アイテムを取得してテーブルに追加する
      items.forEach(item => {
        const rows = document.getElementBy('tr');
        //商品情報を入れる
        const listItem = document.createElement('th');
        listItem.textContent = 'ID:${product.id},商品名:${product.name},価格:${product.price},説明:${product.explanation}';
        productTable.appendChild(listItem);
    })

    //失敗した時の処理
    .catch(error =>
      console.log('エラー:', error));
});