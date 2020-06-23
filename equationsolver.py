import math, scipy, numpy
from scipy.integrate import quad
#quad computes single integral.
#baseline using scipy.integrate. using to check my code

def integrand(x):
    return x*2 
#input function here

#having trouble with taking inputs for functions. feels like would take a while to get that working. 

lowbound = int(input("Define lower limit: "))
hibound = int(input("Define upper limit: "))

ans, err = quad(integrand, lowbound, hibound)
print(ans)
