#Reads CSV and translates into classes & variables

import numpy as np
import pandas as pd
#import init.py

full_scout_data = pd.read_csv('data.csv', skipinitialspace = True) 
team_query = input('Team Query:')
team_query = int(team_query)
team_cluster = full_scout_data.loc[full_scout_data['Team #'] == team_query]

#Don't forget to write what is being defined in the line below: self, Match, 
class Team:
    def __init__(self, CSV_Display): #Categorized):

        @classmethod
        def CSV_Display
            print(team_cluster)

        class Data:
            def __init__(self, scout_id, team_number, match_num, alliance, on_field, exited_tarmac_auto, auto_upper_cargo, auto_lower_cargo, teleop_upper_cargo, teleop_lower_cargo, opposing_cargo_scored): 
            
            class Positional:
                def __init__(self, on_field, exited_tarmac_auto, scored_tarmac, scored_other, scored_launchpad, climb_t, climb_h, climb_m, climb_l):

                def __init__(self, on_field, exited_tarmac_auto):
                    self.on_field = on_field
                    self.exited_tarmac_auto = tarmac_auto

            class Numerical
                def __init__(self, auto_upper, auto_lower, teleop_upper, teleop_lower, opposing_cargo_scored):
                    self.auto_upper = auto_upper_cargo
                    self.auto_lower = auto_lower_cargo
                    self.teleop_upper = teleop_upper_cargo
                    self.teleop_lower = teleop_lower_cargo
                    self.opposing_cargo_scored = opposing_cargo
        def Other(self, fouls, broken_drive, played_def, unctrl_crash):
            def __init__(self):
                # Boolean needs to be defined in test CSV 
