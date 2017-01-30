
function abs(num){
    if (num < 0)
        return -num
    else
        return num
}

function sqrt(num) {

    if(num < 0 )
        return NaN

    if (num == 0)
        return 0

    //calculate for postive integer
    var min = 0;
    var max = num < 1 ? 1 : num;

    var guess = (min + max)/2;

    var miss = abs(guess * guess - num);

    while (miss > 0.0000000001){

        if ( guess*guess > num ){
            max = guess
        }else{
            min = guess
        }

        guess = (min + max)/2
        miss = abs(guess*guess - num)
    }

    return guess;

}

