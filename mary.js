function count(str) {
    str = str.replace(/,/g, "")
    str = str.toLowerCase()
    str = str.split(" ")
    // console.log(str)
    var arr = str.sort(),
        len = arr.length;
    var obj = {};

    for (var i = 0; i < len; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    return obj;
}


text = "Mary had a little lamb \
Little lamb, little lamb \
Mary had a little lamb \
Its fleece was white as snow \
And everywhere that Mary went \
Mary went, Mary went \
Everywhere that Mary went \
The lamb was sure to go \
He followed her to school one day \
School one day, school one day \
He followed her to school one day \
Which was against the rule \
It made the children laugh and play \
Laugh and play, laugh and play \
It made the children laugh and play \
To see a lamb at school"

var re = count(text)
// console.log(re)

console.log("----sort by word----")
for (var i in re) {
    console.log(i, ":", re[i]);
}

console.log("----sort by count----")
var objArr = [];
for (var key in re) {
    let item = { word: key, count: re[key] };
    objArr.push(item);
}

function sortId(a, b) {
    return b.count - a.count;
}
objArr.sort(sortId);
// console.log(objArr);
for (var i in objArr) {
    console.log(objArr[i]);
}
