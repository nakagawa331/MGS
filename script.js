window.onload = () => {
  let affriate_code = localStorage.getItem("affriate_code");

  if(affriate_code != null){
    let ele = document.getElementById("affriate_code");
    ele.value = affriate_code;
  }

}

function set_aff_code(url,code){
  return url + "?aff=" + code;
}

//変換ボタンをクリックした場合
function click_change(){
  let affriate_code = document.getElementById("affriate_code").value;

  if(affriate_code == ""){
    alert("空文字は許可されていません。");
    return false;
  }

  let product_url = document.getElementById("product_url").value;

  let url = set_aff_code(product_url,affriate_code);

  add_text(url);

  let ele = document.getElementById("exampleFormControlTextarea1");
  select(ele);
  
  let check = document.getElementById("check");

  if(check.checked){
    localStorage.setItem("affriate_code",affriate_code);
  }

}

function text_select(ele){
  ele.select();
}

select = (ele) => {
  ele.select();
};



function add_text(url){
  let textarea = document.getElementById("exampleFormControlTextarea1");
  textarea.value = url;
}
