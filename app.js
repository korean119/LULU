const contaitner = document.getElementById("root");
const ajax = new XMLHttpRequest();
const content = document.createElement("div");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONETENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

const store = {
  currentPage: 1,
};

function getData(url) {
  ajax.open("GET", url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

function newsFeed() {
  const newsFeed = getData(NEWS_URL);
  const newsList = [];

  newsList.push("<ul>");

  for (let i = 0; i < 10; i++) {
    newsList.push(`
  <li>
    <a href="#${newsFeed[i].id}">
    ${newsFeed[i].title} (${newsFeed[i].comments_count})
    </a>
  </li>
`);

    newsList.push("</ul>");
    newsList.pusg(
      '<div><a href="#/page/${store.currentPage}">다음 페이지</a></div>'
    );

    contaitner.innerHTML = newsList.join("");
  }
}

function newsDetail() {
  const id = location.hash.substr(1);
  const newsContent = getData(CONETENT_URL.replace("@id", id));

  contaitner.innerHTML = `
  <h1>${newsContent.title}</h1>

  <div>
    <a href="#">목록으로</a>
  </div>
  `;
}

function router() {
  const routePath = location.hash;

  if (routePath === "") {
    newsFeed();
  } else {
    newsDetail();
  }
}

window.addEventListener("hashchange", router);

router();
