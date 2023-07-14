//lvl106
total = ''
function sevenBoom(a){
    total = 'There is no 7 in array.'
    for(let i of a){
        if(String(i).includes('7')){
            total = 'Boom!'
        }
    }
    return total
}
console.log(sevenBoom([1, 2, 3, 7, 9])) //Boom!
console.log(sevenBoom([1, 2])) //There is no 7 in array.
console.log(sevenBoom([2, 97, 4])) //Boom!
//lvl107
let most = 0
function mostExpensive(a){
    for(let i in a){
        if(a[i] > most){
            most = a[i]
        }
    }
    for(let i in a){
        if(a[i] === most){
            total = i
        }
    }
    return `The most expensive one is ${total}.`
}
console.log(mostExpensive({n1: 1500, n2: 4300})) //The most expensive one is n2.
//lvl108
let l = 0
function getInfo(a){
    total = []
    for(let i of a){
        most = Math.max.apply(null, i.notes)
        l = total.length
        total[l] = {}
        total[l].name = i.name
        total[l].topNote = most
    }
    return total
}
console.log(getInfo([
    {name: 'Turgut', notes: [5, 4, 5]},
    {name: 'Ruslan', notes: [4, 2, 3]}
])) //[{name: 'Turgut', topNote: 5}, {name: 'Ruslan', topNote: 4}]
//lvl109
let sp = []
let letters = []
function mapLetters(a){
    total = {}
    letters = []
    sp = a.split('')
    for(let i in sp){
        if(!letters.includes(sp[i])){
            letters[letters.length] = sp[i]
            total[sp[i]] = []
            total[sp[i]].push(i)
        }else{
            total[sp[i]].push(i)
        }
    }
    return total
}
console.log(mapLetters('dodo')) //{d: [0, 2], o: [1, 3]}
console.log(mapLetters('froggy')) //{f: [0], r: [1], o: [2], g: [3, 4], y: [5]}
//lvl110
let money = 0
function items(a, b){
    total = []
    money = Number(b.split('').filter(id => id !== '$' && id !== ',').join(''))
    for(let i in a){
        if(Number(a[i].split('').filter(id => id !== '$' && id !== ',').join('')) <= money){
            total[total.length] = i
        }
    }
    return total.sort()
}
console.log(items({milk: '3$', lemonade: '1$', snack: '2$'}, '2$')) //['lemonade', 'snack']
//Тесты
// 1)
//создайте новый элемент и добавьте его в блок ниже с помощью append
{/* <div id='block'></div> */}
let p = document.createElement('p')
p.innerHTML = 'Hi!'
document.getElementById('block').append(p)

// 2)
//создайте новый элемент и добавьте его в блок ниже с помощью insertBefore
{/* <div id='block'></div> */}
let h3 = document.createElement('h3')
h3.innerHTML = 'Hello!'
document.getElementById('block').insertBefore(h3, p)

// 3)
//удалите тег 'p' из скрипта ниже с помощью DOM метода
{/* <div id='block'>
    <p>Some text</p>
</div> */}
//document.querySelector('#block p').remove()

// 4)
//замените тег 'p' на <i>Hello World</i>
{/* <div id='block'>
    <p>Some text</p>
</div> */}
// let i = document.createElement('i')
// i.innerHTML = 'Hello World'
// let p0 = document.querySelector('#block p')
// let block = document.getElementById('block')
// block.replaceChild(i, p0)

// 5)
//выведите в консоли коллекцию всех элементов с классом .block
console.log(document.getElementsByClassName('block'))

// 6)
//выведите в консоли первый элемент из ранее созданной коллекции
console.log(document.getElementsByClassName('block')[0])
// 7)
//выведите в консоли количество элементов в ранее созданной коллекции
console.log(document.getElementsByClassName('block').length)

// 8)
//в чем разница между nodeList и HtmlCollection
//В nodeList - узлы документа, а в HtmlCollection - сами элементы. В nodeList доступ к элементам можно получить только по их порядковому номеру, а в HTMLCollection - по их имени, идентификатору или номеру индекса.