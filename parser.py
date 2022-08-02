import pandas as pd 

pre_df = open('strings.txt')
data = pd.DataFrame()
list_main = []
for string in pre_df:
    string = string.split(",")
    list_main.append(string)
for row in list_main:
    row = str(row)
    row = row.split('.')
    #Match Data
    row_dict = {
        'Scout ID' : row[0], #str
        'Team #' : row[1], #str
        'Match #' : row[2], #str
        'Alliance' : row[3], #str 
    #Positional Data (pt. 1) 
        'On Field' : bool(row[4]), #bool
        'Left Tarmac' : bool(row[5]), #bool
        'Auto Cargo Collected': row[6].split('/'), #List 
        #str, needs to be split to list ^, perhaps auto_cargo = row[6].split('/') [new line] 'Auto Cargo' : auto_cargo
    #Numerical Data
        'Auto Upper' : int(row[7]), #int
        'Auto Lower' : int(row[8]), #int
        'Teleop Upper' : int(row[9]), #int
        'Teleop Lower' : int(row[10]), #int
    #Positional Data (pt.2)
        'Scored Tarmac' : bool(row[11]), #bool
        'Scored LP' : bool(row[12]), #bool
        'Scored Other' : bool(row[13]), #bool
        'Climb State' : bool(row[14]), #str
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
    data = data.drop_duplicates()
    data = data.sort_values(by='Match #')
