import pandas as pd 
#pre_csv = pd.read_csv('raw_strings.csv').to_list()    
'''Debug: '''
pre_csv = input('String Input:')
for string in pre_csv:
    string = str(string)
    string = string.split('.')
    #Match Data
    scout_id = string[0] #str
    match_num = string[1] #int
    team_num = string[2] #int
    #Positional Data (pt. 1) 
    on_field = string[3] #bool
    left_tarmac = string[4] #bool
    zones = string[5] #int
    #Numerical Data
    auto_upper = string[6] #int
    auto_lower = string[7] #int
    teleop_upper = string[8] #int
    teleop_lower = string[9] #int
    #Positional Data (pt.2)
    scored_tarmac = string[10] #bool
    scored_lp = string[11] #bool
    scored_other = string[12] #bool
    #Climb, Positional Data (pt.3) 
    climb_t = string[13] #bool
    climb_h = string[14] #bool
    climb_m = string[15] #bool
    climb_l = string[16] #bool
    #Other stuff
    foul_nor = string[17] #bool
    tech_foul = string[18] #bool
    y_card = string[19] #bool
    r_card = string[20] #bool
    broken_drive = string[21] #bool
    played_def = string[23] #bool
    unctrl_crash = string[24] #bool
    
    int_conv = [match_num, team_num, zones, auto_upper, auto_lower, teleop_upper, teleop_lower]
    bool_conv = [on_field, left_tarmac, scored_tarmac, scored_lp, scored_other, climb_t, climb_h, climb_m, climb_l, foul_nor, 
            tech_foul, y_card, r_card, broken_drive, played_def, unctrl_crash]

    data = [scout_id, match_num, team_num, a_color, zone_num, on_field, left_tarmac, zones, auto_upper, 
            auto_lower, teleop_upper, teleop_lower, scored_tarmac, scored_lp, scored_other, 
            climb_t, climb_h, climb_, climb_l, foul_nor, tech_foul, y_card, r_card, broken_drive, 
            played_def, unctrl_crash] 

    raw_data = pd.DataFrame(index = none)
print(raw_data)
