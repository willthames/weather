import numpy as np
from pandas import *

def rainfall(filename, year, month):
    columns = ["year", "month"]
    columns.extend(range(1,32))
    df = read_csv(filename, sep="\s*", header=None, skiprows=4,
                  names=columns)
    year_df = df[df["year"]==year]
    month_df = year_df[year_df["month"]==month].T 
    
    index=['na1','na2']
    index.extend(['{0}-{1:02}-{2:02}'.format(year, month, x) for x in range(1,32)])
    month_df.index = index

    month_df = month_df.rename(columns={ month_df.columns[0]: 'Rainfall' })
    month_df.ix[['na1','na2']] = -99
    return month_df[month_df['Rainfall'] > 0]

# Testing ... 

if __name__ == "__main__":
    year = 2012
    month = 4
    filename = "HadSEEP_daily_qc.txt"

    df = rainfall(filename, year, month)

    print df
