function click_copy(){
    const get_url = document.getElementById("exampleFormControlTextarea1");
    get_url.select();
    document.execCommand("Copy");
}
