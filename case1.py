weights = '56 65 74 100 99 68 86 180 90'

def sumOfDigit(n):  
    sum = 0
    while (n > 0):
        sum += n % 10
        n = n // 10 
    return sum

def takeFirst(elem):
    return elem[0]

def sortByWeight (string):
    if weights:
        weigths_hashmap = [] #sum_weigth : weigth
        weights_string = ''
        weights_array = string.split(' ')
        for weight in weights_array:
            weigths_hashmap.append((sumOfDigit(int(weight)),weight))
        weigths_hashmap.sort(key = takeFirst)
        for element in weigths_hashmap:
            weights_string += element[1] + ' '
        return weights_string
    else:
        return 'no weigths submitted'

print(sortByWeight(weights))