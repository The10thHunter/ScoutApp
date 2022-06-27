#Reads CSV and translates into classes & variables

import numpy as np
import pandas as pd

full_scout_data = pd.read_csv('data.csv', skipinitialspace = True) 

team_num = input("What team are you looking for?")
team_num = int(team_num)
test_print = full_scout_data.loc[full_scout_data['Team #'] == team_num]

#Remove above input query later as the query will be in the init file


