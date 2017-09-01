function convertToXML() {
    var content = document.getElementById("content").value;
    var arr = content.split("、");
    var result = "";
    for (var i in arr) {
        if (result != "") {
            result += "\n"
        }
        result += "<item>";
        result += arr[i];
        result += "</item>";
    }
    document.getElementById("result").innerText = result;
}