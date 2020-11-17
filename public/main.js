console.log("我是main.js")

// getCSS.onclick = () => {
//     //1.创建http request对象
//     let request = new XMLHttpRequest()
// //2.调用 open 方法
//     request.open("GET", "/style.css")
//
// //3.监听成功 or 失败返回
//     request.onload = () => {
//         //监听成功，获取返回的css
//         let css = request.response
//         //创建style标签
//         let style = document.createElement("style")
//         //将返回的css作为style的内容
//         style.innerHTML = css
//         //插到头里
//         document.head.appendChild(style)
//         //console.log("成功了")
//     }
//
//     request.onerror = () => {
//         console.log("失败了")
//     }
// //4.发送请求
//     request.send()
// }

getJS.onclick = () => {
    let request = new XMLHttpRequest()
    request.open("GET", "/2.js")

    request.onload = () => {
        let response = request.response
        let script = document.createElement("script")
        script.innerText = response
        document.body.appendChild(script)
    }

    request.onerror = () => {
        console.log("请求失败")
    }
    request.send()
}

getHtml.onclick = () => {
    let request = new XMLHttpRequest()
    request.open("GET", "/3.html")
    request.onload = () => {
        let resp = request.response
        let div = document.createElement("div")
        div.innerHTML = resp
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log("error")
    }
    request.send()
}

getCSS.onclick = () => {
    let request = new XMLHttpRequest()
    request.open("GET", "/style.css")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                console.log("下载完成")
                let resp = request.response
                let style = document.createElement("style")
                style.innerHTML = resp
                document.head.appendChild(style)
            }else{
                alert("加载失败")
            }
        }
    }
    request.send()
}

getJSON.onclick = ()=>{
    let request = new XMLHttpRequest()
    request.open("GET","/5.json")
    request.onreadystatechange = ()=>{
        if (request.readyState === 4 && request.status === 200){
            let object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    }
    request.send()
}

let n = 1
getPage.onclick = ()=>{
    let req = new XMLHttpRequest()
    req.open("GET",`/page${n+1}.json`)
    req.onreadystatechange = ()=>{
        if (req.readyState === 4 && req.status === 200){
            let arr = JSON.parse(req.response)
            arr.forEach(item=>{
                let li = document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n+=1
        }else{
            console.log(req.status)
        }
    }
    req.send()
}


getXML.onclick = ()=>{
    let req = new XMLHttpRequest()
    req.open("GET","/4.xml")
    req.onreadystatechange = ()=>{
        if (req.readyState === 4 && req.status === 200){
            let dom = req.responseXML
            let text = dom.getElementsByTagName("warning")[0].textContent
            console.log(text.trim())
        }
    }
    req.send()
}


