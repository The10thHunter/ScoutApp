import gspread
import pandas as pd
import sensitive
from compiler import compiled_df

#Change the file path to general later, perhaps even find a way to get the pwd of the running terminal 
gc = gspread.service_account()
try: 
    #Insert your URL below in the quotes
    sheet = gc.open(sensitive.sheet_name)
except: 
    print('No Google Sheet detected. Creating new...')
    sheet = gc.create('Scout App - Results')
    sheet_id = sheet.url
    print(sheet_id)
    sheet = gc.open_by_url(sheet_id)

#Insert your Gmail in sensitive.py
sheet.share(sensitive.real_email, perm_type = 'user', role = 'writer')

