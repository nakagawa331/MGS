function click_copy(){
    const get_url = document.getElementById("exampleFormControlTextarea1");
    const get_url_len = get_url.value.length;
    get_url.setSelectionRange(0,get_url_len);
    const bool = document.execCommand("Copy");
    if(bool){
        alert("urlのコピーに成功しました!");
    } else {
        alert("コピーに失敗しました");
    }
}
