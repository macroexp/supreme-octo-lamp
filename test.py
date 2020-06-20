class Food:
    type = "unknown"
    def __init__(self, name, color):
        self.name = name
        self.color = color
    def __str__(self):
        #print self.name + " color: " + self.color 
        return("Generic Food: %s" % self.name) 
    def __repr__(self):
        return self.__str__()

class Green(Food):
    type = "veggie"
    def __str__(self):
        #print("Green vegatable: %s " % self.name.capitalize())
        return "Green vegatable: %s " % self.name.capitalize() + "; " + self.name.capitalize() + " color: %s " % self.color.capitalize()

class RootVeg(Food):
    type = "veggie"
    def __str__(self):
        #print("Root vegatable: %s " % self.name.capitalize())
        return "Root vegatable: %s " % self.name.capitalize() + "; " + self.name.capitalize() + " color: %s " % self.color.capitalize()
        
class Poultry(Food):
    type = "meat"
    def __str__(self):
        #print("Poultry: %s " % self.name.capitalize())
        return "Poultry: %s " % self.name.capitalize() + "; " + self.name.capitalize() + " color: %s " % self.color.capitalize()

class RedMeat(Food):
    type = "meat"
    def __str__(self):
        #print("Red Meat: %s " % self.name.capitalize())
        return "Red Meat: %s " % self.name.capitalize() + "; " + self.name.capitalize() + " color: %s " % self.color.capitalize()

dictionary = [Food("Bread", "Brown"), RedMeat("Steak", "Dark Brown"), Poultry("Chicken Thighs", "Charred"), RootVeg("Potatoes", "Red"), Green("Broccoli", "Green")]
print(dictionary)