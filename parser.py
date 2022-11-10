import pandas as pd  
import numpy as np 

string_error = "String Error, data invalid: "
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
    print(string)
    f_strings.append(string)
    print(f_strings)
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

    if row[4] == 'yes':
        on_field = True
    elif row[4] == 'no':
        on_field = False
    else:
        print(string_error + "On Field")
        print(row)
        exit()

    if row[5] == 'yes':
        left_tarmac = True
    elif row[5] == 'no':
        left_tarmac = False
    else:
        print(string_error + "Left Tarmac")
        print(row)
        exit()

    if row[11] == 't':
        scored_tar = True
    elif row[11] == 'f':
        scored_tar = False
    else: 
        print(string_error + "Scored Tarmac")
        print(row)
        exit()

    if row[12] == 't':
        scored_lp = True
    elif row[12] == 'f':
        scored_lp = False
    else: 
        print(string_error + "Scored LP")
        print(row)
        exit()

    if row[13] == 't': 
        scored_other = True
    elif row[13] == 'f':
        scored_other = False
    else: 
        print(string_error + "Scored Other")
        print(row)
        exit()

    if row[15] == 't':
        nor_foul = True
    elif row[15] == 'f':
        nor_foul = False
    else: 
        print(string_error + "Normal Foul")
        print(row) 
        exit()

    if row[16] == 't':
        tech_foul = True
    elif row[16] == 'f':
        tech_foul = False
    else: 
        print(string_error + "Tech Foul")
        print(row)
        exit()

    if row[17] == 't': 
        y_card = True
    elif row[17] == 'f':
        y_card = False
    else: 
        print(string_error + "Yellow Card")
        print(row)
        exit()

    if row[18] == 't': 
        r_card = True
    elif row[18] == 'f':
        r_card = False
    else:
        print(string_error + "Red Card")
        print(row)
        exit()

    if row[21] == 't': 
        unctrl_crash = True
    elif row[21] == 'f':
        unctrl_crash = False
    else: 
        print(string_error + "Uncontrolled Crashing")
        print(row)
        exit()

    if row[22] == 't':
        broken_drive = True
    elif row[22] == 'f': 
        broken_drive = False
    else: 
        print(string_error + "Broken Drive")
        print(row)
        exit()
    if row[23] == 't':
        played_def = True
    elif row[23] == 'f':
        played_def = False
    else: 
        print(string_error + "Played Defense")
        print(row)
        exit()

    row_dict =  { 
    #Match Data
        'Scout ID' : row[0], #str
        'Team #' : row[1], #str
        'Match #' : row[2], #str
        'Alliance' : row[3], #str 
    #Positional Data (pt. 1) 
        'On Field' : on_field, #bool
        'Left Tarmac' : left_tarmac, #bool
    #Fix below | Intentional placeholder    
    #   'Auto Cargo Collected': str(auto_cargo), #str
    #Numerical Data
        'Auto Upper' : int(row[7]), #int
        'Auto Lower' : int(row[8]), #int
        'Teleop Upper' : int(row[9]), #int
        'Teleop Lower' : int(row[10]), #int
    #Modded Attempted Cargo for paper scout compatibility
        'Attempted Cargo' : (int(row[19]) + int(row[20])),
    #Positional Data (pt.2)
        'Scored Tarmac' : scored_tar, #bool
        'Scored LP' : scored_lp, #bool
        'Scored Other' : scored_other, #bool
        'Climb State' : row[14], #str
    #Other stuff
        'Normal Foul' : nor_foul, #bool
        'Tech Foul' : tech_foul, #bool
        'Yellow Card' : y_card, #bool
        'Red Card' : r_card, #bool
        'Opposing High' : int(row[19]), #int
        'Opposing Low' : int(row[20]), #int
        'Uncontrolled Crashing' : unctrl_crash, #bool
        'Broken Drive' : broken_drive, #bool
        'Played Defense' : played_def, #bool
        'Climb Score' : climb_score}
    row_list.append(row_dict)
data = pd.DataFrame(row_list)
print(data)
