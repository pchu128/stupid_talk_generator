// random function
function random(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define random sentence function
function makeSentence(option) {

  // define required data
  const task = {
    engineer: ['加個按鈕', '加個新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加個班', '賺大錢', '寫個企劃書', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // create a object to store selected phrases
  let collection = []

  if (option === '1') {
    collection.push('工程師', `${random(task.engineer)}`, `${random(phrase)}`)
  }

  if (option === '2') {
    collection.push('設計師', `${random(task.designer)}`, `${random(phrase)}`)
  }

  if (option === '3') {
    collection.push('創業家', `${random(task.entrepreneur)}`, `${random(phrase)}`)
  }

  if (!option) {
    collection.push('請先點選一個職業')
  }

  // combine phrases and return result
  let sentence = collection.join('，') + '。'
  // for (i = 0; i < collection.length; i++) {
  //   sentence += collection[i]
  // }

  // return result
  return sentence
}

// export the function
module.exports = makeSentence