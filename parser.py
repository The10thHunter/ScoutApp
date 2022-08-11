import pandas as pd

strings_txt = open('strings.txt').read()
strings = strings_txt.split(',')
del strings[-1]
data = pd.DataFrame()

for string in strings:
    row = string.split('.')

    auto_cargo = []
    for ball in row[6]:
        ball = ball.split('/')
        auto_cargo.append(ball)

    row_dict = {
    #Match Data
        'Scout ID' : row[0], #str
        'Team #' : row[1], #str
        'Match #' : row[2], #str
        'Alliance' : row[3], #str 
    #Positional Data (pt. 1) 
        'On Field' : bool(row[4]), #bool
        'Left Tarmac' : bool(row[5]), #bool
        'Auto Cargo Collected': auto_cargo, #List 
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
    new_row = pd.DataFrame.from_dict(row_dict, orient = 'Columns')
    data = pd.concat([data, new_row])
data = data.sort_values(by='Match #')
