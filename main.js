// Random ================

const category = Array.from(document.querySelectorAll('input[name=category]'));
const taste = Array.from(document.querySelectorAll('input[name=taste]'));
const randomCoctail = document.getElementById("display");
const allCocktailsArr = [...unforgattables, ...classic, ...newEra].sort(SortArray);

function SortArray (x, y) {
    return x.name.localeCompare(y.name)
};

document.getElementById('random_btn').addEventListener('click', () => {
    function getCheckedArr(arr, filled) {
        for (let i = 0; i < arr.length; i++) {
            let check = arr[i]
            if(check.checked) {
                let newArr = allCocktailsArr.filter(item => item[filled] == check.value);
                return newArr;
            };
        };
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
                randomCoctail.innerHTML = `There are no ${noDrink} cocktails in this category`;
            } 
        }
    }
    
});

// List of all cocktails ====================

const ul = document.getElementById('result_item');

const allCoctailsShow = () => {
    for(let i = 0; i < allCocktailsArr.length; i++) {
        let li = document.createElement('li')
        ul.appendChild(li)
        li.innerHTML = allCocktailsArr[i].name
    };
};

allCoctailsShow();

// Filter ==================

const base = Array.from(document.querySelectorAll('input[name=main_ingredients]'));
const volume = Array.from(document.querySelectorAll('input[name=volume]'));
const time = Array.from(document.querySelectorAll('input[name=time]'));

const allCategories = [...base, ...volume, ...time];

for(let i = 0; i < allCategories.length; i++) {
    let checkItems = allCategories[i];

    // Array sorting function by selected categories

    checkItems.onchange = function() {
        const check = (arr, filled) => {
            for (let i = 0; i < arr.length; i++) {
                let check = arr[i]
                if(arr[0].checked) {
                    return allCocktailsArr;
                } else if(check.checked) {
                    const checkedArr = allCocktailsArr.filter(item => item[filled] == check.value);
                    return checkedArr;
                }
            }
        };
    
    const mainCheckArr = check(base, 'base');
    const volumeCheckArr = check(volume, 'volume');
    const timeCheckArr = check(time, 'time');
       
    // Sorting function for selected categories
       
    const endResult = () => {
        const set = new Set();
        for (const { volume } of volumeCheckArr) set.add(volume);
        for (const { time } of timeCheckArr) set.add(time);
    
        const intersection = mainCheckArr.filter(({ volume }) => set.has(volume)).filter(({ time }) => set.has(time));
        return intersection;
        
    };

    // Show end result

    const showResult = endResult();


    if(ul.children.length > 0) {
            ul.innerHTML = ''
        } 
        
        for(let i = 0; i < showResult.length; i++) {
            let li = document.createElement('li')
            ul.appendChild(li)
            li.innerHTML = showResult[i].name
        }
    }
};
