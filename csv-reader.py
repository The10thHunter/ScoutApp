#Reads CSV and translates into classes & variables

import numpy as np
import pandas as pd
import init.py

full_scout_data = pd.read_csv('data.csv', skipinitialspace = True) 

team_num = int(team_num)
team_frame = full_scout_data.loc[full_scout_data['Team #'] == team_num]

#Don't forget to write what is being defined in the line below: self, Match, 
class LineData:
    def __init__(self, Match, Positional, Numerical, Other):

        def Match:
            def __init__(self, team_number, match_number, alliance_color):
                self.team_number = team_number
                self.match_number = match_number
                self.alliance_color = alliance_color
            
        def Positional:
        #Add climb_pos later, cause you don't know what to with it until qr -> string is done. 
        #It could be 4 booleaens or 1 str variable 

            def __init__(self, on_field, exited_tarmac_auto):
                self.on_field = on_field
                self.exited_tarmac_auto = tarmac_auto

        def Numerical
            def __init__(self, auto_upper, auto_lower, teleop_upper, teleop_lower, opposing_cargo_scored):
                self.auto_upper = auto_upper_cargo
                self.auto_lower = auto_lower_cargo
                self.teleop_upper = teleop_upper_cargo
                self.teleop_lower = teleop_lower_cargo
                self.opposing_cargo_scored = opposing_cargo
        #def Other(self, fouls, broken_drive, played_def, unctrl_crash):
            #def __init__(self):
                #Boolean needs to be defined in test CSV 


