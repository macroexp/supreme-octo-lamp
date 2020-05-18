import requests, json, decimal
from decimal import Decimal

def tempconvert(arg):
    y = (int(arg) - 273.15) * 9/5 + 32
    return Decimal(y).quantize(Decimal("1"))

zip = input("Enter zip code:")
appid = "98d6b9ebdd773ed18ee226d7b3010185"
url = ("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=" + appid)
response = requests.get(url)
r = response.json()
x = r["main"]

TemperatureK = x["temp"]
print("Temperature = " + str(tempconvert(TemperatureK)) + " F")

#print(response.content)
