//エラーチェック
'use strict';

//ToDoを選択状態にする
var element = document.getElementById('target');
var elements = element.List;
elements[0].checked = true;


//HTMLのパーツを指定して定数に代入
const input = document.querySelector('#section_1 input');
const button = document.querySelector('#section_1 button');
const list = document.querySelector('#section_2');
const list2 = document.querySelector('#section_3');


//"追加ボタン"のonclickイベント
button.onclick = function(e) {
  e.preventDefault();
  let myItem = input.value;

  //入力内容のチェック ⇒ 未入力 or スペースのみの場合
  if (!(document.getElementById('item').value.trim())) {
    alert('タスクを入力して下さい。');
    input.value = '';

  }else {
    input.value = '';

    //選択状態をチェック ⇒ "ToDo"の場合
    if (document.form1.List[0].checked) {

      const tableBody = document.getElementById('section_2');
      const tableRecord = document.createElement('tr');
      tableBody.appendChild(tableRecord);

      const trItem = document.createElement('tr');
      const tableData = document.createElement('td');
      const dltBtn = document.createElement('button');

      tableData.textContent = myItem;   //inputデータ内容
      trItem.appendChild(tableData);    //inputデータ作成
      dltBtn.textContent = '削除';      //ボタン名 = "削除"
      trItem.appendChild(dltBtn);       //削除ボタン作成
      list.appendChild(trItem);         //リスト一覧へ追加

      //"削除ボタン"のonclickイベント ⇒ 項目を一覧から削除
      dltBtn.onclick = function() {
        list.removeChild(trItem);
      }

      input.focus(); //inputboxを選択
    }

    //選択状態をチェック ⇒ "Not ToDo"の場合
    if (document.form1.List[1].checked) {

      const tableBody = document.getElementById('section_3');
      const tableRecord = document.createElement('tr');
      tableBody.appendChild(tableRecord);

      const trItem = document.createElement('tr');
      const tableData = document.createElement('td');
      const dltBtn = document.createElement('button');

      tableData.textContent = myItem;   //inputデータ内容
      trItem.appendChild(tableData);    //inputデータ作成
      dltBtn.textContent = '削除';      //ボタン名 = "削除"
      trItem.appendChild(dltBtn);       //削除ボタン作成
      list2.appendChild(trItem);        //リスト一覧へ追加

      //"削除ボタン"のonclickイベント ⇒ 項目を一覧から削除
      dltBtn.onclick = function() {
        list2.removeChild(trItem);
      }

      input.focus();
    }
  }
}
