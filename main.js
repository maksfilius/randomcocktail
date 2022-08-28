<<<<<<< HEAD
// Random ====================

const category = Array.from(document.querySelectorAll('input[name=category]'));
const taste = Array.from(document.querySelectorAll('input[name=taste]'));
const randomCoctail = document.getElementById("display");

// Sorting cocktails alphabetically

function SortArray (x, y) {
    return x.name.localeCompare(y.name)
};

const allCocktailsArr = [...unforgattables, ...classic, ...newEra].sort(SortArray);

// Array sorting function by selected categories
=======
// Random

const category = Array.from(document.querySelectorAll('input[name=category]'))
const taste = Array.from(document.querySelectorAll('input[name=taste]'))

const randomCoctail = document.getElementById("display")

const allCocktailsArr = [...unforgattables, ...classics, ...newEra].sort(SortArray)
function SortArray (x, y) {
    return x.name.localeCompare(y.name)
}

console.log(allCocktailsArr)
>>>>>>> 3b5595a6512a9af96e353215810f9c67360cca7a

document.getElementById('random_btn').addEventListener('click', () => {
    function getCheckedArr(arr, filled) {
        for (let i = 0; i < arr.length; i++) {
            let check = arr[i]
            if(check.checked) {
<<<<<<< HEAD
                let newArr = allCocktailsArr.filter(item => item[filled] == check.value);
                return newArr;
            }
        }
    };

    const categoryArr = getCheckedArr(category, 'category');
    const tasteArr = getCheckedArr(taste, 'taste');


    const result = (categoryArr, tasteArr) => {
    return categoryArr.filter(item => item.taste == tasteArr[0].taste)
    };

    document.getElementById("dots").style.display = "none";
    const getCocktail = result(categoryArr, tasteArr);

    if(getCocktail.length > 0) {
        document.getElementById("your_cocktail").style.display = "block";
        randomCoctail.innerHTML = getCocktail[Math.floor(Math.random() * getCocktail.length)].name;
    } else {
        for (let i = 0; i < taste.length; i++) {
            let check = taste[i]
            if(check.checked) {
                let noDrink = check.value;
                document.getElementById("your_cocktail").style.display = "none";
                randomCoctail.innerHTML = `There are no ${noDrink} cocktail in this category`;
            } 
        }
    }
    
});

// List of all cocktails ====================

const ul = document.getElementById('result_item');
=======
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
>>>>>>> 3b5595a6512a9af96e353215810f9c67360cca7a

const allCoctailsShow = () => {
    for(let i = 0; i < allCocktailsArr.length; i++) {
        let li = document.createElement('li')
        ul.appendChild(li)
        li.innerHTML = allCocktailsArr[i].name
    }
<<<<<<< HEAD
};

allCoctailsShow();

// Filter ==================

const base = Array.from(document.querySelectorAll('input[name=main_ingredients]'));
const volume = Array.from(document.querySelectorAll('input[name=volume]'));
const time = Array.from(document.querySelectorAll('input[name=time]'));

const allCategories = [...base, ...volume, ...time];
=======
}

allCoctailsShow();

// Filter

const base = Array.from(document.querySelectorAll('input[name=main_ingredients]'))
const volume = Array.from(document.querySelectorAll('input[name=volume]'))
const time = Array.from(document.querySelectorAll('input[name=time]'))

const allCategories = [...base, ...volume, ...time]
>>>>>>> 3b5595a6512a9af96e353215810f9c67360cca7a

for(let i = 0; i < allCategories.length; i++) {
    let checkItems = allCategories[i]

<<<<<<< HEAD
    // Array sorting function by selected categories

=======
>>>>>>> 3b5595a6512a9af96e353215810f9c67360cca7a
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
<<<<<<< HEAD
        };
    
    const mainCheckArr = check(base, 'base');
    const volumeCheckArr = check(volume, 'volume');
    const timeCheckArr = check(time, 'time');
       
    // Sorting function for selected categories
=======
        }
    
    const mainCheckArr = check(base, 'base')
    const volumeCheckArr = check(volume, 'volume')
    const timeCheckArr = check(time, 'time') 
       
    //Show result
>>>>>>> 3b5595a6512a9af96e353215810f9c67360cca7a

    const endResult = () => {
        const set = new Set();
        for (const { volume } of volumeCheckArr) set.add(volume);
<<<<<<< HEAD
        for (const { time } of timeCheckArr) set.add(time);
=======
        console.log(set)
        for (const { time } of timeCheckArr) set.add(time);
        console.log(set)
>>>>>>> 3b5595a6512a9af96e353215810f9c67360cca7a
    
        const intersection = mainCheckArr.filter(({ volume }) => set.has(volume)).filter(({ time }) => set.has(time));
        return intersection
        
<<<<<<< HEAD
    };

    // Show end result

    const showResult = endResult();
=======
    }

    const showResult = endResult()
>>>>>>> 3b5595a6512a9af96e353215810f9c67360cca7a

    if(ul.children.length > 0) {
            ul.innerHTML = ''
        } 
        
        for(let i = 0; i < showResult.length; i++) {
            let li = document.createElement('li')
            ul.appendChild(li)
            li.innerHTML = showResult[i].name
        }
    }
<<<<<<< HEAD
};
=======
}
>>>>>>> 3b5595a6512a9af96e353215810f9c67360cca7a
