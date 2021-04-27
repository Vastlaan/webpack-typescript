// animation helpers
function selectElement(selector: string){
  const target = document.querySelector(selector)
  const content = target?.innerHTML || ""
  return {content, target}
}
export function splitText(selector: string){
  const {content, target} = selectElement(selector)
  const wordsArray = content.split(' ')
  let chars: HTMLSpanElement[] = []
  const words = wordsArray.map(word=>{
    const arrayOfDomChars = word.split('').map(char=>{
      const wrapper = document.createElement('span')
      wrapper.style.display='inline-block'
      wrapper.innerHTML=char
      chars.push(wrapper)
      return wrapper
    })
    const wrapper = document.createElement('div')
    wrapper.style.display='inline-block'
    wrapper.style.marginRight = '5px'
    arrayOfDomChars.forEach(charEl=>{
      wrapper.appendChild(charEl)
    })
    return wrapper
  })

  
  if(target){
    target.innerHTML=""
    words.forEach(word=>{
      target.appendChild(word)
    })
  }

  return {
    words,
    chars
  }
}