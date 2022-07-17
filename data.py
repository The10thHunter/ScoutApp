#Reads DataFrame and translates into classes & variables
from gen_df import raw_data
import numpy as np
import pandas as pd

team_cluster = raw_data.loc[raw_data['Team #'] == team_query]

class Team:
    @classmethod
    def usr_input(cls):
        return cls(
                input('Team Query: ')
                in
    
    class Match:
        def __init__(self, scout_id, team_num, match_num, alliance, **team_q):
            scout_id = team_cluster['Scout ID'].to_list()
            team_num = team_cluster['Team #'].to_list()
            self.match_num = team_cluster['Match #'].to_list()
            self.alliance = team_cluster['Alliance Color'].to_list()
    class Positional:
        def __init__(self, on_field, left_tarmac_auto, scored_tarmac, scored_other, scored_lp, opposing_cargo, climb_status):
            self.on_field = team_cluster['On Field?'].to_list()
            self.left_tarmac_auto = team_cluster['Left Tarmac in Auto?'].to_list()
            self.scored_tarmac = team_cluster['Scored Tarmac?'].to_list()
            self.scored_other = team_cluster['Scored Other?'].to_list()
            self.scored_lp = team_cluster['Scored LP?'].to_list()
            self.opposing_cargo = team_cluster['Cargo Collected'].to_list()

    class Numerical:
        def __init__(self, auto_upper, auto_lower, teleop_upper, teleop_lower):
            self.auto_upper = team_cluster['Auto Cargo Upper'].to_numpy()
            self.auto_lower = team_cluster['Auto Cargo Lower'].to_numpy()
            self.teleop_upper = team_cluster['Teleop Upper'].to_numpy()
            self.teleop_lower = team_cluster['Teleop Lower'].to_numpy()
            #Don't forget opposing cargo
    class Other:
        def __init__(self, foul_nor, tech_foul, y_card, r_card, broken_drive, played_def, unctrl_crash):
            self.foul_nor = team_cluster['Normal Foul?'].to_list()
            self.tech_foul = team_cluster['Tech Foul?'].to_list()
            self.y_card = team_cluster['Yellow?']
            self.r_card = team_cluster['Red?']
            self.broken_drive = team_cluster['Broken Drive?']
            self.played_def = team_cluster['Played Def?']
            self.unctrl_crash = team_cluster['Uncontrolled Crashing?']
