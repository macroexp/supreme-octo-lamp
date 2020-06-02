import requests, json, decimal, sys
from decimal import Decimal

appid = "98d6b9ebdd773ed18ee226d7b3010185" #actual api key


def tempconvert(arg):
    y = (float(arg) - 273.15) * 9/5 + 32
    #Kelvin to Fahrenheit
    return Decimal(y).quantize(Decimal("1"))
    #round to the ones place

while True:
    zip = input("Enter zip code: ")
    if not len(zip) == 5 and zip.isdigit(): #check for 5 digit zip code
        print("Sorry, that wasn't a valid zip code. Please try again.")
        continue
    else:
        break

#appid = "23" #crap testing api key for errors
url = (f'http://api.openweathermap.org/data/2.5/weather?zip={zip},us&appid={appid}')
response = requests.get(url)
try:
    r = response.json()
except ValueError:
    sys.exit("The API returned an unparseable response. Please try again.")

try:
    x = r["main"]
    z = r["weather"]
except KeyError:
    sys.exit("An error arose with the API. Please try again.")


if response:
    #response allows codes from 200 to 400
    pass
else:
    sys.exit("Something went wrong with the API.")

print(f'The temperature in {r["name"]} is {tempconvert(x["temp"])}\xb0 F. It feels like {tempconvert(x["feels_like"])}\xb0 F.')
print(f'Outside, it is currently {z[0]["description"]}.')

#print(response.content)
#print(response.status_code)