import data
import pandas as pd
import numpy as np
entries = len(data.match_num)
#If no entries error: print(entries)
climb = data.climb 

avg_total_score = ((2*(2*(sum(data.auto_upper)) + sum(data.auto_lower)) + 
    (2*(sum(data.teleop_upper)) + sum(data.teleop_lower))) + sum(climb)) / entries

#Percentage shortcut func
def percent(*inpt):
    inpt = list(inpt)
    for number in inpt:
        outpt = (str(round(((100 * sum(inpt)) / entries), 2)) + '%')
    return outpt

#Highest Calculated Score 
high_calc_score = (2*(2*(max(data.auto_upper)) + max(data.auto_lower)) + (2*max(data.teleop_upper) + max(data.teleop_lower))) + max(climb)
min_calc_score = (2*(2*(min(data.auto_upper)) + min(data.auto_lower)) + (2*min(data.teleop_upper) + min(data.teleop_lower))) + min(climb)

#Hi/Low Score in a match
per_match_total = []
for a, b, c, d, f in zip(data.auto_upper , data.auto_lower, data.teleop_upper, data.teleop_lower, data.climb):
    score = 4*a + 2*b + 2*c + d + f
    per_match_total.append(score)

#Replace with max & key if climb aligns with char len or some arbitrary means better than elif's
best_climb = max(data.climb)

if best_climb == 15:
    best_climb = 'Traversal'
elif best_climb == 10:
    best_climb = 'High'
elif best_climb == 6:
    best_climb = 'Middle'
elif best_climb == 4: 
    best_climb = 'Low'
else: 
    best_climb = 'DNC'

#Print

compiled_dict = {
    'Team #': data.usr_input[1],
    'Taxi %': data.team_cluster['Left Tarmac'].value_counts(normalize = True).mul(100).astype(str) + '%',
    'Made to field %' : data.team_cluster['On Field'].value_counts(normalize = True).mul(100).astype(str) + '%',
    'Best Climb': best_climb,
    'Average Match Score': round(avg_total_score, 2),
    'Highest Possible Score': high_calc_score,
    'Lowest Possible Score': min_calc_score,
    #'Best Match': high_score,
    #'Lowest Match': matchFind(lowest_score),
    #'Balls Collected': [*set(data.auto_cargo)],
    }
compiled_df = pd.DataFrame.from_dict(compiled_dict)
print(compiled_df)
