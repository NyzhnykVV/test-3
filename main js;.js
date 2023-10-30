const num = 94;
let str = num.toString();

let str1 = '';
let str2 = '';
let result = '';

if (num > 19 && num <= 99){
    switch (str[0]){
        case '2': str1 = 'Двадцять '; break;
        case '3': str1 = 'Тридцять '; break;
        case '4': str1 = 'Сорок '; break;
        case '5': str1 = "П'ятдесят" ; break;
        case '6': str1 = 'Шістдесят '; break;
        case '7': str1 = 'Сімедсять '; break;
        case '8': str1 = 'Вісімдесять '; break;
        case '9': str1 = "Дев'яносто" ; break;
    }
    switch (str[1]){
        case '1': str2 = ' Один'; break;
        case '2': str2 = ' Два'; break;
        case '3': str2 = ' Три'; break;
        case '4': str2 = ' Чотири'; break;
        case '5': str2 = " П'ять"; break ;
        case '6': str2 = ' Шість'; break;
        case '7': str2 = ' Сім'; break;
        case '8': str2 = ' Вісім'; break;
        case '9': str2 = " Дев'ять"; break;
    }
}   else if (num === 100){
        str1 = 'One ';
        str2 = 'hundred';
}   else if (num >= 0 && num <= 9) {
        switch (str[0]){
            case '1': str1 = 'Один'; break;
        case '2': str1 = ' Два'; break;
        case '3': str1 = ' Три'; break;
        case '4': str1 = ' Чотири'; break;
        case '5': str1 = " П'ять"; break ;
        case '6': str1 = ' Шість'; break;
        case '7': str1 = ' Сім'; break;
        case '8': str1 = ' Вісім'; break;
        case '9': str1 = " Дев'ять"; break;
    }  
}   else if (num >= 10 && num <= 19) {
        switch (str){
            case '10': str1 = 'Десять'; break;
            case '11': str1 = 'Одинадцять'; break;
            case '12': str1 = 'Дванадцять'; break;
            case '13': str1 = 'Тринадцять'; break;
            case '14': str1 = 'Чотирнадцять'; break;
            case '15': str1 = "П'ятнадцять"; break;
            case '16': str1 = 'Шістнадцять'; break;
            case '17': str1 = 'Сімнадцять'; break;
            case '18': str1 = 'Вісімнадцять'; break;
            case '19': str1 = "Дев'ятнадцять"; break;
        }
}          
    else {
        str1 = 'Будь ласка введіть номер від 1 до 100';
}

result = str1 + str2;
console.log(result);