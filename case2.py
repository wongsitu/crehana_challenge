

def is_valid(ip): 
    ip = ip.split(".") 
    if(len(ip) != 4):
        return False
    for i in ip: 
        if len(i) > 3 or int(i) < 0 or int(i) > 255: 
            return False
        if len(i) > 1 and int(i) == 0: 
            return False
        if len(i) > 1 and int(i) != 0 and i[0] == '0': 
            return False
    return True

print(is_valid('1.2.3.4'))

print(is_valid('123.45.67.89'))

print(is_valid('1.2.3'))

print(is_valid('1.2.3.4.5'))

print(is_valid('123.456.78.90'))

print(is_valid('123.045.067.089'))