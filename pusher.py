import pandas as pd
import sensitive, parser, gspread
#Change the file path to general later, perhaps even find a way to get the pwd of the running terminal 
gc = gspread.service_account()
try: 
    #Insert your URL below in the quotes
    sheet = gc.open('Scout App - Results')
except: 
    print('No Google Sheet detected. Creating new...')
    sheet = gc.create('Scout App - Results')
    sheet_id = sheet.url
    print(sheet_id)
    sheet = gc.open_by_url(sheet_id)
try:
    worksheet = sheet.worksheet('Raw Data')
except: 
    worksheet = sheet.add_worksheet(title = 'Raw Data', rows = 600, cols = 30)
    sheet.del_worksheet('Sheet 1')
#Insert your Gmail in sensitive.py
sheet.share(sensitive.real_email, perm_type = 'user', role = 'writer')
worksheet.update([parser.data.columns.values.tolist()] + parser.data.values.tolist())
try: 
    worksheet = sheet.worksheet('Compiled - Teams')
except: 
    worksheet = sheet.add_worksheet(title = 'Compiled - Teams', rows = 100, cols = 10)
worksheet.update([compiler.teams_compiled.columns.values.tolist()] + compiler.teams_compiled.values.tolist())
