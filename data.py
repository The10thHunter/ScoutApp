#Reads DataFrame and translates into classes & variables
import parser
import numpy as np
import pandas as pd

data = parser.data
print(data.columns)
usr_input = input('Inputs (,): ')
usr_input = usr_input.split(',')

if usr_input[1] == 'all':
    team_cluster = data
else:
    team_cluster = data.loc[data[usr_input[0]] == usr_input[1]]

scout_id = team_cluster['Scout ID'].to_list()
team_num = team_cluster['Team #'].to_list()
match_num = team_cluster['Match #'].to_list()
alliance = team_cluster['Alliance'].to_list()
on_field = team_cluster['On Field'].to_list()
left_tar = team_cluster['Left Tarmac'].to_list()
scored_tarmac = team_cluster['Scored Tarmac'].to_list()
scored_other = team_cluster['Scored Other'].to_list()
scored_lp = team_cluster['Scored LP'].to_list()

climb = []
str_climb = team_cluster['Climb State'].to_list()
for state in str_climb: 
    if state == 'traversal':
        state = 15
    elif state == 'high':
        state = 10
    elif state == 'middle':
        state = 6 
    elif state == 'low':
        state = 4
    else:
        state = 0
    
    climb.append(state)
 
auto_cargo = team_cluster['Auto Cargo Collected'].to_list()
auto_upper = team_cluster['Auto Upper'].to_numpy()
auto_lower = team_cluster['Auto Lower'].to_numpy()
teleop_upper = team_cluster['Teleop Upper'].to_numpy()
teleop_lower = team_cluster['Teleop Lower'].to_numpy()
opposing_high = team_cluster['Opposing High'].to_numpy()
opposing_low = team_cluster['Opposing Low'].to_numpy()
foul_nor = team_cluster['Normal Foul'].to_list()
tech_foul = team_cluster['Tech Foul'].to_list()
y_card = team_cluster['Yellow Card'].to_list()
r_card = team_cluster['Red Card'].to_list()
broken_drive = team_cluster['Broken Drive'].to_list()
played_def = team_cluster['Played Defense'].to_list()
unctrl_crash = team_cluster['Uncontrolled Crashing'].to_list()
