function isPalindrome(str) {
    if(str.value != '') {
        for(let i = 0; i < str.length/2; i++) {
            if(str[i] == str[str.length - i -1]) {
                return 1;
            }
            else return 0;
        }
    }
    else return 0;
}

function printResultPalindrome() {
    let s = document.getElementById('word').value;
    if(isPalindrome(s) == true) {
        document.getElementById('result').innerHTML = 'Đối xứng';
    } else {
        document.getElementById('result').innerHTML = 'Không đối xứng';
    }
}

