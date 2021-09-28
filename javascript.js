let articles = document.getElementById("articles")
let articleList = document.createElement("ol")
articleList.setAttribute("id", "articleList")
articles.append(articleList)

for(let i = 0; i < 30; i++) {
    let newArticle = document.createElement("li")

    //Arrow
    let arrowIcon = document.createElement("a")
    arrowIcon.setAttribute("href", "#")
    arrowIcon.setAttribute("id", "arrow")
    arrowIcon.textContent = "▲"
    newArticle.append(arrowIcon)

    //A tag with h2 inside
    let articleHeading = document.createElement("h2")
    articleHeading.textContent = "The Speed of Time"
    let articleHeadingLink = document.createElement("a")
    articleHeadingLink.setAttribute("href", "#")
    articleHeadingLink.append(articleHeading)
    newArticle.append(articleHeadingLink)

    //Link to right of h2
    let articleLink = document.createElement("a")
    articleLink.textContent = "(brendangregg.com)"
    articleLink.setAttribute("href", "#")
    newArticle.append(articleLink)

    //P tag below h2 with some spans
    let articleInfo = document.createElement("p")
    articleInfo.textContent = "390 points by"

    //Four links within articleInfo
    let space = document.createElement("span")
    space.textContent = " "
    articleInfo.append(space)

    let username = document.createElement("a")
    username.setAttribute("href", "#")
    username.textContent = "tuananh"
    articleInfo.append(username)

    let space2 = document.createElement("span")
    space2.textContent = " "
    articleInfo.append(space2)

    let postedTime = document.createElement("a")
    postedTime.setAttribute("href", "#")
    postedTime.textContent = "4 hours ago"
    articleInfo.append(postedTime)

    let space3 = document.createElement("span")
    space3.textContent = " | "
    articleInfo.append(space3)

    let hide = document.createElement("a")
    hide.setAttribute("href", "#")
    hide.textContent = "hide"
    articleInfo.append(hide)

    let space4 = document.createElement("span")
    space4.textContent = " | "
    articleInfo.append(space4)

    let comments = document.createElement("a")
    comments.setAttribute("href", "#")
    comments.textContent = "58 comments"
    articleInfo.append(comments)

    newArticle.append(articleInfo)

    articleList.append(newArticle)
}