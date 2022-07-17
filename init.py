import pandas as pd
from pathlib import Path

data_type = input('(1) Raw Data, (2) Compiled Team Data, (3) Alliance Comparison Data')
if data_type = '1':
    from gen_df import raw_data
    filepath = Path('~/Downloads/exported_data.csv')
    raw_data.to_csv(filepath)
if data_type = '2':

