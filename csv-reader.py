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
    
    class Match:
        def __init__(self, scout_id, team_number, match_num, alliance):

    class Positional:
        def __init__(self, on_field, exited_tarmac_auto, scored_tarmac, scored_other, scored_launchpad, climb_t, climb_h, climb_m, climb_l):

        def __init__(self, on_field, exited_tarmac_auto, scored_tarmac, scored_other, scored_launchpad, climb_t, climb_h, climb_m, climb_l):
            self.on_field = on_field
            self.exited_tarmac_auto = tarmac_auto
                    

        class Numerical
            def __init__(self, auto_upper, auto_lower, teleop_upper, teleop_lower, opposing_cargo_scored):
                self.auto_upper = auto_upper
                auto_upper = team_cluster.loc[team_cluster[:, 'Auto Cargo Upper']]
                self.auto_lower = auto_lower
                auto_lower = team_cluster.loc[team_cluster[:, 'Auto Cargo Lower']]
                self.teleop_upper = teleop_upper
                teleop_upper = team_cluster.loc[team_cluster[:, 'Teleop Upper']]
                self.teleop_lower = teleop_lower
                teleop_lower = team_cluster.loc[team_cluster[:, 'Teleop Lower']]
                self.opposing_cargo_scored = opposing_cargo
                #Opposing cargo isn't going to be factored into overall measurements, 
                #because quite honestly it isn't a big deal to seperate high and low
                opposing_cargo = 

        class Other
            def __init__(self, foul_nor, tech_foul, y_card, r_card, broken_drive, played_def, unctrl_crash):
                self.foul_nor = 

    pass
"""          

