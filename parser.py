import pandas as pd  
import numpy as np 

f_strings = []
auto_cargo = []
row_list = []

with open('strings.txt', 'r') as strings_txt: 
    strings = strings_txt.read()
strings = strings.split(',')
del strings[-1]
f_strings = []
for string in strings:
    string = string.split('.')
    #print(string)
    f_strings.append(string)

for row in f_strings:
    auto_cargo = []
    for ball in row[6]:
        ball = ball.split('/')
        auto_cargo.append(ball)
    if row[14] == 'traversal':
        climb_score = 15
    elif row[14] == 'high':
        climb_score = 10
    elif row[14] == 'middle':
        climb_score = 6
    elif row[14] == 'low':
        climb_score = 4
    else:
        climb_score = 0

    
    row_dict =  { 
    #Match Data
        'Scout ID' : row[0], #str
        'Team #' : row[1], #str
        'Match #' : row[2], #str
        'Alliance' : row[3], #str 
    #Positional Data (pt. 1) 
        'On Field' : bool(row[4]), #bool
        'Left Tarmac' : bool(row[5]), #bool
    #Fix below | Intentional placeholder    
        'Auto Cargo Collected': str(auto_cargo), #List 
    #Numerical Data
        'Auto Upper' : int(row[7]), #int
        'Auto Lower' : int(row[8]), #int
        'Teleop Upper' : int(row[9]), #int
        'Teleop Lower' : int(row[10]), #int
    #Positional Data (pt.2)
        'Scored Tarmac' : bool(row[11]), #bool
        'Scored LP' : bool(row[12]), #bool
        'Scored Other' : bool(row[13]), #bool
        'Climb State' : row[14], #str
        'Climb Score' : climb_score,
    #Other stuff
        'Normal Foul' : bool(row[15]), #bool
        'Tech Foul' : bool(row[16]), #bool
        'Yellow Card' : bool(row[17]), #bool
        'Red Card' : bool(row[18]), #bool
        'Opposing High' : int(row[19]), #int
        'Opposing Low' : int(row[20]), #int
        'Uncontrolled Crashing' : bool(row[21]), #bool
        'Broken Drive' : bool(row[22]), #bool
        'Played Defense' : bool(row[23])} #bool
    row_list.append(row_dict)
data = pd.DataFrame(row_list)
print(data)
