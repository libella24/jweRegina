
let myList = [];

if(localStorage.getItem("product-list") != null) {
    myList = JSON.parse(localStorage.getItem("product_list"));
}

const addNewProduct = function () {
    let value = $("new-product").val();
    let filteredList = myList.filter(function(article){
        return article.toLowerCase().includes(value.toLowerCase());
    });

    if(!filteredList.length) {
        myList.push(value);
        Cookies.set("product_list", myList, {expires: 365 });
        localStorage.setItem("product_list", JSON.stringify(myList));
        prependNewProduct(myList.length - 1, myList[myList.length - 1]);
    }
    else {
        $("#new-product").val("");
    }
    $("#new-product").val("").focus();
};
$("#add-product").on("click", addNewProduct);
$("#new-product").on("keyup", function(e) {
    console.log(e.keyCode);
    if (e.keyCode == 13) {
        addNewProduct();
    }
});