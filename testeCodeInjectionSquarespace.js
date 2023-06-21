navFolderTitle = Array.from(document.getElementsByClassName("Header-nav-folder-title"))
childTitle = Array.from(document.getElementsByClassName("Header-nav-folder-item"))
navTitle = Array.from(document.getElementsByClassName("Header-nav-item"))

listaPalavras = ["teste1","PRODUITS","TESTE3","falaPortugues"]
listaPalavrasFolderTitle = ["fragrances","language"]
listaPalavrasFolderChildren = ["flor","flor","fresco","fruta","caracol","tropical","cheiro de flor", "sasonal", "força da natureza", "ingles","ingles","portugues"]
if(window.location.pathname.includes("french")) {
	navTitle.map((el,index)=> {return el.text = listaPalavras[index]})
  navFolderTitle.map((el,index)=> {return el.innerText = listaPalavrasFolderTitle[index]})
  childTitle.map((el,index)=> {return el.innerText = listaPalavrasFolderChildren[index]})
}