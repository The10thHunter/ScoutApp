import pandas as pd 

pre_csv = open('strings.txt')

raw_data = pd.DataFrame(columns = ['Scout ID', 'Team #', 'Match #', 'Alliance Color', 'On Field?', 
    'Left Tarmac?', 'Zones entered', 'Auto Upper', 'Auto Lower', 'Teleop Upper', 'Teleop Lower',
    'Scored Tarmac?, Scored LP?, Scored Other?, Level Climbed?', 'Normal Foul?', 'Tech Foul?', 
    'Yellow?', 'Red?', 'Broken Drive?', 'Played Def?', 'Uncontrolled Crashes?'])
for string in pre_csv:
    string = string.split('.')
    #Debug: 
    print(string)
    #Match Data
    scout_id = string[0] #str
    team_num = string[1] #int
    match_num = string[2] #int
    a_color = string[3] #str 
    #Positional Data (pt. 1) 
    on_field = string[4] #bool
    left_tarmac = string[5] #bool
    zones = string[6] #int
    #Numerical Data
    auto_upper = string[7] #int
    auto_lower = string[8] #int
    teleop_upper = string[9] #int
    teleop_lower = string[10] #int
    '''opposing_cargo = string[10] #int'''
    #Positional Data (pt.2)
    scored_tarmac = string[11] #bool
    scored_lp = string[12] #bool
    scored_other = string[13] #bool
    #Climb, Positional Data (pt.3) 
    climb_state = string[14] #str
    #Other stuff
    foul_nor = string[15] #bool
    tech_foul = string[16] #bool
    y_card = string[17] #bool
    r_card = string[18] #bool
    #Skip 19, Opposing Cargo doesn't really exist here
    broken_drive = string[20] #bool
    played_def = string[21] #bool
    unctrl_crash = string[22] #bool
    
    int_conv = [match_num, team_num, zones, auto_upper, auto_lower, teleop_upper, teleop_lower]
    bool_conv = [on_field, left_tarmac, scored_tarmac, scored_lp, scored_other, foul_nor, 
            tech_foul, y_card, r_card, broken_drive, played_def, unctrl_crash]

    data = [scout_id, match_num, team_num, a_color, zones, on_field, left_tarmac, zones, auto_upper, 
            auto_lower, teleop_upper, teleop_lower, scored_tarmac, scored_lp, scored_other, 
            climb_state, foul_nor, tech_foul, y_card, r_card, broken_drive, 
            played_def, unctrl_crash] 

    raw_data.append(data, ignore_index = True)
class Data:
    def __init__(self, raw_data):
        self.raw_data = raw_data
