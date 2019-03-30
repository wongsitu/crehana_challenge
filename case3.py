
object1 = { 'a': [{ 'b': { 'c': 3 } }] }

object2 =  {'a': { 'b': { 'c': 3 } } }

def getIn(obj, path, defaultValue):
    path = path.split('.')
    for i in range(0,len(path)):
        try:
            elem = path[i]
            obj = obj[elem]
        except:
            return defaultValue
    return obj

print(getIn(object1, 'a.b.c', 'default'))

print(getIn(object2, 'a.b.c', 5))

print(getIn(object2, 'a.b.d', 5))
