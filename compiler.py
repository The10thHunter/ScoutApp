import data
import pandas as pd

auto_upper = List.Numerical.auto_upper
auto_lower = List.Numerical.auto_lower
teleop_upper = List.Numerical.teleop_upper
teleop_lower = List.Numerical.teleop_lower
entries = len(teleop_lower)
total_score = (2*(sum(auto_upper) + sum(auto_lower)) + (sum(teleop_upper) + sum(teleop_lower)))

#Percentage shortcut func
def percent(*boolvar): 
    boolvar = lst(boolvar)
    for number in boolvar:
        percentage = (str(round(((100 * sum(boolvar)) / entries), 2)) + '%')
    #May need to indent return statement
    return percentage
    #Callable in init.py for cleanup of calculations
#Taxi
left_tar = List.Positional.left_tarmac_auto
on_field = List.Positional.on_field
def rate(*boolvar):
    x = 0
    for truth in boolvar:
        if truth == True:
            x = x+1
        else: 
            pass
    rate = percent(x / entries) 
    return rate
left_tar = rate(left_tar)
on_field = rate(on_field)

if on_field <= left_tar: 
    taxi = 'Error: Data Invalid, check for invalid On Field / Tarmac responses'
else: 
    taxi = left_tar
print(taxi)


