#Reads CSV and translates into classes & variables

import numpy as np
import pandas as pd
#import init.py

full_scout_data = pd.read_csv('data.csv', skipinitialspace = True) 
team_query = input('Team Query:')
team_query = int(team_query)
team_cluster = full_scout_data.loc[full_scout_data['Team #'] == team_query]

class Team:
    
    class Match:
        def __init__(self, scout_id, team_number, match_num, alliance):

    class Positional:
        def __init__(self, on_field, exited_tarmac_auto, scored_tarmac, scored_other, scored_launchpad, climb_t, climb_h, climb_m, climb_l):
            self.on_field = on_field
            self.exited_tarmac_auto = tarmac_auto
            

    class Numerical:
        def __init__(self, auto_upper, auto_lower, teleop_upper, teleop_lower, opposing_cargo_scored):
            auto_upper = team_cluster['Auto Cargo Upper'].to_numpy()
            auto_lower = team_cluster['Auto Cargo Lower'].to_numpy()
            teleop_upper = team_cluster['Teleop Upper'].to_numpy()
            teleop_lower = team_cluster['Teleop Lower'].to_numpy()
            #Don't forget opposing cargo
            self.auto_upper = auto_upper
            self.auto_lower = auto_lower 
            self.teleop_upper = teleop_upper
            self.teleop_lower = teleop_lower
  
#You should define variables and then put them into their classes not the other way around

    class Other:
        def __init__(self, foul_nor, tech_foul, y_card, r_card, broken_drive, played_def, unctrl_crash):
            self.foul_nor = 

    pass
