// Random

const category = Array.from(document.querySelectorAll('input[name=category]'))
const taste = Array.from(document.querySelectorAll('input[name=taste]'))

const randomCoctail = document.getElementById("display")

const allCocktailsArr = [...unforgattables, ...classics, ...newEra].sort(SortArray)
function SortArray (x, y) {
    return x.name.localeCompare(y.name)
}

console.log(allCocktailsArr)

document.getElementById('random_btn').addEventListener('click', () => {
    function getCheckedArr(arr, filled) {
        for (let i = 0; i < arr.length; i++) {
            let check = arr[i]
            if(check.checked) {
                let newArr3 = allCocktailsArr.filter(item => item[filled] == check.value)
                return newArr3;
            }
        }
    }

const categoryArr = getCheckedArr(category, 'category')
console.log(categoryArr)
const tasteArr = getCheckedArr(taste, 'taste')
console.log(tasteArr[0].taste)


const result = (categoryArr, tasteArr) => {
    return categoryArr.filter(item => item.taste == tasteArr[0].taste)
}

console.log(result(categoryArr, tasteArr))


    let getCocktail = result(categoryArr, tasteArr)
    randomCoctail.innerHTML = 'Your coctail is ' + getCocktail[Math.floor(Math.random() * getCocktail.length)].name
});

// Show all cocktails

const ul = document.getElementById('result_item')

const allCoctailsShow = () => {
    for(let i = 0; i < allCocktailsArr.length; i++) {
        let li = document.createElement('li')
        ul.appendChild(li)
        li.innerHTML = allCocktailsArr[i].name
    }
}

allCoctailsShow();

// Filter

const base = Array.from(document.querySelectorAll('input[name=main_ingredients]'))
const volume = Array.from(document.querySelectorAll('input[name=volume]'))
const time = Array.from(document.querySelectorAll('input[name=time]'))

const allCategories = [...base, ...volume, ...time]

for(let i = 0; i < allCategories.length; i++) {
    let checkItems = allCategories[i]

    checkItems.onchange = function() {
        const check = (arr, filled) => {
            for (let i = 0; i < arr.length; i++) {
                let check = arr[i]
                if(arr[0].checked) {
                    return allCocktailsArr;
                } else if(check.checked) {
                    const checkedArr = allCocktailsArr.filter(item => item[filled] == check.value)
                    return checkedArr;
                }
            }
        }
    
    const mainCheckArr = check(base, 'base')
    const volumeCheckArr = check(volume, 'volume')
    const timeCheckArr = check(time, 'time') 
       
    //Show result

    const endResult = () => {
        const set = new Set();
        for (const { volume } of volumeCheckArr) set.add(volume);
        console.log(set)
        for (const { time } of timeCheckArr) set.add(time);
        console.log(set)
    
        const intersection = mainCheckArr.filter(({ volume }) => set.has(volume)).filter(({ time }) => set.has(time));
        return intersection
        
    }

    const showResult = endResult()

    if(ul.children.length > 0) {
            ul.innerHTML = ''
        } 
        
        for(let i = 0; i < showResult.length; i++) {
            let li = document.createElement('li')
            ul.appendChild(li)
            li.innerHTML = showResult[i].name
        }
    }
}
