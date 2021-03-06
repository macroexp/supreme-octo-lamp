class Food:
    type = "unknown"
    def __init__(self, name, color):
        self.name = name
        self.color = color
    def __str__(self):
        return "Generic Food: %s" % self.name.capitalize() + "; " + self.name.capitalize() + " color: %s " % self.color.capitalize()  
    def __repr__(self):
        return self.__str__()

class Green(Food):
    type = "veggie"
    def __str__(self):
        return "Green vegatable: %s " % self.name.capitalize() + "; " + self.name.capitalize() + " color: %s " % self.color.capitalize()

class RootVeg(Food):
    type = "veggie"
    def __str__(self):
        return "Root vegatable: %s " % self.name.capitalize() + "; " + self.name.capitalize() + " color: %s " % self.color.capitalize()
        
class Poultry(Food):
    type = "meat"
    def __str__(self):
        return "Poultry: %s " % self.name.capitalize() + "; " + self.name.capitalize() + " color: %s " % self.color.capitalize()

class RedMeat(Food):
    type = "meat"
    def __str__(self):
        return "Red Meat: %s " % self.name.capitalize() + "; " + self.name.capitalize() + " color: %s " % self.color.capitalize()

foods = [Food("Bread", "Brown"), RedMeat("Steak", "Dark Brown"), Poultry("Chicken Thighs", "Charred"), RootVeg("Potatoes", "Red"), Green("Broccoli", "Green")]
fooddictionary = {food.name: food for food in foods}
#print(fooddictionary)

def judgeMeal(plate):
    foods = [fooddictionary[food] for food in plate]
    veg = sum(each.type == "veggie" or each.type == "unknown" for each in foods)
    meat = sum(each.type == "meat" for each in foods)
    judgement = "good"
    if (meat > veg):
        judgement = "bad"
    return judgement

plate = ["Chicken Thighs", "Steak", "Potatoes", "Broccoli", "Steak"]
#plate = input("Input your meal:")
judgement = judgeMeal(plate)
print(judgement)