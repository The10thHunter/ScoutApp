import pandas as pd 
import numpy as np
import parser
compiled_team_data = []

def percent(*inpt):
    inpt = inpt*100
    outpt = str(inpt) + '%'
teams_scouted = parser.data['Team #'].values.tolist()
#Team Analysis:
for team in teams_scouted:
    team_df = parser.data.loc[parser.data['Team #'] == team]
    auto_upper = parser.data['Auto Upper'].values.tolist()
    auto_lower = parser.data['Auto Lower'].values.tolist()
    teleop_upper = parser.data['Teleop Upper'].values.tolist()
    teleop_lower = parser.data['Teleop Lower'].values.tolist()
    climb_score = parser.data['Climb Score'].values.tolist()
    score_list = []
    teleop_scores = []
    for a, b, c, d, f in zip(auto_upper, auto_lower, teleop_upper, teleop_lower, climb_score):
        final_score = 2*((2*a) + b) + (2*c) + d + f
        score_list.append(final_score)
    
    sorted_scores = score_list.sort()
    max_score = max(score_list)
    min_score = min(score_list)
    #min_nonzero_score = sorted_scores[1]
    avg_score = sum(score_list) / len(score_list)
    consistency_margin = percent(((float(min_score)) / (float(max_score))))

    for a, b in zip(teleop_upper, teleop_lower):
        outpt = 2*a + b
        teleop_scores.append(outpt)
    
    max_teleop = max(teleop_scores)
    avg_teleop = float(sum(teleop_scores)) / len(teleop_scores)
    min_teleop = min(teleop_scores)
    teleop_percent = percent(avg_teleop / avg_score)

    compiled_team = {
            'Lowest Score' : min_score,
            'Average Scores' : avg_score,
            'Consistency %' : consistency_margin,
            'Avg % of scores in Teleop' : teleop_percent,
            'Max Cycle Time' : (max_teleop / 120),
            'Average Cycle Time' : (avg_teleop / 120),
            'Min Cycle Time' : (min_teleop / 120),
            'Highest Climb' : max(climb_score)
            }
    compiled_team_data.append(compiled_team)
    
teams_compiled = pd.DataFrame(data = compiled_team_data)
print(teams_compiled)

#Match Validator 
'''
for match in max(parser.data['Match #'].values.tolist()):
    match_data = parser.data.loc[parser.data['Match #'] == match]
    print(match)
    print(match_data)
'''
#Match Analysis
'''
teams = input("Input teams (,):")
teams = teams.split(',')

A1 = [teams[0], teams[1], teams[2]]
A2 = [teams[3], teams[4], teams[5]]
'''
