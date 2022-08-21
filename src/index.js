import "./styles.css";

const onclickAdd = () => {
  document.getElementById("addButton").addEventListener("click", () => {
    // 入力値取得
    const example = document.getElementById("text").value;
    addYetList(example);
    //入力値削除
    document.getElementById("text").value = "";
  });
};

//実行
document.getElementById("addButton").addEventListener("click", onclickAdd());

// 削除関数
const deleteItem = (target) => {
  document.getElementById("yet_list").removeChild(target);
};

//未完了リストに追加関数
const addYetList = (example) => {
  // listを取得
  const ul = document.getElementById("yet_list");
  // liを追加
  const li = document.createElement("li");
  const item = document.createElement("p");
  // 完了ボタン作成
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "完了";
  // 削除ボタン作成
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";

  //完了ボタン機能
  doneBtn.addEventListener("click", () => {
    // 完了リストに追加するアイテム取得
    //押されたボタンの親li取得
    const doneTarget = doneBtn.parentNode;
    //追加されるli作成
    const addItem = document.createElement("li");
    // 追加されるアイテム名作成
    const item_title = document.createElement("p");
    //pタグの値代入
    item_title.innerText = doneTarget.firstElementChild.innerText;
    addItem.appendChild(item_title);

    const DoneList = document.getElementById("done_list");
    // 戻すボタン作成
    const reBtn = document.createElement("button");
    reBtn.innerText = "戻す";
    //完了リストに追加
    addItem.appendChild(reBtn);
    DoneList.appendChild(addItem);
    // 未完了リストから削除
    deleteItem(doneTarget);

    // 戻すボタンの機能追加
    reBtn.addEventListener("click", () => {
      //押された戻るボタンの親タグ(li)を完了リストから削除
      const deleteTarget = reBtn.parentNode;
      // テキスト取得
      const yetitem = deleteTarget.firstElementChild.innerText;
      document.getElementById("done_list").removeChild(deleteTarget);
      // 未完了リストに追加
      addYetList(yetitem);
    });
  });
  // 削除ボタン機能追加
  deleteBtn.addEventListener("click", () => {
    const deleteTarget = deleteBtn.parentNode;
    deleteItem(deleteTarget);
  });
  // 未完了リストに追加
  item.innerText = example;
  ul.appendChild(li);
  li.appendChild(item);
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
};
