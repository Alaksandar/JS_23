let url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
    .then((response) => { 
        return response.json();
    })
    .then((json) => {
        let arr = [];
        for(let i = 0; i < 20; i++){
            if(json && json[i]){
            arr = arr.concat(json[i]);
        }}
        
        arr.sort((a, b) => b.title.length - a.title.length);
        console.log(arr);
        return arr;
    })
    
let formElem = document.querySelector("#formElem");

formElem.onsubmit = async function postQuery(e) {

    e.preventDefault();

    let user = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };
    let response = await fetch(
        'https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(user)
        }
    );
    
    let result = await response.json();
    console.log("result ", result);
    if (result) {
        let div = document.createElement("div");
        document.body.append(div);
        div.innerHTML = `<span>${result.title}</span> <span>${result.body}</span>`
    }
}