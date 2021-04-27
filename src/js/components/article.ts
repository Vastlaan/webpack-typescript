interface Article{
categories: {
  created_at:string;
  id: number;
  name: string;
  updated_at:string;
  published_at: string;}[];
content: string;
created_at: string;
date: string;
id: number;
image: any;
published_at: string;
time: string;
title: string
updated_at:string;
}

export default async function renderArticles(){
  const response = await fetch('https://api.itcontext.nl/articles?_sort=id:DESC')
  const data: Article[] = await response.json()
  
  const root = document.querySelector('.info__services')
  
  data.map((each,i)=>{
    const article = document.createElement('article')

    if(i===1 || i===3){
      article.classList.add('badge-transparent')
    }
    article.classList.add('badge')

    const heading = document.createElement('h4')
    heading.innerHTML=each.title.substring(0,20)

    const para = document.createElement('p');
    para.innerHTML=each.content.substring(0,50)

    const link = document.createElement('a')
    link.href='/'
    if(i===1 || i===3){
      link.classList.add('badge-link-dark');
    }
    link.classList.add('badge-link');
    link.innerHTML=each.content.substring(0,8)
    const iconLink = document.createElement("i")
    iconLink.classList.add('bi')
    iconLink.classList.add('bi-arrow-right')
    link.appendChild(iconLink)

    // create icon
    const icon = document.createElement('i')
    icon.classList.add('badge-icon')
    icon.classList.add('bi')
    if(i===1 || i===3){
      icon.classList.add('bi-rulers')
    }else{
      icon.classList.add('bi-pencil')
    }
    
    article.appendChild(heading)
    article.appendChild(para)
    article.appendChild(link)
    article.appendChild(icon)

    root?.appendChild(
      article
    )
  })
  
}